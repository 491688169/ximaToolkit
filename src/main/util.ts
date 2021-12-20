/*
 * @Author: Kim
 * @Date: 2021-12-13 17:48:44
 * @LastEditTime: 2021-12-20 12:14:19
 * @LastEditors: Kim
 * @Description:
 * @FilePath: /ximaToolkit/src/main/util.ts
 */
/* eslint import/prefer-default-export: off, import/no-mutable-exports: off */
import { URL } from 'url';
import path from 'path';

export let resolveHtmlPath: (htmlFileName: string) => string;

if (process.env.NODE_ENV === 'development') {
	const port = process.env.PORT || 3333;
	resolveHtmlPath = (htmlFileName: string) => {
		const url = new URL(`http://localhost:${port}`);
		// url.pathname = htmlFileName;
		return url.href;
	};
} else {
	resolveHtmlPath = (htmlFileName: string) => {
		return `file://${path.resolve(
			__dirname,
			'../renderer/',
			htmlFileName
		)}`;
	};
}
