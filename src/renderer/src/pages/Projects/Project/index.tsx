/*
 * @Author: Kim
 * @Date: 2021-12-20 14:40:56
 * @LastEditTime: 2021-12-30 07:53:19
 * @LastEditors: Kim
 * @Description:
 * @FilePath: /ximaToolkit/src/renderer/src/pages/Projects/Project/index.tsx
 */
import { useHistory } from 'ice';
import { Card } from 'antd';
import { FolderFilled } from '@ant-design/icons';

import styles from './index.module.scss';

export interface IProject {
  name: string;
  path: string;
}

export default function Project(props: IProject) {
  const history = useHistory();

  const { name } = props;

  const handleClick = () => {
    history.push('/project', { name });
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
