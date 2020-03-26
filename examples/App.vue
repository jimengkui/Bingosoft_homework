<template>
	<div id="app">
		<p>子元素居中排列</p>
		<jmk-row type="flex" justify="center" class="code-jmk-row-bg" :isShowContent="true">
			<jmk-col span="4">jmk-col-eee
				<jmk-row type="flex" justify="space-between" class="code-jmk-row-bg">
					<jmk-col span="4">jmk-col-4.1</jmk-col>
					<jmk-col span="4">jmk-col-4.2</jmk-col>
					<jmk-col span="4">jmk-col-4.3</jmk-col>
				</jmk-row>
			</jmk-col>
			<jmk-col span="4">jmk-col-4</jmk-col>
			<jmk-col span="4">
				<div>1</div>
				<div>2</div>
				<div>3</div>
			</jmk-col>
			<jmk-col span="4">jmk-col-4</jmk-col>
		</jmk-row>

	</div>

</template>

<script>
</script>

<style>
	.jmk-col {
		border: #000000 1px solid;
	}
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		/*  margin-top: 60px; */
	}
</style>
