/*
 * @Author: Kim
 * @Date: 2021-12-15 21:28:39
 * @LastEditTime: 2022-01-03 16:21:30
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
interface Window {
  electron: {
    ipcRenderer: {
      send: (channel: string, ...args: any[]) => void;
      on: (channel: import('./ipc/ipc').EventsType, cb: Function) => void;
      once: (channel: EventsType, cb: Function) => void;
      removeAllListeners: (channel: EventsType) => void;
    };
  };
}
