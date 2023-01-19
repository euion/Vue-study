<template>
  <div>
    <header>
      <slot name="header"></slot>
    </header>
    <slot></slot>
    <!--부모컴포넌트를 통해 div내부에 있어야 하는 HTML코드를 전달한다.-->
  </div>
</template>

<script>
export default {
  props: ["content"],
};
</script>

<style scoped>
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>
