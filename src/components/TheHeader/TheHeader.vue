<template>
  <header class="the-header">
    <span class="app-name">Herolo Weather Task</span>
    <nav class="nav-bar">
      <router-link class="nav-item" to="/">Home</router-link>
      <router-link class="nav-item" to="/favorites">Favorites</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "the-header"
};
</script>

<style lang="scss" scoped>
.the-header {
  background-color: $color-secondary;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;

  .app-name {
  }

  .nav-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    .nav-item {
      text-decoration: none;
      color: white;
    }
  }

  @media (min-width: 1024px) {
    height: 100px;
  }

  @media (min-width: 1440px) {
  }
}
</style>
