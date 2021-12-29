/*
 * @Author: Kim
 * @Date: 2021-12-28 22:29:18
 * @LastEditTime: 2021-12-28 23:16:10
 * @LastEditors: Kim
 * @Description:
 * @FilePath: /ximaToolkit/src/main/listeners/workspace.ts
 */
import { ipcMain } from 'electron';
import log from 'electron-log';
import rc from 'rc';

import getFileList from '../scripts/getFolderList';

ipcMain.on('workspace-read', async (event, arg: { root: string }[]) => {
	log.info('main workspace-read', arg);
	try {
		const files = await getFileList(arg[0].root);
		log.info('main workspace-read files', files);
		event.reply(
			'workspace-read',
			files.filter((file) => file.isDirectory())
		);
	} catch (err) {
		log.error('main workspace-read files error', err);
		event.reply('worksapce-read', []);
	}
});

ipcMain.on('workspace-read-rc', async (event, arg: { dirname: string }[]) => {
	log.info('main workspace-read-rc', arg);
	try {
		const conf = rc(arg[0].dirname);
		delete conf['-'];
		console.log(`workspace-read-rc`, conf);
		event.reply('workspace-read-rc', conf);
	} catch (err) {
		log.error('main workspace-read-rc error', err);
		event.reply('worksapce-read', []);
	}
});
