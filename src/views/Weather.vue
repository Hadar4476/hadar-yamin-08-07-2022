<template>
  <div class="weather-page">
    <div class="search-input">
      <div class="input">
        <label for="search_input"></label>
        <input id="search_input" name="searchInput" type="text" :value="searchValue" @change="onSearchValueChange" />
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
      searchValue: ""
    };
  },
  async created() {
    if (this.city && this.city.name) {
      this.searchValue = this.city.name;
      await this.setCityHandler();
    }
  },
  methods: {
    async onSearchValueChange(event) {
      const { value } = event.target;

      this.searchValue = value.trim();

      if (event.keyCode === 13) {
        await this.setCityHandler();
      }
      // try {
      //   const response = await axios.get("");
      // } catch (error) {
      //   this.setError(error.message);
      // }
    },
    async setCityHandler() {
      if (this.searchValue.length > 2) {
        // try {
        //   const response = await axios.get("");
        // } catch (error) {
        //   this.setError(error.message);
        // }
      }
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
