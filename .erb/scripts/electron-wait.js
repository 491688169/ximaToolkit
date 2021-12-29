/*
 * @Author: Kim
 * @Date: 2021-12-20 13:33:42
 * @LastEditTime: 2021-12-23 10:18:55
 * @LastEditors: Kim
 * @Description:
 * @FilePath: /ximaToolkit/.erb/scripts/electron-wait.js
 */
const net = require('net');
const port = process.env.PORT ? process.env.PORT - 100 : 3333;

process.env.ELECTRON_START_URL = `http://localhost:${port}`;

const client = new net.Socket();

let startedElectron = false;
const tryConnection = () =>
	client.connect({ port: port }, () => {
		client.end();
		if (!startedElectron) {
			console.log('starting electron');
			startedElectron = true;
			const exec = require('child_process').exec;
			const child = exec('npm run start:main');
			child.stdout.on('data', function (data) {
				console.log('stdout: ' + data);
			});
			child.stderr.on('data', function (data) {
				console.log('stdout: ' + data);
			});
			child.on('close', function (code) {
				console.log('closing code: ' + code);
			});
		}
	});

tryConnection();

client.on('error', (error) => {
	setTimeout(tryConnection, 1000);
});
