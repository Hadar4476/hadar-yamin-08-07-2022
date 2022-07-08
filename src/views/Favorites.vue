<template>
  <div class="favorites-page">
    <FavoritesGrid v-if="userFavorites.length" />
  </div>
</template>

<script>
export default {
  name: "favorites-page",
  components: {
    FavoritesGrid: () => import("../components/FavoritesGrid/FavoritesGrid.vue")
  }
};
</script>

<style lang="scss" scoped>
.favorites-page {
  @media (min-width: 1024px) {
  }

  @media (min-width: 1440px) {
  }
}
</style>
