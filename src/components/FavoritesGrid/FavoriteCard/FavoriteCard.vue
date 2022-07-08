<template>
  <div class="favorite-card" @click="setCityHandler"></div>
</template>

<script>
export default {
  name: "favorite-card",
  props: {
    userFavorite: {
      type: Object,
      required: true
    }
  },
  methods: {
    setCityHandler() {
      this.setCity(this.userFavorite);
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>

</style>