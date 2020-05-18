import * as types from "./mutation-types";

/**
 * Selects project and saves in working context
 * @param  {Object}  context  Menu store context
 * @param  {Object} payload  Visiable Description
 */

function SetData({ commit }, payload) {
    commit(types.GET_DATA, payload);
}

export default {
    SetData
};
