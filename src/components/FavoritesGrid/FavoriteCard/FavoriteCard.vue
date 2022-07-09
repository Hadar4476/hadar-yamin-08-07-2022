<template>
  <div class="favorite-card" @click="setCityHandler">
    <span v-if="city" class="city">{{ userFavorite.name }}</span>
    <span v-if="currentWeatherTemperature" class="current-weather-temperature">{{ currentWeatherTemperature }}</span>
    <span v-if="currentWeatherDescription" class="current-weather-description">{{ currentWeatherDescription }}</span>
  </div>
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
  computed: {
    city() {
      return this.userFavorite?.name || "";
    },
    currentWeatherTemperature() {
      return this.userFavorite?.currentWeather?.temperature?.metric?.value || "";
    },
    currentWeatherDescription() {
      return this.userFavorite?.currentWeather?.description || "";
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
.favorite-card{
  cursor: pointer;
  
  .city{

  }

  .current-weather-temperature{

  }

  .current-weather-description{

  }
}
</style>