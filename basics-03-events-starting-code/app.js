const app = Vue.createApp({
  data() {
    // 이때 data는 임의로 함수명을 변경할 수 없다. 무조건 data라고 써야함
    return {
      counter: 0,
      name: "",
      lastName: "",
      fullname: "",
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 2000);
      }
    },
    // name(value) {
    //   if (value === "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = value + " " + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (value === "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = value + " " + value;
    //   }
    // },
  },
  computed: {
    fullname() {
      console.log("Running Again --- ");
      if (this.name === "" || this.lastName === "") {
        return "";
      }
      return this.name + " " + this.lastName;
    },
  },
  methods: {
    outputFullName() {
      console.log("Running Again --- ");
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Lim";
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
