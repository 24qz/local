import App from './App'
import {
	createPinia
} from 'pinia'
import piniaPersistedState from '@/stores/persist.js'
import '@/utils/utils.js'
// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const pinia = createPinia()
	pinia.use(piniaPersistedState)
	const app = createSSRApp(App)
	app.use(pinia)
	return {
		app
	}
}
// #endif