import * as types from "./mutation-types";

export default {
  [types.SET_DATA](state, payload) {
    state.descriptionData = payload;
  },
  [types.SET_DESCRIPTION](state, payload) {
    state.stateDescription = payload;
  },
};
