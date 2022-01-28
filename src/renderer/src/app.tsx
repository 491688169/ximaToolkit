/*
 * @Author: Kim
 * @Date: 2021-12-15 21:28:39
 * @LastEditTime: 2022-01-24 15:30:03
 * @LastEditors: Kim
 * @Description:
 * @FilePath: /ximaToolkit/src/renderer/src/app.tsx
 */
import { runApp, IAppConfig } from 'ice';

const appConfig: IAppConfig = {
  app: {
    rootId: 'root',
  },
  router: {
    type: 'browser',
  },
};

runApp(appConfig);
