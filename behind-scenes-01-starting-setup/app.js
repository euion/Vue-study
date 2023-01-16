const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText; // 해당 input 요소의 Dom 객체를 가리키게 됨
      // console.dir(this.$refs.userText)
    },
  },
});

app.mount("#app");

const app2 = Vue.createApp({
  template: `
  <p>{{ favoriteMeal }}</p>
  `,
  data() {
    return {
      favoriteMeal: "Pizza",
    };
  },
});

app2.mount("#app2");

//.... 이런 반응형 작업을 뷰 내부에서 진행됨(뷰의 작동원리)

// const data = {
//   message: "Hello!",
//   longMessage: "Hello! World",
// };

// const handler = {
//   set(target, key, value) {
//     // proxy에 새로운 프로퍼티가 설정될 때마다 트리거됨
//     if (key === "message") {
//       target.longMessage = value + "world!";
//     }
//     target.message = value;
//   },
// };

// const proxy = new Proxy(data, handler);

// proxy.message = "Hello!!!";
