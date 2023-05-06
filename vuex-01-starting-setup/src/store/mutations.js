export default {
  //변형의 필수 조건은 동기식으로 동작해야 한다는 것
  // => 중단없이 실행되면서 단기적으로 바뀜 나중에 더 바뀌는 것은 허용 x
  setAuth(state, payload) {
    state.isLoggedIn = payload.isAuth;
  },
};
