<template>
  <li>
    <h3>{{ topicName }}</h3>
    <p>{{ description }}</p>
    <button @click="selectTopic(id)">Learn More</button>  <!--포인터로 가리키는 곳에 id를 제공해야 함-->
  </li>
</template>

<script>
export default {
  inject:['selectTopic'],
  props: ['id', 'topicName', 'description'],
  emits: ['select-topic'],
};
</script>