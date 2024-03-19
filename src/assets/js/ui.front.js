import { createStore } from 'vuex';

export const vars = createStore({
  state() {
    return {
      isDevice: false,
      isIOS: false,
      headerData: {}
    };
  }
});
