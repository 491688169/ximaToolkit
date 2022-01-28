/*
 * @Author: Kim
 * @Date: 2022-01-01 23:12:03
 * @LastEditTime: 2022-01-03 21:55:24
 * @LastEditors: Kim
 * @Description:
 * @FilePath: /ximaToolkit/src/main/listeners/git.ts
 */
import { ipcMain } from 'electron';
import log from 'electron-log';

import getGitInfo from '../scripts/git';

ipcMain.on('git-read', async (event, arg: [{ projectPath: string }]) => {
	const gitInfo = getGitInfo(arg[0].projectPath);
	log.info(
		'git-read projectPath: %v, gitInfo: %v',
		arg[0].projectPath,
		gitInfo
	);
	event.reply('git-read', gitInfo);
});
