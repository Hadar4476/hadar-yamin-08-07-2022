const types = {
  GET_USER_FAVORITES: "GET_USER_FAVORITES",
  ADD_CITY_TO_FAVORITES: "ADD_CITY_TO_FAVORITES"
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
  }
};

const actions = {
  addCityToFavorites({ commit }, city) {
    commit(types.ADD_CITY_TO_FAVORITES, city);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
