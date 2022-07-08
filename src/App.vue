<template>
  <div id="app" class="app">
    <TheHeader />
    <router-view />
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader/TheHeader.vue";

export default {
  name: "app",
  components: {
    TheHeader
  }
};
</script>

<style lang="scss">
@import "sass/global.scss";

.app {
  height: 100vh;
  background-color: yellow;
}
</style>
