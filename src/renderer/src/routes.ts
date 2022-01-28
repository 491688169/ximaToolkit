/*
 * @Author: Kim
 * @Date: 2021-12-15 21:28:39
 * @LastEditTime: 2021-12-30 07:39:30
 * @LastEditors: Kim
 * @Description:
 * @FilePath: /ximaToolkit/src/renderer/src/routes.ts
 */
import { IRouterConfig } from 'ice';
import Layout from '@/Layouts/BasicLayout';
import Projects from '@/pages/Projects';
import Home from '@/pages/Docs';
import Detail from './pages/Projects/Detail';
import NotFound from '@/components/NotFound';

const routerConfig: IRouterConfig[] = [
  {
    path: '/',
    component: Layout,
    redirect: '/docs',
    children: [
      {
        path: '/projects',
        component: Projects,
        pageConfig: {
          scrollToTop: true,
        },
      },
      {
        path: '/project',
        component: Detail,
        pageConfig: {
          scrollToTop: true,
        },
      },
      {
        path: '/docs',
        component: Home,
        pageConfig: {
          scrollToTop: true,
        },
      },
      {
        component: NotFound,
      },
    ],
  },
];

export default routerConfig;
