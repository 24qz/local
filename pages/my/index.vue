<template>
	<view class="my-page" v-if="list">
		<view class="top">
			<view style="padding-top: 100rpx">
				<view>
					<image class="img" :src="list.avatar" mode=""></image>
				</view>
				<view style="color: white; margin-top: 10rpx; font-size: 36rpx">
					{{ list.name }}
				</view>
			</view>

			<view style="margin-top: 18rpx; color: #e5e5e5; font-size: 28rpx">
				<view>司机编号：{{ list.number }}</view>
				<view style="margin-top: 18rpx">手机号：{{ list.phone }}</view>
			</view>
		</view>

		<view class="nav">
			<view class="content">
				<view class="ico"></view>
				<view class="">本月任务</view>
				<view class="ico"></view>
			</view>

			<view class="bot">
				<view class="item">
					<view class="con">{{ taskList.taskAmounts }}</view>
					<view class="title">任务总量</view>
				</view>
				<view class="item">
					<view class="con">{{ taskList.completedAmounts }}</view>
					<view class="title">完成任务量</view>
				</view>
				<view class="item">
					<view class="con">{{ taskList.transportMileage }}</view>
					<view class="title">运输里程(km)</view>
				</view>
			</view>
		</view>

		<view class="bottom">
			<navigator url="/subpkg_user/truck/index" class="item">
				<text style="display: flex; align-items: center">车辆信息</text>
				<text class="iconfont icon-arrow"></text>
			</navigator>

			<navigator url="/subpkg_user/task/index" class="item">
				<text style="display: flex; align-items: center">任务数据</text>
				<text class="iconfont icon-arrow"></text>
			</navigator>

			<navigator url="/subpkg_user/setting/index" class="item" style="border: 0">
				<text style="display: flex; align-items: center">系统设置</text>
				<text class="iconfont icon-arrow"></text>
			</navigator>
		</view>
	</view>
</template>

<script setup>
import { myUser, myUserTask } from '@/api/api.js';
import { ref } from 'vue-demi';
const list = ref([]);
const taskList = ref([]);
const getUser = async () => {
	let res = await myUser();
	// console.log(res);
	list.value = res.data;
};
getUser();

const getUserTask = async () => {
	let res = await myUserTask({ month: '7', year: '2020' });
	// console.log(res);
	taskList.value = res.data;
};
getUserTask();
</script>

<style lang="scss">
.my-page {
	background-color: #f4f4f4;
	height: calc(100vh - 100rpx);
	.top {
		text-align: center;
		height: 584rpx;
		background-image: url('../../static/img-bg.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: 100% 100%;
		.img {
			width: 132rpx;
			height: 130rpx;
		}
	}
	.nav {
		margin: -130rpx auto 0;
		width: 690rpx;
		height: 268rpx;
		background: #ffffff;
		border-radius: 16rpx;
		.content {
			padding: 27rpx 0 41rpx;
			display: flex;
			color: #818181;
			justify-content: center;
			align-items: center;
			.ico {
				margin: 0 7rpx;
				width: 16rpx;
				height: 3rpx;
				background-color: #818181;
			}
		}

		.bot {
			text-align: center;
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
	}

	.bottom {
		margin: 30rpx auto 0;
		width: 690rpx;
		height: 360rpx;
		background: #ffffff;
		border-radius: 16rpx;
		.item {
			padding: 35rpx;
			border-bottom: 2rpx solid #f7f7f7;
			display: flex;
			justify-content: space-between;
			align-content: center;
		}
	}
}
</style>
