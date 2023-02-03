import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';

const router = createRouter({
  history: createWebHistory(), //라우팅 관련 페이지가 브라우징 히스토리에 등록되도록 하는 방식 설정
  routes: [
    { path: '/teams', component: TeamsList }, // URL에서 도메인의 뒷부분에 해당하며 라우터가 어떤 컴포넌트를 로드해야 하는지 알려주는 역할 수행
    { path: '/users', component: UsersList },
    { path: '/teams/:teamId', component: TeamMembers },
  ],
  linkActiveClass: 'active',
});
const app = createApp(App);

// use는 내장 메서드로 Vue 앱에 서드파티 패키지와 다른 기능을 연결해주는 역할을 수행
app.use(router); //Vue앱이 Vue 라우터에 대해 인식하게 됨

app.mount('#app');
