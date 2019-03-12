<template>
  <div id="app">
    <img width="25%" src="./assets/logo.png">
     <MyHeader />
      <router-view></router-view>
    <HelloWorld/>
    
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Blog from "./components/Blog"

export default {
  name: "App",
  components: {
    HelloWorld,
    Blog
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
