<template>
	<view class="record-page">
		<view class="top">
			<view class="Notice-top">
				<view class="title">出车时间</view>
				<view class="time">
					<uni-dateformat :date="recordData.startTime" format="yyyy.MM.dd hh:mm"></uni-dateformat>
				</view>
			</view>

			<view class="Notice-bot">
				<view class="title">回车时间</view>
				<view class="time">
					<uni-datetime-picker v-model="recordData.endTime">
						<view v-if="!recordData.endTime" style="display: flex; align-items: center">
							<text>请选择</text>
							<text class="iconfont icon-arrow"></text>
						</view>
						<uni-dateformat v-else :date="recordData.endTime" format="yyyy.MM.dd hh:mm"></uni-dateformat>
					</uni-datetime-picker>
				</view>
			</view>
		</view>

		<view class="nav">
			<view class="item">
				<view class="item-top">
					<view class="left">车辆违章</view>
					<view class="right">
						<uni-data-checkbox
							@change="onBreakRules"
							selectedTextColor="#818181"
							selectedColor="red"
							v-model="recordData.isBreakRules"
							:localdata="sex"
						></uni-data-checkbox>
					</view>
				</view>

				<view class="item-bot" v-if="recordData.isBreakRules">
					<recordItem />
				</view>
			</view>

			<view class="item">
				<view class="item-top">
					<view class="left">车辆故障</view>
					<view class="right">
						<uni-data-checkbox @change="onFault" selectedTextColor="#818181" selectedColor="red" v-model="recordData.isFault" :localdata="sex2"></uni-data-checkbox>
					</view>
				</view>

				<view class="item-bot" v-if="recordData.isFault">
					<fault></fault>
				</view>
			</view>

			<view class="item">
				<view class="item-top">
					<view class="left">车辆事故</view>
					<view class="right">
						<uni-data-checkbox
							@change="onAccident"
							selectedTextColor="#818181"
							selectedColor="red"
							v-model="recordData.isAccident"
							:localdata="sex2"
						></uni-data-checkbox>
					</view>
				</view>

				<view class="item-bot" v-if="recordData.isAccident">
					<type />
				</view>
			</view>
		</view>

		<view class="bott">
			<button @click="onFormSubmit">交车</button>
		</view>
	</view>
</template>

<script setup>
import { getRegistration } from '@/api/taskApi.js';
import { onLoad } from '@dcloudio/uni-app';
import recordItem from './components/recordItem.vue';
import fault from './components/fault.vue';
import type from './components/type.vue';
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useTaskStore } from '@/stores/task.js';
const { recordData } = storeToRefs(useTaskStore());

const sex = [
	{
		text: '是',
		value: true
	},
	{
		text: '否',
		value: false
	}
];
const sex1 = [
	{
		text: '是',
		value: true
	},
	{
		text: '否',
		value: false
	}
];
const sex2 = [
	{
		text: '是',
		value: true
	},
	{
		text: '否',
		value: false
	}
];
onLoad((e) => {
	console.log(e);
	recordData.value.id = e.id;
	recordData.value.startTime = e.actualDepartureTime;
});

const onFormSubmit = async () => {
	console.log('recordData', recordData.value);

	recordData.value.accidentImagesList = recordData.value.accidentImagesList.map((item) => {
		return {
			url: item.url
		};
	});
	recordData.value.faultImagesList = recordData.value.faultImagesList.map((item) => {
		return {
			url: item.url
		};
	});

	const result = await getRegistration({ ...recordData.value });
	if (result.code != 200) return;
	// 提交回车登记成功之后, 回车任务列表页面
	uni.reLaunch({
		url: '/pages/task/index'
	});
};
</script>

<style lang="scss">
.record-page {
	min-height: calc(100vh - 85rpx);
	overflow: hidden;
	background-color: #f4f4f4;
	.top {
		margin: 30rpx;
		width: 690rpx;
		height: 240rpx;
		box-sizing: border-box;
		padding: 40rpx 30rpx;
		background: #ffffff;
		border-radius: 20rpx;
		.Notice-top {
			display: flex;
			padding-bottom: 40rpx;
			justify-content: space-between;
			border-bottom: 1rpx solid #cccccc6b;
			.time {
				font-weight: 400;
				font-size: 28rpx;
				color: #818181;
			}
			.title {
				font-weight: 400;
				font-size: 28rpx;
				color: #2a2929;
			}
		}
		.Notice-bot {
			display: flex;
			padding-top: 40rpx;
			justify-content: space-between;
			.time {
				font-weight: 400;
				font-size: 28rpx;
				color: #818181;
			}
			.title {
				font-weight: 400;
				font-size: 28rpx;
				color: #2a2929;
			}
		}
	}
	.nav {
		padding-bottom: 130rpx;
	}
	.item {
		padding: 40rpx 0rpx 0rpx 30rpx;
		box-sizing: border-box;
		margin: 30rpx;
		width: 690rpx;
		// height: 120rpx;
		background: #ffffff;
		border-radius: 20rpx;

		.item-top {
			padding-bottom: 30rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.left {
				font-weight: 400;
				font-size: 28rpx;
				color: #2a2929;
			}
		}
		.item-bot {
			padding-top: 30rpx;
			padding-bottom: 30rpx;
			border-top: 1rpx solid #cccccc6b;
		}
	}
	.bott {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 750rpx;
		height: 140rpx;
		background: #ffffff;
		text-align: center;
		box-shadow: 0 4rpx 16rpx 0 #a2a2a240;
		button {
			color: white;
			width: 414rpx;
			height: 100rpx;
			margin: 20rpx auto;
			background: #ef4f3f;
			border-radius: 50rpx;
		}
	}
}
</style>
