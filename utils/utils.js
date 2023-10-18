/**
 * 项目中会用的一系列的工具方法
 */

export const utils = {
	/**
	 * 用户反馈（轻提示）
	 * @param {string} title 提示文字内容
	 * @param {string} icon 提示图标类型
	 */
	toast(title = '', icon = 'none') {
		uni.showToast({
			title,
			icon,
			mask: true
		});
	}
};

// 将utils 工具类挂载到uni上面
uni.utils = utils;