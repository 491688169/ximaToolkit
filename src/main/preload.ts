/*
 * @Author: Kim
 * @Date: 2021-12-13 17:48:44
 * @LastEditTime: 2021-12-20 18:51:36
 * @LastEditors: Kim
 * @Description:
 * @FilePath: /ximaToolkit/src/main/preload.ts
 */
import { contextBridge, ipcRenderer } from 'electron';

import { Events } from './consts/type';

contextBridge.exposeInMainWorld('electron', {
	ipcRenderer: {
		// myPing() {
		// 	ipcRenderer.send('ipc-example', 'ping');
		// },
		on(channel: Events, func: (...args: any[]) => void): void {
			const validChannels = ['workspace-read'];
			if (validChannels.includes(channel)) {
				// Deliberately strip event as it includes `sender`
				ipcRenderer.on(channel, (event, ...args) => func(...args));
			}
		},
		once(channel: Events, func: (...args: any[]) => void): void {
			const validChannels = ['workspace-read'];
			if (validChannels.includes(channel)) {
				// Deliberately strip event as it includes `sender`
				ipcRenderer.once(channel, (event, ...args) => func(...args));
			}
		},
	},
});
