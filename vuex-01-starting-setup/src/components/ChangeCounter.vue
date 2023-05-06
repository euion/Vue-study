<template>
  <button @click="increase({ value: 2 })">Add 2</button>
  <button @click="increase({ value: 11 })">Add 11</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    // addOne() {
    //   this.$store.dispatch('increment');
    // },
    ...mapActions('numbers', { inc: 'increment', increase: 'increase' }),
  },
};
</script>
