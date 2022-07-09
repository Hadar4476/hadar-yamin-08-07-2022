<template>
  <div class="weather-page">
    <div class="search-input">
      <div class="input">
        <label for="search_input"></label>
        <input id="search_input" name="searchInput" type="text" :value="searchValue" @change="onSearchValueChange" />
      </div>
      <div class="icon" @click="setCityHandler"></div>
    </div>
    <div v-if="!isLoading" class="city-forecast">
      <div class="header">
        <div class="current-city">
          <span class="name">{{ city.name }}</span>
          <span v-if="currentTempature" class="current-temperature">{{ currentTempature }}</span>
        </div>
        <div class="actions">
          <div class="icon"></div>
          <button class="toggle-favorite-buttontoggle-favorite-button" @click="toggleFavoriteCityHandler">{{ isCurrentCityInUserFavorites ? "Remove" : "Add" }} to Favorites</button>
        </div>
      </div>
      <div class="body">
        <DaysGrid v-if="city.daysForecasts && city.daysForecasts.length" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import { apiKey } from "../auth/authentication.json";
import autocompleteJson from "../data/autocomplete.json";
import currentTempatureJson from "../data/currentTempature.json";
import daysForecastsJson from "../data/5DaysForecast.json";

export default {
  name: "weather-page",
  components: {
    DaysGrid: () => import("../components/DaysGrid/DaysGrid.vue")
  },
  data() {
    return {
      searchValue: ""
    };
  },
  computed: {
    isCurrentCityInUserFavorites() {
      const currentCityIndex = this.userFavorites.findIndex((i) => i._id === this.city._id);
      return currentCityIndex >= 0;
    },
    currentTempature() {
      return this.city?.currentWeather?.temperature?.metric?.value;
    }
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
    },
    async setCityHandler() {
      this.setLoading();

      if (this.searchValue.length > 2 && !this.city._id) {
        // try {
        // const response = (await axios.get(`${this.url}locations/v1/cities/autocomplete?apikey=${apiKey}&q=${this.searchValue}&language=en-us`)).data;
        const response = autocompleteJson;
        // if (response.length) {
        // const name = response[0].LocalizedName;
        // const cityKey = response[0].Key;
        const _id = this.generateUniqueId(21);
        const name = response.LocalizedName;
        const cityKey = response.Key;
        const currentWeather = await this.getCityCurrentWeather(cityKey);
        const daysForecasts = await this.getCityDaysForecasts(cityKey);

        const city = {
          _id,
          name,
          key: cityKey,
          currentWeather,
          daysForecasts
        };

        this.setCity(city);
        // // }
        // // } catch (error) {
        // // this.setError(error.message);
        // // }
      }

      this.setFinished();
    },
    async getCityCurrentWeather(cityKey) {
      // try {
      //   // const response = (await axios.get(`${this.url}currentconditions/v1/${cityKey}?apikey=${apiKey}&language=en-us&details=false`)).data;
      const response = currentTempatureJson;
      // if (response.length) {
      // const responseCurrentWeather = response[0];
      const responseCurrentWeather = response;
      const currentWeather = {
        date: responseCurrentWeather.LocalObservationDateTime,
        description: responseCurrentWeather.WeatherText,
        temperature: {
          metric: {
            value: Number(responseCurrentWeather.Temperature.Metric.Value).toFixed(),
            unit: responseCurrentWeather.Temperature.Metric.Unit
          },
          imperial: {
            value: Number(responseCurrentWeather.Temperature.Imperial.Value).toFixed(),
            unit: responseCurrentWeather.Temperature.Imperial.Unit
          }
        }
      };
      return currentWeather;
      //   // }
      // } catch (error) {
      //   // this.setError(error.message);
      // }
    },
    async getCityDaysForecasts(cityKey) {
      // try {
      //   // const response = (await axios.get(`${this.url}forecasts/v1/daily/5day/${cityKey}?apikey=${apiKey}&language=en-us&details=false&metric=true`)).data;
      //   // if (Object.keys(response).length) {
      const daysForecasts = [];
      const response = daysForecastsJson;
      const responseDaysForecasts = response.DailyForecasts;
      for (let i = 0; i < responseDaysForecasts.length; i++) {
        const responseDayForecast = responseDaysForecasts[i];
        const dayForecast = {
          date: responseDayForecast.Date,
          temperature: {
            min: {
              value: Number(responseDayForecast.Temperature.Minimum.Value).toFixed(),
              unit: responseDayForecast.Temperature.Minimum.Unit
            },
            max: {
              value: Number(responseDayForecast.Temperature.Maximum.Value).toFixed(),
              unit: responseDayForecast.Temperature.Maximum.Unit
            }
          }
        };
        daysForecasts.push(dayForecast);
      }
      return daysForecasts;
      //   // }
      // } catch (error) {
      //   // this.setError(error.message);
      // }
    },
    toggleFavoriteCityHandler() {
      if (this.isCurrentCityInUserFavorites) {
        this.removeCityFromFavorites(this.city);
      } else {
        this.addCityToFavorites(this.city);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.weather-page {
  .search-input{
    .input{
      label{}

      input{}
    }

    .icon{}
  }

  .city-forecast{
    .header{
      .current-city{
        .name{

        }

        .current-temperature{

        }
      }

      .actions{
        .icon{}

        .toggle-favorite-button{}
      }
    }

    .body{

    }
  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1440px) {
  }
}
</style>
