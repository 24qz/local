import {
	defineStore
} from 'pinia'
import {
	ref
} from 'vue'

export const useCounterStore = defineStore('counter', () => {
	const count = ref('')
	const setToken = (e) => {
		count.value = e
	}
	return {
		count,
		setToken
	}
}, {
	persist: true
})