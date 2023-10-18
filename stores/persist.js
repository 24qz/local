import {
	createPersistedState
} from 'pinia-plugin-persistedstate'

const piniaPersistedState = createPersistedState({
	key: (id) => `${id}`,
	storage: {
		getItem: (key) => {
			return uni.getStorageSync(key)
		},
		setItem: (key, value) => {
			uni.setStorageSync(key, value)
		}
	}
})

export default piniaPersistedState