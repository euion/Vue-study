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
  beforeCreate() {
    console.log("beforeCreate()");
  },
  created() {
    console.log("created()");
  },
  beforeMount() {
    // 앱이 실제로 마운트 되기 직전에 트리거됨
    console.log("beforeMount()");
  },
  mounted() {
    // 화면에 표시됨
    console.log("mounted()");
  },
  // 데이터에 변경이 있을 때에도 자체적인 생명주기 훅이 트리거 된다.
  beforeUpdate() {
    console.log("beforeUpdate()");
  },
  updated() {
    console.log("updated()");
  },
  beforeUnmount() {
    console.log("beforeUnmount");
  },
  unmounted() {
    console.log("unmounted()");
  },
});

app.mount("#app");

setTimeout(() => {
  app.unmount(); // 앱이 생성되고 5초후에 마운트 해제
}, 5000);

app.unmount(); // Vue 앱을 제거할 수 있는 app.unmount 메서드

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

const data = {
  message: "Hello!",
  longMessage: "Hello! World",
};

const handler = {
  set(target, key, value) {
    // proxy에 새로운 프로퍼티가 설정될 때마다 트리거됨
    if (key === "message") {
      target.longMessage = value + "world!";
    }
    target.message = value;
  },
};

const proxy = new Proxy(data, handler);

proxy.message = "Hello!!!";
