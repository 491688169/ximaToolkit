/*
 * @Author: Kim
 * @Date: 2021-12-30 07:20:08
 * @LastEditTime: 2022-01-03 22:07:55
 * @LastEditors: Kim
 * @Description:
 * @FilePath: /ximaToolkit/src/renderer/src/pages/Projects/Detail/index.tsx
 */
import { useLocation, useHistory } from 'ice';
import { PageHeader, Descriptions, Button } from 'antd';
import { useEffect } from 'react';

import store from '@/store';
import { configSend, gitSend, useConfigRead, useGitRead } from '@/ipc/ipc';

const { Item } = Descriptions;

export default function Detail() {
  const history = useHistory();
  const [workspaceState] = store.useModel('workspace');

  const location = useLocation<{ name: string }>();
  const { name } = location.state;

  // const config = useConfigRead();
  const gitInfo = useGitRead();

  const { root } = workspaceState;
  const dirPath = `${root}/${name}`;
  // const configFilename = '.tool.config.json';

  // const configFilePath = `${dirPath}/${configFilename}`;

  // useEffect(() => {
  //   configSend(configFilePath);
  // }, [configFilePath]);

  useEffect(() => {
    gitSend(dirPath);
  }, [dirPath]);

  return (
    <div>
      <PageHeader title={name} onBack={history.goBack} />
      <Descriptions bordered extra={<OpenRepo url="https://www.baidu.com" />}>
        <Item label="项目名称">测试项目</Item>
        <Item label="创建时间">{gitInfo?.createTime}</Item>
        <Item label="最后更新时间">{gitInfo?.modifiedTime}</Item>
        <Item label="最后维护人">{gitInfo?.author}</Item>
      </Descriptions>
    </div>
  );
}

function OpenRepo(props: { url: string }) {
  const { url } = props;

  const handleClick = () => {
    window.open(url, '_blank');
  };

  return (
    <Button type="primary" onClick={handleClick}>
      前往仓库
    </Button>
  );
}
