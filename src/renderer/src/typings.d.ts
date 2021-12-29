/*
 * @Author: Kim
 * @Date: 2021-12-15 21:28:39
 * @LastEditTime: 2021-12-29 08:29:29
 * @LastEditors: Kim
 * @Description:
 * @FilePath: /ximaToolkit/src/renderer/src/typings.d.ts
 */

declare module '*.module.less' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

interface channelSend {
  'workspace-read': { root: string };
  'workspace-read-rc': { dirname: string };
}
interface channelListener {
  'workspace-read': (files: Array<{ name: string }>) => void;
}

type ipcFunction = <K extends keyof channelListener>(channel: K, func: channelListener[K]) => void;
interface Window {
  electron: {
    ipcRenderer: {
      send: <K extends keyof channelSend>(channel: K, arg: channelSend[K]) => void;
      send: (channel: channel, ...args: any[]) => void;
      on: ipcFunction;
      once: ipcFunction;
      removeAllListeners: (channel: string) => void;
    };
  };
}
