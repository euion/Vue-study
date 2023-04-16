<template>
  <button @click="addOne">Add1</button>
</template>

<script>
export default {
  methods: {
    addOne() {
      this.$store.commit('increment');
    },
  },
};
</script>
