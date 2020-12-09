<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.name }}
    </li>
  </ul>
</template>

<script>
export default {
  inject: ["todos"],
};
</script>

<style scoped>
ul {
  list-style-type: none;
}

li {
  margin: 1rem;
  border: 1px solid gray;
  border-radius: 10px;
  height: 40px;
  font-size: 1.3rem;
  font-weight: bold;
  color: #272b2a;
  text-align: center;
  padding-top: 7px;
}
</style>