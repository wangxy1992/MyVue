<template>
	<div class="myself">
		<p>我的</p>
	</div>
</template>

<script>
	export default {
		name : "myself",
		mounted(){
			this.$emit("to=parent","我的")
		}
	}
</script>

<style>
</style>