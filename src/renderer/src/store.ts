/*
 * @Author: Kim
 * @Date: 2021-12-20 14:03:04
 * @LastEditTime: 2021-12-20 14:07:40
 * @LastEditors: Kim
 * @Description:
 * @FilePath: /ximaToolkit/src/renderer/src/store.ts
 */
import { createStore } from 'ice';
import workspace from './models/workspace';

const store = createStore(
  {
    workspace,
  },
  {
    // options
  },
);

export default store;
