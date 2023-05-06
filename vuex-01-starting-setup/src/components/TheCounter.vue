<template>
  <h3>{{ finalCounter }}</h3>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    // counter() {
    //   return this.$store.getters.finalCounter;
    // },
    ...mapGetters('numbers', ['finalCounter']), // mapGetter는 배열을 인수로 받는다.
  },
};
</script>
