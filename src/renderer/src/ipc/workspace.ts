/*
 * @Author: Kim
 * @Date: 2021-12-29 07:38:49
 * @LastEditTime: 2021-12-29 08:33:44
 * @LastEditors: Kim
 * @Description:
 * @FilePath: /ximaToolkit/src/renderer/src/ipc/workspace.ts
 */

export function workspaceReadSender(root: string) {
  window.electron.ipcRenderer.send('workspace-read', { root });
}

export function workspaceReadListener(cb: (files: Array<{ name: string }>) => void) {
  window.electron.ipcRenderer.on('workspace-read', (files) => {
    cb(files);
  });
}

export function workspaceReadRcSender(dirname: string) {
  window.electron.ipcRenderer.send('workspace-read-rc', { dirname });
}

export function workspaceReadListenerRemove() {
  window.electron.ipcRenderer.removeAllListeners('workspace-read');
}
