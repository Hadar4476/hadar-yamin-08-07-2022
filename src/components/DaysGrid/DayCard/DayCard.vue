<template>
  <div class="day-card">
    <span v-if="dayShortName" class="city">{{ dayShortName }}</span>
    <span class="temperature">{{ dayForecast.temperature.min.value }}</span>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "day-card",
  props: {
    dayForecast: {
      type: Object
    }
  },
  computed: {
    dayShortName() {
      if (this.dayForecast && this.dayForecast.date) {
        const date = new Date(this.dayForecast.date);
        const dayName = moment(date).format("dddd");
        return dayName.slice(0, 3);
      }

      return "";
    },
    dayTempature() {
      return this.dayForecast.temperature.min.value || "";
    }
  }
};
</script>

<style lang="scss" scoped>
.day-card{
    .name{

    }

    .temperature{}
}
</style>