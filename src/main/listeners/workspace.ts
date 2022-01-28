/*
 * @Author: Kim
 * @Date: 2021-12-28 22:29:18
 * @LastEditTime: 2022-01-03 16:13:01
 * @LastEditors: Kim
 * @Description:
 * @FilePath: /ximaToolkit/src/main/listeners/workspace.ts
 */
import { readFile } from 'fs';

import { ipcMain } from 'electron';
import log from 'electron-log';

import getFileList from '../scripts/getFolderList';

ipcMain.on('workspace-read', async (event, arg: [{ root: string }]) => {
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

ipcMain.on('config-read', async (event, arg: [{ configFile: string }]) => {
	log.info('main config-read', arg);
	try {
		readFile(arg[0].configFile, { encoding: 'utf-8' }, (err, data) => {
			log.info('config data', data);
			const config = JSON.parse(data);
			event.reply('config-read', config);
		});
	} catch (err) {
		log.error('main config-read error', err);
		event.reply('worksapce-read-rc', []);
	}
});
