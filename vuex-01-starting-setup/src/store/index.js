import { createStore } from 'vuex';

import rootMutations from './mutations';
import rootActions from './actions';
import rootGetters from './getters';
import counterModule from './counter/index';

const store = createStore({
  modules: {
    numbers: counterModule,
  },
  //저장소는 한 애플리케이션 당 하나만 가진다.
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
}); // createStore는 저장소를 구성한 객체를 취한다.

export default store;
