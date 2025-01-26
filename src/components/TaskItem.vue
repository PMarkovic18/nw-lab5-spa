<template>
  <li>
    <span :class="{ completed: task.completed }">{{task.category}} : {{ task.name }} </span>
    <button @click="$emit('delete-task', task.id)">Delete</button>
  </li>
</template>

<script>
export default {
  props: {
    task: Object,
  },
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
  color: gray;
}
</style>