/*
 * @Author: Kim
 * @Date: 2021-12-20 14:40:56
 * @LastEditTime: 2021-12-20 18:53:32
 * @LastEditors: Kim
 * @Description:
 * @FilePath: /ximaToolkit/src/renderer/src/pages/Projects/Project/index.tsx
 */
import { Card } from 'antd';
// import { ipcRenderer } from 'electron';
import { FolderFilled } from '@ant-design/icons';

import styles from './index.module.css';

export interface IProject {
  name: string;
  path: string;
}

export default function Project(props: IProject) {
  const { name } = props;
  // ipcRenderer.sendSync('workspace-read', (event, arg) => {
  //   console.log(arg);
  // });

  return (
    <Card className={styles.container} hoverable>
      <div className={styles.foldericon}>
        <FolderFilled color="#7DCEFB" twoToneColor="#7DCEFB" style={{ color: '#7DCEFB' }} />
      </div>
      <span className={styles.foldername}>{name}</span>
    </Card>
  );
}
