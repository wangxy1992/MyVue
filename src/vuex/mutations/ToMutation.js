
var ToMutation = {
	getStore(state,value){
		state.list = value.data.slice(0,value.count);
	},
	addTxt(state,value){
		state.txt = value
	}
}

export default ToMutation