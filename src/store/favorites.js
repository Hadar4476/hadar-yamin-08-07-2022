const types = {
  GET_USER_FAVORITES: "GET_USER_FAVORITES",
  ADD_CITY_TO_FAVORITES: "ADD_CITY_TO_FAVORITES",
  REMOVE_CITY_FROM_FAVORITES: "REMOVE_CITY_FROM_FAVORITES"
};

const state = {
  userFavorites: []
};

const getters = {
  getUserFavorites: (state) => state.userFavorites
};

const mutations = {
  [types.ADD_CITY_TO_FAVORITES](state, value) {
    state.userFavorites.push(value);
  },
  [types.REMOVE_CITY_FROM_FAVORITES](state, value) {
    const cityIndex = state.userFavorites.findIndex((i) => i._id === value._id);

    state.userFavorites.splice(cityIndex, 1);
  }
};

const actions = {
  addCityToFavorites({ commit }, city) {
    commit(types.ADD_CITY_TO_FAVORITES, city);
  },
  removeCityFromFavorites({ commit }, city) {
    commit(types.REMOVE_CITY_FROM_FAVORITES, city);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
