import Vue from "vue";
import Vuex from "vuex";
import menu from "./menu";
import map from "./map";
import description from "./description";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    menu,
    map,
    description,
  },
});

export default store;
