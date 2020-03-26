<template>
	<div>
		<transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
			<div :class="classes" v-if="isShowModal">
				<div name="modal">
					<div name="title">
						<p>{{title}}</p>
						<jmk-icon class="closeIcon" @click="btnClick('hide')"></jmk-icon>
					</div>
					<div name="body" ref="jmkModalBody">
						<slot></slot>
						<div>
							<div v-html="modalBody">{{modalBody}}</div>
						</div>
					</div>
					<div name="footer">
						<div>
							<jmk-button cla="success" @click="btnClick('hide')">取消</jmk-button>
							<jmk-button cla="info" @click="btnClick('show')">确定</jmk-button>
						</div>
					</div>
				</div>
			</div>
		</transition>
		<transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
			<div v-if="isShowModal" class="shade" name="shade"></div>
		</transition>
	</div>
</template>

<script>
	import jmkIcon from "../../icon/icon.vue"
	import jmkButton from "../../button/src/button.vue"
	export default {
		name: "jmkModal",
		components:{
			jmkIcon,
			jmkButton
		},
		data() {
			return {
				isShowModal: true,
				title: "点击的内容",
				modalBody: "",
			}
		},
		computed: {
			classes() {
				return [
					"jmkModal",
				]
			},
		},
		methods: {
			btnClick(mas) {
				switch (mas) {
					case "hide":
						this.isShowModal = false;
						this.$JmkModal.cancel()
						break;
					case "show":
						this.isShowModal = false;
						this.$JmkModal.ok()
						break;
				}
			},
			show(data) {
				this.isShowModal = true;
				this.modalBody = data.ModalBody
			},
			hide() {
				this.isShowModal = false;
			},
		}
	}
</script>

<style scoped="scoped">
	@import url("https://cdn.jsdelivr.net/npm/animate.css@3.5.1");
	@import url("./css/modal.css");

	.closeIcon {
		position: absolute;
		top: 8px;
		right: 8px;
	}
</style>
