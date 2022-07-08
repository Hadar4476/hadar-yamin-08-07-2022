<template>
  <div class="favorites-grid container">
    <div class="favorites-row row row-cols-1 row-cols-xs-2 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
      <div class="favorite-col" :v-for="userFavorite in userFavorites" :key="userFavorite._id">
        <FavoriteCard :userFavorite="userFavorite" />
      </div>
    </div>
  </div>
</template>

<script>
import FavoriteCard from "./FavoriteCard/FavoriteCard.vue";

export default {
  name: "favorites-grid",
  components: {
    FavoriteCard
  }
};
</script>

<style lang="scss" scoped>
</style>