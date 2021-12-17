/*
 * @Author: Kim
 * @Date: 2021-12-15 21:28:39
 * @LastEditTime: 2021-12-16 16:54:01
 * @LastEditors: Kim
 * @Description:
 * @FilePath: /ximaToolkit/src/renderer/src/pages/Docs/index.tsx
 */
import Doc, { IDoc } from './Doc';

import styles from './index.module.css';

export default function Docs() {
  const docs: IDoc[] = [
    {
      title: '文档1',
      link: 'https://www.baidu.com',
      description:
        '描述1描述1描述1描述1描述1描述1描述1描述1描述1描述1描述1描述1描述1描述1描述1描述1描述1描述1描述1描述1描述1描述1描述1描述1描述1描述1描述1描述1描述1描述1描述1描述1描述1描述1描述1描述1',
      contact: '联系人1',
    },
    {
      title: '文档2',
      link: 'https://www.baidu.com',
      description: '描述2',
      contact: '联系人2',
    },
  ];

  return (
    <div className={styles.container}>
      {docs &&
        docs.map((doc) => {
          return <Doc {...doc} key={doc.title} />;
        })}
    </div>
  );
}
