import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  //저장소는 한 애플리케이션 당 하나만 가진다.
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 2;
    },
  },
}); // createStore는 저장소를 구성한 객체를 취한다.
const app = createApp(App);
app.use(store);

app.mount('#app');
