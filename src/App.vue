<template>
  <div id="app">
    <Appheader />
    <div class="ui container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Appheader from "./components/Appheader.vue";
export default {
  name: "App",
  components: {
    Appheader,
  },
};
</script>

<style></style>
