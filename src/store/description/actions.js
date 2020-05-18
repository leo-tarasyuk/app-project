import * as types from "./mutation-types";

/**
 * Selects project and saves in working context
 * @param  {Object}  context  Menu store context
 * @param  {Object} payload  Visiable Description
 */

function setDescriptionData({ commit }, payload) {
  commit(types.SET_DATA, payload);
}

/**
 * Selects project and saves in working context
 * @param  {Object}  context  Menu store context
 * @param  {Boolean} payload  Visiable Description
 */

function setStateDescription({ commit }, payload) {
  commit(types.SET_DESCRIPTION, payload);
}
export default {
  setDescriptionData,
  setStateDescription
};
