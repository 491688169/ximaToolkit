/*
 * @Author: Kim
 * @Date: 2021-12-15 21:28:39
 * @LastEditTime: 2021-12-20 14:46:46
 * @LastEditors: Kim
 * @Description:
 * @FilePath: /ximaToolkit/src/renderer/src/routes.ts
 */
import { IRouterConfig } from 'ice';
import Layout from '@/Layouts/BasicLayout';
import Projects from '@/pages/Projects';
import Home from '@/pages/Docs';
import NotFound from '@/components/NotFound';

const routerConfig: IRouterConfig[] = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/projects',
        component: Projects,
      },
      {
        path: '/docs',
        component: Home,
      },
      {
        component: NotFound,
      },
    ],
  },
];

export default routerConfig;
