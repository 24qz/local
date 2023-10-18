import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useTaskStore = defineStore('task', () => {
	// 回车登记所需要的所有参数数据
	const recordData = ref({
		// 运输任务id
		id: '',
		// 出车时间
		startTime: '',
		// 回车时间
		endTime: '',

		/**违章参数**/
		breakRulesType: '', // 违章类型
		deductPoints: '', // 扣分数据
		penaltyAmount: '', // 罚款金额
		isBreakRules: false, // 车辆是否违章
		breakRulesDescription: '', //违章说明
		/**违章参数**/

		/**故障类型参数**/
		isFault: false, //车辆是否故障
		faultType: '', // 故障类型
		faultDescription: '', // 故障说明，类型为“其他”时填写
		faultImagesList: [], // 故障图片列表
		/**故障类型参数**/

		/**交通事故**/
		isAccident: false, // 是否出现事故
		accidentDescription: '', // 事故说明
		accidentImagesList: [], // 事故图片列表
		accidentType: '' // 事故类型
		/**交通事故**/
	});
	return { recordData };
});
