const types = {
  SET_SEARCH_RESULTS: "SET_SEARCH_RESULTS",
  SET_CITY: "SET_CITY"
};

const state = {
  searchResults: [],
  city: {
    name: "Tel Aviv"
  }
};

const getters = {
  getSearchResults: (state) => state.searchResults,
  getCity: (state) => state.city
};

const mutations = {
  [types.SET_SEARCH_RESULTS](state, value) {
    state.searchResults = value;
  },
  [types.SET_CITY](state, value) {
    state.city = value;
  }
};

const actions = {
  setSearchResults({ commit }, searchResults) {
    commit(types.SET_SEARCH_RESULTS, searchResults);
  },
  setCity({ commit }, city) {
    commit(types.SET_CITY, city);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
