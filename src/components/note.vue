<template>
	<div class="note">
		<div>
			
		</div>
	</div>
</template>

<script>
	export default {
		name : "note",
		mounted(){
			this.$emit("to-parent","笔记")
		}
	}
</script>

<style>
</style>