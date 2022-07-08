<template>
  <header class="the-header">
    <span class="app-name">Herolo Weather Task</span>
    <div class="links">
      <router-link class="link" to="/">Home</router-link>
      <router-link class="link" to="/favorites">Favorites</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "the-header"
};
</script>

<style lang="scss" scoped>
.the-header {
  background-color: red;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;

  .app-name{}

  .links{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    .link{
      text-decoration: none;
      color: white;
    }
  }

  @media (min-width: 1024px){}

  @media (min-width: 1440px){}
}
</style>
