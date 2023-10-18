<template>
	<view class="task-page">
		<view class="top">
			<text style="color: #818181; font-size: 24rpx" class="iconfont icon-left"></text>
			<text class="data">2020年2月</text>
			<text style="color: #818181; font-size: 24rpx" class="iconfont icon-caret"></text>
		</view>
		<view class="bot">
			<view class="item">
				<view class="con">18</view>
				<view class="title">任务总量</view>
			</view>
			<view class="item">
				<view class="con">16</view>
				<view class="title">完成任务量</view>
			</view>
			<view class="item">
				<view class="con">3897</view>
				<view class="title">运输里程(km)</view>
			</view>
		</view>

		<view class="date">
			<uni-calendar class="uni-calendar--hook" :selected="selected" :showMonth="false" @change="change" @monthSwitch="monthSwitch" />
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
const selected = ref([]);
const change = (e) => {
	console.log('change 返回:', e);
	// 模拟动态打卡
	if (selected.value.length > 5) return;
	selected.value.push({
		date: e.fulldate,
		info: '打卡'
	});
};
const monthSwitch = (e) => {
	console.log('monthSwitchs 返回:', e);
};
</script>

<style lang="scss">
.task-page {
	height: 100vh;
	background-color: #f4f4f4;
	.top {
		color: '#818181';
		padding: 59rpx 0 40rpx 0;
		display: flex;

		justify-content: center;
		align-items: center;
		font-weight: 400;
		font-size: 36rpx;
		.data {
			margin: 0 20rpx;
		}
	}
	.bot {
		width: 754rpx;
		height: 202rpx;
		background: #ffffff;
		text-align: center;
		align-items: center;
		display: flex;
		justify-content: space-around;
		.item {
			.con {
				font-weight: 600;
				font-size: 36rpx;
				color: #2a2929;
			}
			.title {
				height: 34rpx;
				font-family: PingFangSC-Regular;
				font-weight: 400;
				font-size: 24rpx;
				color: #2a2929;
				letter-spacing: 0.28rpx;
				text-align: center;
				margin-top: 30rpx;
			}
		}
	}

	.date {
		margin-top: 43rpx;
	}
}
</style>
