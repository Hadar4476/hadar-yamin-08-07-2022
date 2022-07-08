<template>
  <div class="weather-page">
    <div class="search-input">
      <div class="input">
        <label for="search_input"></label>
        <input id="search_input" name="searchInput" type="text" v-model.trim="searchValue" />
      </div>
      <div class="icon"></div>
    </div>
    <div class="city-forecast">
      <!-- <div class="day" v-for="day in city.forecast" :key="day.name">
        <div class="name">{{ getDayShortName(day) }}</div>
        <div class="temperature"></div>
      </div> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  name: "weather-page",
  data() {
    return {
      searchValue: "",
      showSearchResultsContainer: false
    };
  },
  async created() {
    if (this.city && this.city.name) {
      this.searchValue = this.city.name;
      await this.setCityHandler();
    }
  },
  watch: {
    async searchValue(val) {
      if (val.length > 2) {
        await this.setSearchResultsHandler();
      }
    }
  },
  methods: {
    async setSearchResultsHandler() {
      // try {
      //   const response = await axios.get("");
      // } catch (error) {
      //   this.setError(error.message);
      // }
    },
    async setCityHandler() {
      // try {
      //   const response = await axios.get("");
      // } catch (error) {
      //   this.setError(error.message);
      // }
    },
    getDayShortName() {
      // return moment().format("dddd");
    }
  }
};
</script>

<style lang="scss" scoped>
.weather-page {
  @media (min-width: 1024px) {
  }

  @media (min-width: 1440px) {
  }
}
</style>
