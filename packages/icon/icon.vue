<template>
	<i :class="classes" :style="{fontSize:fontSize + 'px'}" @click="buttonClick"></i>
</template>

<script>
	export default {
		name: "JmkIcon",
		props: {
			fontSize:{
				type:[Number,String],
				default: 20
			},
			iconfont:{
				type:String,
				default:"icon-Close"
			}
		},
		computed:{
			classes(){
				return [
					"iconfont",
					this.iconfont
				]
			}
		},
		methods:{
			buttonClick (event) {
				this.$emit('click', event);
			}
		}
	}
</script>

<style>
	@import url("//at.alicdn.com/t/font_1713113_ilb2k52llrl.css");
</style>
