import Store from "../publicStore.js"

var ToAction = {
//	首页获取数据
	getHomeAction(store,value){
		value.that.$http({
			method : "GET",
			url : "../../static/mock.json"
		}).then((data)=>{
			if(data.body.state == 1){
				store.commit("getStore",{
					data : data.body.data,
					count : value.count
				})
			}
		})
	},
	getTxtAc(store,value){
		value.that.$http({
			method : "GET",
			url : value.src
		}).then((data)=>{
			store.commit("addTxt",data.body)
		})
	}
}

export default ToAction