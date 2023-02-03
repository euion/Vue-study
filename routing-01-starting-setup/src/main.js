import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';

const router = createRouter({
  history: createWebHistory(), //라우팅 관련 페이지가 브라우징 히스토리에 등록되도록 하는 방식 설정
  routes: [
    { path: '/', redirect: '/teams' }, // URL 끝에 /teams 붙음
    {
      name: 'teams',
      path: '/teams',
      component: TeamsList,
      children: [
        //  Vue 라우터에 동적 매개 변수가 $route프로퍼티에만 전달되는 게 아니라 프로퍼티로서 첨포넌트에 전달되어야 한다고 알려주는 기능 수행
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        }, // route에 옵션추가
      ],
    }, // URL에서 도메인의 뒷부분에 해당하며 라우터가 어떤 컴포넌트를 로드해야 하는지 알려주는 역할 수행
    { path: '/users', component: UsersList },

    // 상단의 라우터로 처리하지 못할때 사용하는 catchAll 라우트
    { path: '/:notFound(.*)', component: NotFound }, // 다른 라우트를 뒤집어 쓰지 않게 마지막에 작성해야 함
  ],
  linkActiveClass: 'active',
});
const app = createApp(App);

// use는 내장 메서드로 Vue 앱에 서드파티 패키지와 다른 기능을 연결해주는 역할을 수행
app.use(router); //Vue앱이 Vue 라우터에 대해 인식하게 됨

app.mount('#app');
