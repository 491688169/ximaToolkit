/*
 * @Author: Kim
 * @Date: 2021-12-20 14:35:21
 * @LastEditTime: 2021-12-20 16:50:08
 * @LastEditors: Kim
 * @Description:
 * @FilePath: /ximaToolkit/src/renderer/src/pages/Projects/index.tsx
 */
import Project from './Project';

import styles from './index.module.css';

export default function Projects() {
  const projects = [
    {
      name: 'direA',
      path: '~/Workspace/direA',
    },
    {
      name: 'direB',
      path: '~/Workspace/direB',
    },
  ];

  return (
    <div className={styles.container}>
      {projects &&
        projects.map((project) => {
          return <Project {...project} key={project.path} />;
        })}
    </div>
  );
}
