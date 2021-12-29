/*
 * @Author: Kim
 * @Date: 2021-12-20 14:05:18
 * @LastEditTime: 2021-12-29 08:52:42
 * @LastEditors: Kim
 * @Description:
 * @FilePath: /ximaToolkit/src/renderer/src/models/workspace.ts
 */
export default {
  state: {
    root: '/Users/xmly/Workspace',
  },

  reducers: {
    update(prevState, payload) {
      return {
        ...prevState,
        ...payload,
      };
    },
  },
};
