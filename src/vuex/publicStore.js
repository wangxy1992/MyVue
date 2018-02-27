import Vue from "vue"
import Vuex from "vuex"

import ToAction from "./actions/ToAction"
import ToMutation from "./mutations/ToMutation"
import ToState from "./states/ToState"

Vue.use(Vuex)

export default new Vuex.Store({
	state : ToState,
	mutations : ToMutation,
	actions : ToAction
})
