/*
 * @Author: Kim
 * @Date: 2021-12-20 14:35:21
 * @LastEditTime: 2021-12-29 08:47:53
 * @LastEditors: Kim
 * @Description:
 * @FilePath: /ximaToolkit/src/renderer/src/pages/Projects/index.tsx
 */
import { useEffect, useState } from 'react';
import store from '@/store';

import Project, { IProject } from './Project';
import { workspaceReadSender, workspaceReadListener, workspaceReadListenerRemove } from '@/ipc/workspace';

import styles from './index.module.scss';

export default function Projects() {
  const [workspaceState] = store.useModel('workspace');
  const [projects, setProjects] = useState<IProject[]>([]);

  const { root } = workspaceState;

  useEffect(() => {
    workspaceReadSender(root);
    workspaceReadListener((files) => {
      const projectList = files.map((file) => {
        return {
          name: file.name,
          path: `${root}/${file.name}`,
        };
      });
      setProjects(projectList);
    });

    return () => {
      workspaceReadListenerRemove();
    };
  }, []);

  return (
    <div className={styles.container}>
      {projects &&
        projects.map((project) => {
          return <Project {...project} key={project.name} />;
        })}
    </div>
  );
}
