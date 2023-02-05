import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

const app = createApp(App);

// use는 내장 메서드로 Vue 앱에 서드파티 패키지와 다른 기능을 연결해주는 역할을 수행
app.use(router); //Vue앱이 Vue 라우터에 대해 인식하게 됨

app.mount('#app');
