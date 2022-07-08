import Vue from "vue";
import Vuex from "vuex";

import weather from "./weather";
import favorites from "./favorites";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    weather,
    favorites
  }
});
