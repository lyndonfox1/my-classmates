<template>
  <nav>
      <router-link v-bind:to="'/jack'">Jack</router-link>
      <router-link v-bind:to="'/matthew'">Jack</router-link>
  </nav>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.router-link-active {
  font-weight: bold;
}
</style>