import * as types from "./mutation-types";

export default {
  [types.SET_DATA](state, payload) {
    state.mapData = payload;
  },
};
