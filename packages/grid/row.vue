<template>
	<div>
		<div :class="classes" :style="styles" @click="isShowContent && ShowContent($event)">
			<slot></slot>
		</div>
<!-- 		<jmkModal v-model="modal">
			<div ref="jmkModalBody" >
				<div v-html="jmkModal">{{jmkModal}}</div>
			</div>
		</jmkModal> -->
	</div>

</template>
<script>
	import {
		oneOf,
		findComponentDownward,
		findBrothersComponents,
		cancelBubble
	} from './js/assist.js';
	const prefixCls = 'jmk-row';
	export default {
		name: 'JmkRow',
		props: {
			type: {
				validator(value) {
					return oneOf(value, ['flex']);
				}
			},
			align: {
				validator(value) {
					return oneOf(value, ['top', 'middle', 'bottom']);
				}
			},
			justify: {
				validator(value) {
					return oneOf(value, ['start', 'end', 'center', 'space-around', 'space-between']);
				}
			},
			gutter: {
				type: Number,
				default: 0
			},
			className: String,
			isShowContent: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				modal: false,
				jmkModal:""
			}
		},
		computed: {
			classes() {
				return [{
					[`${prefixCls}`]: !this.type,
					[`${prefixCls}-${this.type}`]: !!this.type,
					[`${prefixCls}-${this.type}-${this.align}`]: !!this.align,
					[`${prefixCls}-${this.type}-${this.justify}`]: !!this.justify,
					[`${this.className}`]: !!this.className
				}];
			},
			styles() {
				let style = {};
				if (this.gutter !== 0) {
					style = {
						marginLeft: this.gutter / -2 + 'px',
						marginRight: this.gutter / -2 + 'px'
					};
				}

				return style;
			}
		},
		
		methods: {
			updateGutter(val) {
				// 这里会嵌套寻找，把 Col 里的 Row 里的 Col 也找到，所以用 兄弟找
				//                const Cols = findComponentsDownward(this, 'iCol');
				const Col = findComponentDownward(this, 'JmkCol');
				const Cols = findBrothersComponents(Col, 'JmkCol', false);
				if (Cols.length) {
					Cols.forEach((child) => {
						if (val !== 0) {
							child.gutter = val;
						}
					});
				}
			},
			ShowContent(event) {
				cancelBubble(event)
				this.$JmkModal.show({title:"你点击的dom内容是",ModalBody:event.srcElement.innerHTML})
			}
		},
		watch: {
			gutter(val) {
				this.updateGutter(val);
			}
		}
	};
</script>
<style scoped="scoped">
	@import url("css/grid.css");
</style>
