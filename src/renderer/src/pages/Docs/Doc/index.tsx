/*
 * @Author: Kim
 * @Date: 2021-12-16 16:05:09
 * @LastEditTime: 2021-12-20 13:57:31
 * @LastEditors: Kim
 * @Description:
 * @FilePath: /ximaToolkit/src/renderer/src/pages/Docs/Doc/index.tsx
 */
import { Card, Typography } from 'antd';

import styles from './index.module.scss';
export interface IDoc {
  title: string;
  link: string;
  description: string;
  contact: string;
}

const { Paragraph } = Typography;

export default function Doc(props: IDoc) {
  const { title, description, contact, link } = props;
  const rows = 4;
  const lineHeight = '24px';
  const height = `calc(${lineHeight} * ${rows})`;

  const handleClick = () => {
    window.open(link, '_blank');
  };

  return (
    <Card
      style={{ width: 300, margin: 20 }}
      bodyStyle={{ height: 200 }}
      title={title}
      hoverable
      extra={
        <a href={link} target="_blank" rel="noopener noreferrer">
          查看详情
        </a>
      }
    >
      <div className={styles.contentContainer}>
        <Paragraph ellipsis={{ rows, tooltip: true }} style={{ lineHeight, height }} onClick={handleClick}>
          {description}
        </Paragraph>
        <p className={styles.contact}>联系人： {contact}</p>
      </div>
    </Card>
  );
}
