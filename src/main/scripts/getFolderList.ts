/*
 * @Author: Kim
 * @Date: 2021-12-20 16:53:25
 * @LastEditTime: 2021-12-23 17:17:48
 * @LastEditors: Kim
 * @Description:
 * @FilePath: /ximaToolkit/src/main/scripts/getFolderList.ts
 */
import { readdir } from 'fs/promises';

export default function getFolderList(path: string) {
	console.log('getFolderList path', path);
	return readdir(path, { withFileTypes: true });
}
