const types = {
  SET_CITY: "SET_CITY"
};

const state = {
  city: {
    name: "Tel Aviv"
  }
};

const getters = {
  getCity: (state) => state.city
};

const mutations = {
  [types.SET_CITY](state, value) {
    state.city = value;
  }
};

const actions = {
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
