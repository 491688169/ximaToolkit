/*
 * @Author: Kim
 * @Date: 2021-12-29 07:38:49
 * @LastEditTime: 2022-01-03 21:40:30
 * @LastEditors: Kim
 * @Description:
 * @FilePath: /ximaToolkit/src/renderer/src/ipc/ipc.ts
 */

import { useState, useEffect } from 'react';

export type EventsType = 'workspace-read' | 'config-read' | 'git-read';

export function workspaceReadSend(root: string) {
  window.electron.ipcRenderer.send('workspace-read', { root });
}

export function configSend(configFile: string) {
  window.electron.ipcRenderer.send('config-read', { configFile });
}

export function gitSend(projectPath: string) {
  window.electron.ipcRenderer.send('git-read', { projectPath });
}

export function useWorkspaceRead() {
  const [dirs, setDirs] = useState<Array<{ name: string }>>([]);

  useEffect(() => {
    window.electron.ipcRenderer.on('workspace-read', (files) => {
      setDirs(files);
    });

    return () => listenerRemove('workspace-read');
  }, []);

  return dirs;
}

export function useConfigRead() {
  const [config, setConfig] = useState();

  useEffect(() => {
    window.electron.ipcRenderer.on('config-read', (c) => {
      setConfig(c);
    });

    return () => listenerRemove('config-read');
  }, []);

  return config;
}

export function useGitRead() {
  const [gitInfo, setGitInfo] = useState<{ author: string; modifiedTime: string; createTime: string }>();

  useEffect(() => {
    window.electron.ipcRenderer.on('git-read', (g) => {
      setGitInfo(g);
    });
    return () => listenerRemove('git-read');
  }, []);

  return gitInfo;
}

export function listenerRemove(channel: EventsType) {
  window.electron.ipcRenderer.removeAllListeners(channel);
}
