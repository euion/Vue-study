const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: " Manuel Lorenz",
          phone: "123 4567 8910",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: " julie Jones",
          phone: "001 2345 6789",
          email: "julie@localhost.com",
        },
      ],
    };
  },
});

// 컴포넌트는 메인 앱에 연결된 미니 앱인 셈, 그러나 자신이 속한 부모앱과 통신하지 않는다.
// 컴포넌트는 미니앱이므로 자체 템플릿을 생성해주어야 함
app.component("friend-contact", {
  //friend-contact이라는 이름의 컴포넌트 앱
  // Vue는 index.html에 있는 식별자를 감지하고
  // template을 포함한 미니 앱과 이 템플릿 안에 든 모든 동적 코드를 렌더링
  template: `
    <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails()">
      {{ detailsAreVisible ? 'Hide' : 'Show'}} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
    `, // 해당 앱의 html 코드 정의
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: " Manuel Lorenz",
        phone: "123 4567 8910",
        email: "manuel@localhost.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
