import Vue from 'vue';
import Button from "./button/src/button.vue"
import modal from "./modal/src/modal.vue"
import icon from './icon/icon.vue'
import {
	Row,
	Col
} from "./grid/index.js"
const components = [
	Button,
	modal,
	icon,
	Row,
	Col
]
//组件全局注册
const install = (Vue) => {
	if (Vue.installed) return
	Vue.installed = false;
	components.forEach(component => (Vue.component(component.name, component)))
}
//modal组件挂载方法
const modalMount = (properties) => {
	const props = properties || {}
	const Instance = new Vue({
		render(jmk) {
			return jmk(modal, {
				props: props
			});
		}
	});
	const component = Instance.$mount();
	document.body.appendChild(component.$el);
	const Modal = Instance.$children[0]
	return {
		show(data) {
			Object.keys(data).forEach(key=>(Modal.$data[key] = data[key]))
			Modal.show(data)
		},
		hide() {
			Modal.hide()
		}
	}
}
//判断单例
let modalInstance;
const getModalInstance = () => {
	modalInstance = modalInstance || modalMount();
	return modalInstance
}
const jmkModal = {}
//显示modal
jmkModal.show = (data)=>{
	let modal = getModalInstance ();
	modal.show(data)
}
//隐藏modal
jmkModal.hide = (data)=>{
	let modal = getModalInstance ();
	modal.hide(data)
}
//点击确定时时间
jmkModal.ok = ()=>{}
//点击取消时事件
jmkModal.cancel= ()=>{}

Vue.prototype.$JmkModal = jmkModal

export default {
	install
}
