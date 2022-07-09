<template>
  <div class="days-grid container">
    <div v-if="!isLoading" class="days-row row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
      <div class="day-col" v-for="dayForecast in daysForecasts" :key="dayForecast.date">
        <DayCard :dayForecast="dayForecast" />
      </div>
    </div>
  </div>
</template>

<script>
import DayCard from "./DayCard/DayCard.vue";

export default {
  name: "days-grid",
  components: {
    DayCard
  },
  computed: {
    daysForecasts() {
      return this.city.daysForecasts;
    }
  }
};
</script>

<style lang="scss" scoped>
.days-grid{
    .days-row{
        .day-col{

        }
    }
}
</style>