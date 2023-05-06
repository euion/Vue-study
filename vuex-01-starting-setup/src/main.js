import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const counterModule = {
  state() {
    return { counter: 0 };
  },
  mutations: {
    increment(state) {
      setTimeout(function () {
        state.counter = state.counter + 2;
      }, 2000); // 좋지 않은 방법
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
  },
  actions: {
    //비동기식 코드의 허용
    increment(context) {
      //인수를 자동으로 들고 옴
      setTimeout(function () {
        context.commit('increment');
      }, 2000);
    },
    increase(context, payload) {
      console.log(context);
      context.commit('increase', payload);
    },
  },
  getters: {
    finalCounter(state) {
      return state.counter * 3;
    },
    normalizedCounter(_, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    },
  },
};

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
  mutations: {
    //변형의 필수 조건은 동기식으로 동작해야 한다는 것
    // => 중단없이 실행되면서 단기적으로 바뀜 나중에 더 바뀌는 것은 허용 x
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    },
  },
  actions: {
    login(context) {
      context.commit('setAuth', { isAuth: true });
    },
    logout(context) {
      context.commit('setAuth', { isAuth: false });
    },
  },
  getters: {
    userIsAuthenticated(state) {
      return state.isLoggedIn;
    },
  },
}); // createStore는 저장소를 구성한 객체를 취한다.
const app = createApp(App);
app.use(store);

app.mount('#app');
