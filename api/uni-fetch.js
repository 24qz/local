// 导入安装好的 uni-app-fetch 模块
import {
	createUniFetch
} from 'uni-app-fetch'

import {
	useCounterStore
} from '@/stores/counter.js'

// 定义tabbar路径
const tabBarPagePaths = ['pages/task/index', 'pages/message/index', 'pages/my/index'];
// 配置符合自身业务的请求对象
const uniFetch = createUniFetch({
	loading: {
		title: '正在加载...'
	},
	baseURL: 'https://slwl-api.itheima.net',
	intercept: {
		// 请求拦截器
		request(options) {
			// console.log(options);
			const store = useCounterStore()
			// 后续补充实际逻辑
			// if (store.count) options.header.Authorization = store.count
			const defaultHeader = {
				Authorization: store.count
			};

			options.header = Object.assign({}, defaultHeader, options.header);

			return options
		},
		// 响应拦截器
		response(result) {
			// 后续补充实际逻辑
			// console.log(result);
			if (result.statusCode === 200 && result.data.code === 200) {
				return result.data
			}
			if (result.statusCode === 401) {
				const pageStack = getCurrentPages()

				const redirectUrl = pageStack[pageStack.length - 1].route
				const routeType = tabBarPagePaths.includes(redirectUrl) ? 'switchTab' : 'redirectTo'
				console.log(redirectUrl);
				return uni.redirectTo({
					url: `/pages/login/index?routeType=${routeType}&redirectUrl=/${redirectUrl}`
				})

			}
			uni.utils.toast(result.data.msg || '请求失败')
		},
	},
})

export default uniFetch