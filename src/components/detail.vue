<template>
	<div class="detail">
		<h2>{{msg.title}}</h2>
		<div v-html="txt"></div>
	</div>
</template>

<script>
	import store from "../vuex/publicStore"
	export default {
		name : "Detail",
		data(){
			return {
				msg : ""
			}
		},
		mounted(){
			this.msg = store.state.list[this.$route.params.id]
			this.$emit("to-parent",this.msg.title)
			store.dispatch("getTxtAc",{src : this.msg.msg,that : this})
		},
		computed : {
			txt : function(){
				return store.state.txt
			}
		}
	}
</script>

<style>
</style>