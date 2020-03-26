<template>
	<button :class = "classes" @click="buttonClick">
		<slot></slot>
	</button>
</template>

<script>
	const prefixCls = "jmk-button"
	export default{
		name:"jmkButton",
		props:{
			cla:{
				type:String,
				default:"default"
			}
		},
		computed:{
			classes(){
				return `${prefixCls}-${this.cla}`
			}
		},
		data(){
			return{
				
			}
		},
		methods:{
			buttonClick (event) {
				this.$emit('click', event);
			}
		}
	}
</script>

<style scoped="scoped">
	button{
			margin-right: 5px;
			display: inline-block;
			border-color:transparent;
			margin-bottom: 0;
			font-weight: 400;
			text-align: center;
			vertical-align: middle;
			touch-action: manipulation;
			cursor: pointer;
			background-image: none;
			border: 1px solid transparent;
			white-space: nowrap;
			user-select: none;
			height: 32px;
			padding: 0 15px;
			font-size: 14px;
			border-radius: 4px;
			transition: color .2s linear, background-color .2s linear, border .2s linear, box-shadow .2s linear, opacity .2s linear;
	}
	
	@import url("./css/button.css");
</style>
