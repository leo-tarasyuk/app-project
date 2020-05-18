import * as types from "./mutation-types";

/**
 * Selects project and saves in working context
 * @param  {Object}  context  Menu store context
 * @param  {Object} payload  Visiable Description
 */

function setMapData({ commit }, payload) {
  commit(types.SET_DATA, payload);
}

export default {
  setMapData,
};
