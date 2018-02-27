<template>
	<div class="home">
		<mt-swipe :auto="3000" :speed="800">
		  <mt-swipe-item><img src="http://temp.im/640x320/777777/fff" alt="" width="100%" /></mt-swipe-item>
		  <mt-swipe-item><img src="http://temp.im/640x320/77ac36/fff" alt="" width="100%" /></mt-swipe-item>
		  <mt-swipe-item><img src="http://temp.im/640x320/bc12ab/fff" alt="" width="100%" /></mt-swipe-item>
		  <mt-swipe-item><img src="http://temp.im/640x320/777777/fff" alt="" width="100%" /></mt-swipe-item>
		</mt-swipe>
		<mt-loadmore :top-method="loadTop" ref="loadmore" style="background: #aaaaaa;">
		  <ul  class="listing" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="5">
		    <li v-for="(data,index) in lists">
		    	<router-link :to="'/detail/' + index">
			  		<img :src="data.imgs" />
			  		<p class="tit">{{data.title}}</p>
				</router-link>  
		    </li>
		    <mt-spinner type="snake" v-if="li_loading"></mt-spinner>
		  </ul>
		</mt-loadmore>
	</div>
</template>

<script>
	import store from "../vuex/publicStore"
	export default {
		name : "Home",
		data(){
			return {
				list : [],
				cc : 8,
				li_loading : false,
				timer : ""
			}
		},
		methods : {
			loadTop() {
				let that = this;
			  // 加载更多数据
			  store.dispatch("getHomeAction",{that : that,count : 8})
			  this.$refs.loadmore.onTopLoaded();	
			},
			loadMore() {
				clearInterval(this.timer)
				let that = this;
			  	this.li_loading = true;	
			  	this.timer = setTimeout(() => {
				    let last = this.lists.length - 1;
				    last = Math.floor(last) + 5;
				    store.dispatch("getHomeAction",{that : that,count : last})
				    this.li_loading = true;
				  }, 1500);
			}
		},
		mounted(){
			var that=this;
			that.$emit("to-parent","首页")
			store.dispatch("getHomeAction",{that : that,count : 8})
		},
		computed : {
			lists : function(){
				return store.state.list
			}
		}
	}
</script>

<style scoped>

	
</style>