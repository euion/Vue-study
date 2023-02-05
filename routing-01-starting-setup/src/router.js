import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersFooter from './pages/UsersFooter.vue';

const router = createRouter({
  history: createWebHistory(), //라우팅 관련 페이지가 브라우징 히스토리에 등록되도록 하는 방식 설정
  routes: [
    { path: '/', redirect: '/teams' }, // URL 끝에 /teams 붙음
    {
      name: 'teams',
      path: '/teams',
      meta: { needsAuth: true },
      component: TeamsList,
      components: { default: TeamsList, footer: TeamsFooter },
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
    {
      path: '/users',
      component: {
        default: UsersList,
        footer: UsersFooter,
      },
      beforeEnter(to, from, next) {
        console.log('users beforeEnter');
        console.log(to, from);
        next();
      },
    },
    // 상단의 라우터로 처리하지 못할때 사용하는 catchAll 라우트
    { path: '/:notFound(.*)', component: NotFound }, // 다른 라우트를 뒤집어 쓰지 않게 마지막에 작성해야 함
  ],
  linkActiveClass: 'active',
  scrollBehavior(_, _2, savedPosition) {
    // 브라우저의 스크롤 위치를 나타내는 객체 반환
    if (savedPosition) {
      return savedPosition; // 뒤로가면 다시 위치값 반환
    }
    return { left: 0, top: 0 };
  }, // 메서드. 페이지가 바뀔때마다 Vue 라우터로 호출함
});

router.beforeEach((to, from, next) => {
  console.log('Global beforeEach');
  console.log(to, from);
  if (to.meta.needsAuth) {
    // 특정 라우트가 일치할 때 컴포넌트 내 라우트 객체에 추가 데이터를 전달할 수 있다는 점
    console.log('Needs auth!');
    next();
  } else {
    next();
  }
  // if (to.name === 'team-members') {
  //   next();
  // } else {
  //   next({ name: 'team-members', params: { teamId: 't2' } }); // 페이지이동(navigation)을 승인
  // }
  next();
}); // 네비게이션 가드 동작 지원, 3개의 인수 필요

router.afterEach((to, from) => {
  // sending analytics data
  console.log('Global afterEach');
  console.log(to, from);
});

export default router;
