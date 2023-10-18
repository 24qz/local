import uniFetch from './uni-fetch.js'

//登录
export const login = (data) => {
	return uniFetch({
		url: '/driver/login/account',
		method: 'POST',
		data
	})
}

//用户信息
export const myUser = () => {
	return uniFetch({
		url: '/driver/users',
		method: 'GET',
	})
}

//任务信息
export const myUserTask = (data) => {
	return uniFetch({
		url: '/driver/users/taskReport',
		method: 'GET',
		data
	})
}

//车辆信息
export const myVehicle = (data) => {
	return uniFetch({
		url: '/driver/users/truck',
		method: 'GET',
		data
	})
}

//消息列表
export const myMsg = (data) => {
	return uniFetch({
		url: '/driver/messages/page',
		method: 'GET',
		data
	})
}

//全部已读
export const myAllRead = (data) => {
	return uniFetch({
		url: `/driver/messages/readAll/${data}`,
		method: 'PUT',
		data
	})
}

//标记已读
export const myRead = (data) => {
	return uniFetch({
		url: `/driver/messages/${data}`,
		method: 'PUT',
		data
	})
}