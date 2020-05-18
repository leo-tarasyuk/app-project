import * as types from "./mutation-types";

export default {
  [types.GET_DATA](state, payload) {
    state.navigationData = payload;
  }
}
