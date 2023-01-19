<template>
  <div>
    <li>
      <h2>{{ name }} {{ friendIsFavorite ? "(Favorite)" : "" }}</h2>
      <button @click="toggleFavorite">Toggle Favorite</button>
      <button @click="toggleDetails">
        {{ detailsAreVisible ? "Hide" : "Show" }} Details
      </button>
    </li>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone: </strong>{{ phoneNumber }}</li>
      <li><strong>Email: </strong>{{ emailAddress }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  // props: ["name", "phoneNumber", "emailAddress", "isFavorite"],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      defualt: false,
      // validator: function (value) {
      //   // 참 또는 거짓을 반환하는 함수를 갖는 validator
      //   return value === "1" || value === "0";
      // },
    },
  },
  emits: ["toggle-favorite"],
  // emits: {
  //   "toggle-favorite": function (id) {
  //     if (id) {
  //       return true;
  //     } else {

  //       return false;
  //     }
  //   },
  // },
  data() {
    return {
      detailsAreVisible: false,
      friendIsFavorite: this.isFavorite,
      // 해당 프로퍼티는 받은 프로퍼티 값을 초깃값으로 사용하는 일반 데이터 프로퍼티
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit("toggle-favorite", this.id);
    },
  },
};
</script>
