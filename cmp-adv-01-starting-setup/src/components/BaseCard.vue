<template>
  <div>
    <header v-if="$slots.header"> <!--$slot을 사용해서 특정 슬롯에 대한 데이터를 수신하는지 확인-->
      <slot name="header">
        <!-- <h2>The Default</h2> -->
      </slot>
    </header>
    <slot></slot>
    <!--부모컴포넌트를 통해 div내부에 있어야 하는 HTML코드를 전달한다.-->
  </div>
</template>

<script>
export default {
  mounted() {
     console.log(this.$slots.header)
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>
