export default {
  increment(state) {
    setTimeout(function () {
      state.counter = state.counter + 2;
    }, 2000); // 좋지 않은 방법
  },
  increase(state, payload) {
    console.log(state);
    state.counter = state.counter + payload.value;
  },
};
