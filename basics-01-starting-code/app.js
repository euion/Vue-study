const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "조금더 공부하자!",
      courseGoalB: "Vue를 마스터했다!!!",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal");
