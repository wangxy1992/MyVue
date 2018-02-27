<template>
  <div class="hello">
  	<!--头部-->
  	<mt-header :title="msg" fixed>
		  <router-link to="/" slot="left" v-if="isHome">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		  <mt-button icon="more" slot="right" v-if="isTrue"></mt-button>
		</mt-header>
		<!--路由-->
    <router-view @to-parent="fromChild"/>
    <!--尾部-->
    <mt-tabbar fixed v-model="selected">
		  <mt-tab-item id="首页">
		  	<router-link to="/">
		  		<i class="iconfont icon-home"></i>
		  	 	<span>首页</span>
		  	</router-link>
		  </mt-tab-item>
		  <mt-tab-item id="收藏">
		    <router-link to="/favorite">
		  		<i class="iconfont icon-weibiaoti2fuzhi03"></i>
		  		<span>收藏</span>		  	 	
		  	</router-link>
		  </mt-tab-item>
		  <mt-tab-item id="笔记">
		    <router-link to="/note">
		  		<i class="iconfont icon-jibiji"></i>
		  		<span>笔记</span>
		  	</router-link>
		  </mt-tab-item>
		</mt-tabbar>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
    	msg : "首页",
    	selected : "首页",
     	isTrue : false,
     	isHome : false
    }
  },
  methods : {
  	fromChild(value){
  		this.msg = value;
  		this.selected = value;
  		if (value == "首页"){
  			this.isTrue = false;
  			this.isHome = false;
  		}else if(value == "笔记"){
  			this.isTrue = false;
  			this.isHome = true;
  		}else{
  			this.isTrue = false;
  			this.isHome = true;
  		}
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
