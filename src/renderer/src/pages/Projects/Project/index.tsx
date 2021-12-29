/*
 * @Author: Kim
 * @Date: 2021-12-20 14:40:56
 * @LastEditTime: 2021-12-29 08:35:32
 * @LastEditors: Kim
 * @Description:
 * @FilePath: /ximaToolkit/src/renderer/src/pages/Projects/Project/index.tsx
 */
import { Card } from 'antd';
import { FolderFilled } from '@ant-design/icons';
import store from '@/store';

import { workspaceReadRcSender } from '@/ipc/workspace';

import styles from './index.module.scss';

export interface IProject {
  name: string;
  path: string;
}

export default function Project(props: IProject) {
  const [workspaceState] = store.useModel('workspace');
  const { root } = workspaceState;

  const { name } = props;

  const handleClick = () => {
    const dirname = `${root}/${name}`;
    workspaceReadRcSender(dirname);
  };

  return (
    <Card className={styles.container} hoverable onClick={handleClick}>
      <div className={styles.foldericon}>
        <FolderFilled color="#7DCEFB" twoToneColor="#7DCEFB" style={{ color: '#7DCEFB' }} />
      </div>
      <span className={styles.foldername}>{name}</span>
    </Card>
  );
}
