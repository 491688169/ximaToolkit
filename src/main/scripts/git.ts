/*
 * @Author: Kim
 * @Date: 2022-01-01 21:59:23
 * @LastEditTime: 2022-01-03 22:03:32
 * @LastEditors: Kim
 * @Description:
 * @FilePath: /ximaToolkit/src/main/scripts/git.ts
 */
import { execSync } from 'child_process';

import log from 'electron-log';

type FirstInfoType = {
	author: string;
	lastModified: string;
};

type LastInfoType = {
	createTime: string;
};

export default function getGitInfo(projectPath: string) {
	log.info('getGitInfo', projectPath);
	let info: FirstInfoType & LastInfoType = {
		author: '',
		lastModified: '',
		createTime: '',
	};
	try {
		const lastInfo = JSON.parse(
			execSync(
				'git log -1 --pretty=format:\'{author: "%an", lastModified: "%cd"}\' --date=format:\'%Y年%m月%d日\'',
				{
					cwd: projectPath,
				}
			).toString()
		) as LastInfoType;
		const firstInfo = JSON.parse(
			execSync(
				'git log --pretty=format:\'{"createTime": "%cd"}\' --date=format:"%Y年%m月%d日" --reverse | head -1',
				{
					cwd: projectPath,
				}
			).toString()
		) as FirstInfoType;

		info = { ...lastInfo, ...firstInfo };
	} catch (err) {
		log.error(err);
	}

	log.info('getGitInfo:', info);

	return info;
}
