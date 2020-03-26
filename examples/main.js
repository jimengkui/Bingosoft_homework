import Vue from 'vue'
import App from './App.vue'
import myComponents from "../packages"
// import modal from "../packages/modal/src/modal.vue"

Vue.use(myComponents)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')



