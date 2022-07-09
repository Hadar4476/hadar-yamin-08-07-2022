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
    ...mapActions(["setCity", "addCityToFavorites", "removeCityFromFavorites"]),
    generateUniqueId(length) {
      let uniqueId = "";
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      const charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        uniqueId += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return uniqueId;
    },
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
