/*
 * @Author: Kim
 * @Date: 2021-12-15 21:28:39
 * @LastEditTime: 2021-12-15 21:35:02
 * @LastEditors: Kim
 * @Description:
 * @FilePath: /ximaToolkit/src/temp/src/app.tsx
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
