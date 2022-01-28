/*
 * @Author: Kim
 * @Date: 2021-12-20 14:35:21
 * @LastEditTime: 2022-01-21 16:19:11
 * @LastEditors: Kim
 * @Description:
 * @FilePath: /ximaToolkit/src/renderer/src/pages/Projects/index.tsx
 */
import { useEffect } from 'react';
import store from '@/store';

import Project from './Project';
import { useWorkspaceRead, workspaceReadSend } from '@/ipc/ipc';

import styles from './index.module.scss';

export default function Projects() {
  const [workspaceState] = store.useModel('workspace');

  const { root } = workspaceState;

  const dirs = useWorkspaceRead();
  const dirsInfo = dirs.map((dir) => {
    return {
      name: dir.name,
      path: `${root}/${dir.name}`,
    };
  });

  useEffect(() => {
    workspaceReadSend(root);
  }, [root]);

  return (
    <div className={styles.container}>
      {dirsInfo &&
        dirsInfo.map((project) => {
          return <Project {...project} key={project.name} />;
        })}
    </div>
  );
}
