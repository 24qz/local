import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore(
	'user',
	() => {
		const token = ref('');

		// const setToken = (t) => {
		// 	token.value = t;
		// };

		// 一定要将定义的数据和方法返回
		return { token };
	},
	{
		persist: true
	}
);
