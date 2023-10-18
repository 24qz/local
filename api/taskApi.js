import uniFetch from './uni-fetch.js'

//标记已读
export const getTask = (data) => {
	return uniFetch({
		url: '/driver/tasks/list',
		method: 'GET',
		data
	})
}

//任务详情
export const getTaskDetail = (data) => {
	return uniFetch({
		url: `/driver/tasks/details/${data}`,
		method: 'GET',
		data
	})
}

//提货
export const getDelivery = (data) => {
	return uniFetch({
		url: `/driver/tasks/takeDelivery`,
		method: 'POST',
		data
	})
}

//交付
export const getdeliver = (data) => {
	return uniFetch({
		url: `/driver/tasks/deliver`,
		method: 'POST',
		data
	})
}

//延迟提货
export const getdelay = (data) => {
	return uniFetch({
		url: `/driver/tasks/delay`,
		method: 'PUT',
		data
	})
}

// 上报异常
export const reportException = (data) => {
	return uniFetch.post('/driver/tasks/reportException', data);
};
// 回车登记
export const getRegistration = (data) => {
	return uniFetch.post('/driver/tasks/truckRegistration', data);
};