/*
 * @Author: Kim
 * @Date: 2021-12-13 17:48:44
 * @LastEditTime: 2021-12-23 11:40:13
 * @LastEditors: Kim
 * @Description:
 * @FilePath: /ximaToolkit/src/main/preload.js
 */
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
	ipcRenderer: {
		myPing() {
			ipcRenderer.send('ipc-example', 'ping');
		},
		on(channel, func) {
			ipcRenderer.on(channel, (event, ...args) => func(...args));
		},
		once(channel, func) {
			ipcRenderer.once(channel, (event, ...args) => func(...args));
		},
		removeAllListeners(channel) {
			ipcRenderer.removeAllListeners(channel);
		},
		send(channel, ...args) {
			console.log('send', channel, ...args);
			ipcRenderer.send(channel, args);
		},
	},
});
