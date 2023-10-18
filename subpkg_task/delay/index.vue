<template>
	<view class="delay-page">
		<uni-list :border="false">
			<uni-list-item :border="false" title="原定时间" :right-text="planDepartureTime"></uni-list-item>
			<uni-list-item :border="false" title="延迟时间" showArrow>
				<template v-slot:footer>
					<picker mode="time" @change="onPickerChange" class="time-picker">
						<text v-if="!delayTime">不可超过2个小时</text>
						<text :class="{ error: !delayTimeValid }" v-else>{{ delayTime }}:00</text>
					</picker>
				</template>
			</uni-list-item>
			<uni-list-item :border="false" direction="column">
				<template v-slot:body>
					<view class="textarea-wrapper">
						<textarea class="textarea" v-model="delayReason" placeholder="请输入延迟提货原因" />
						<text :class="{ error: wordsCount > 50 }" class="words-count">{{ wordsCount }}/50</text>
					</view>
				</template>
			</uni-list-item>
			<uni-list-item :border="false">
				<template v-slot:body>
					<button @click="onSubmitForm" :disabled="!enableSubmit" class="button">提交</button>
				</template>
			</uni-list-item>
		</uni-list>
	</view>
</template>

<script setup>
import { onLoad } from '@dcloudio/uni-app';
import { computed, ref } from 'vue';
import { getdelay } from '@/api/taskApi.js';

//作业id
const id = ref('');
//原定时间
const planDepartureTime = ref('');
//延迟原因
const delayReason = ref('');
// 延迟时间
const delayTime = ref('');
//接收传参
onLoad((params) => {
	// console.log(params);
	id.value = params.id;
	planDepartureTime.value = params.planDepartureTime;
});

const onPickerChange = (e) => {
	const [date] = planDepartureTime.value.split(' ');
	delayTime.value = `${date} ${e.detail.value}`;
	// console.log(date);
};

const delayTimeValid = computed(() => {
	const start = new Date(planDepartureTime.value).getTime();
	console.log(start);
	const end = new Date(delayTime.value).getTime();
	return end - start > 0 && end - start < 7200 * 1000;
});

const wordsCount = computed(() => {
	return delayReason.value.length;
});

const enableSubmit = computed(() => {
	return wordsCount.value && delayTimeValid.value;
});

const onSubmitForm = async () => {
	try {
		const data = {
			delayReason: delayReason.value,
			delayTime: delayTime.value,
			id: id.value
		};
		let res = await getdelay(data);
		// console.log(res);
		// 跳转到任务列表
		uni.reLaunch({ url: '/pages/task/index' });
	} catch (e) {
		//TODO handle the exception
		console.log(e);
	}
};
</script>

<style lang="scss">
.delay-page {
	height: calc(100vh - 100rpx);
	background-color: #f4f4f4;
	overflow: hidden;
	::v-deep .uni-list {
		border-radius: 16rpx;
		overflow: hidden;
	}
	::v-deep .uni-list-item__content-title {
		font-size: 28rpx;
		color: #2a2929;
	}

	::v-deep .uni-list-item__extra-text {
		font-size: 28rpx;
		color: #818181;
	}
	.time-picker {
		color: #818181;
		font-size: 28rpx;
	}
	.textarea {
		width: 100%;
		height: 260rpx;
		font-size: 28rpx;
		padding: 20rpx 28rpx;
		background-color: #f4f4f4;
		border-radius: 16rpx;
		box-sizing: border-box;
		color: #818181;
	}

	.textarea-wrapper {
		position: relative;
	}

	.words-count {
		position: absolute;
		bottom: 10rpx;
		right: 30rpx;
		color: #818181;
		font-size: 24rpx;
	}
	.error {
		color: #ef4f3f;
	}

	.button {
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
		margin: -20rpx auto 20rpx;
		color: #fff;
		font-size: 28rpx;
		border-radius: 100rpx;
		background-color: #ef4f3f;

		&[disabled] {
			background-color: #fadcd9;
		}
	}
}
</style>
