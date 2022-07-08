import { mapGetters, mapActions } from "vuex";

const mixin = {
  data() {
    return {
      url: "http://dataservice.accuweather.com/",
      isLoading: false,
      error: null
    };
  },
  computed: {
    ...mapGetters({
      city: "getCity",
      userFavorites: "getUserFavorites"
    })
  },
  methods: {
    ...mapActions[("setWeather", "addCityToFavorites")],
    setLoading() {
      this.isLoading = true;
    },
    setFinished() {
      this.isLoading = false;
    },
    setError(value) {
      this.error = value;
    }
  }
};

export default mixin;
