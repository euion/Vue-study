<template>
  <section>
    <h2>Select a Topic</h2>
    <knowledge-grid ></knowledge-grid>
  </section>
</template>

<script>
export default {
  inject: ['topics'], /**상위 레벨에서 제공된 것만 삽입할 수 있다.  */
  emits: ['select-topic'],
};
</script>