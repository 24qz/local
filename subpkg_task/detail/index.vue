<template>
	<view class="detail-page">
		<view class="box-bg">
			<uni-nav-bar @clickLeft="onBack" shadow left-icon="left" leftText="" :rightText="list.status == 2 ? '' : '取消任务'" title="任务详情" />
		</view>

		<view class="nav">
			<uni-collapse accordion v-model="accordionVal" @change="change">
				<view class="item">
					<uni-collapse-item :title="`基本信息(任务编号：${list.transportTaskId})`">
						<template v-slot:title>
							<view style="display: flex; align-items: center; padding: 29rpx 0 29rpx 40rpx">
								<view style="font-weight: 500; font-size: 32rpx; color: #2a2929">基本信息</view>
								<view style="font-size: 24rpx; color: #818181">{{ `(任务编号：${list.transportTaskId})` }}</view>
							</view>
						</template>
						<pkgItem :list="list" />
					</uni-collapse-item>
				</view>

				<view class="item">
					<uni-collapse-item title="车辆司机信息">
						<view class="left">
							<view class="title">车牌号</view>
							<view class="">{{ list.licensePlate }}</view>
						</view>
						<view class="left">
							<view class="title">司机姓名</view>
							<view class="">{{ list.driverName }}</view>
						</view>
					</uni-collapse-item>
				</view>

				<view class="item">
					<uni-collapse-item title="运输路线">
						<view class="route">
							<view style="display: flex; flex-direction: column; align-items: center">
								<view style="font-weight: 600; font-size: 32rpx; color: #2a2929">{{ list.startProvince }}省</view>
								<view style="margin-top: 10rpx">{{ list.startCity }}市</view>
							</view>
							<view class="">
								<text class="iconfont icon-halfArrow"></text>
							</view>
							<view style="display: flex; flex-direction: column; align-items: center">
								<view style="font-weight: 600; font-size: 32rpx; color: #2a2929">{{ list.endProvince }}省</view>
								<view style="margin-top: 10rpx">{{ list.endCity }}市</view>
							</view>
						</view>
					</uni-collapse-item>
				</view>
				<view class="item">
					<uni-collapse-item title="物品信息"></uni-collapse-item>
				</view>
				<view class="item" v-if="list.status == 1">
					<uni-collapse-item title="提货信息"></uni-collapse-item>
				</view>
			</uni-collapse>
		</view>

		<view class="goods-carts" v-if="list.status == 1">
			<navigator :url="`/subpkg_task/delay/index?id=${list.id}&planDepartureTime=${list.planDepartureTime}`" class="delay">延迟提货</navigator>
			<navigator v-if="$route.query.enablePickUp === 'true'" class="action" :url="`/subpkg_task/pickup/index?id=${list.id}`">提货</navigator>
			<navigator v-else class="action disabled">提货</navigator>
		</view>
		<view class="goods-carts" v-if="list.status == 2">
			<navigator :url="`/subpkg_task/except/index?id=${list.id}&planDepartureTime=${list.planDepartureTime}`" class="delay">上报异常</navigator>
			<navigator v-if="$route.query.enablePickUp === 'true'" class="action" :url="`/subpkg_task/delivery/index?id=${list.id}`">交付</navigator>
			<navigator v-else class="action disabled">交付</navigator>
		</view>
		<view class="goods-carts" v-if="list.status == 4">
			<navigator :url="`/subpkg_task/record/index?id=${list.id}&actualDepartureTime=${list.actualDepartureTime}`" class="delay">回车登记</navigator>
			<navigator v-if="$route.query.enablePickUp === 'true'" class="action" :url="`/subpkg_task/delivery/index?id=${list.id}`">交付</navigator>
			<navigator v-else class="action disabled">交付</navigator>
		</view>
	</view>
</template>

<script setup>
import pkgItem from '@/components/pkgItem.vue';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { getTaskDetail } from '@/api/taskApi.js';

const route = useRoute();
const accordionVal = ref('0');
const list = ref({});

const onBack = () => {
	uni.switchTab({
		url: '/pages/task/index'
	});
};
const change = (e) => {
	console.log(e);
};
console.log(route.query);
const getdata = async () => {
	let res = await getTaskDetail(route.query.id);
	console.log(res);
	list.value = res.data;
};
getdata();

const ontack = () => {
	console.log(11111);
};
</script>

<style lang="scss">
.detail-page {
	height: 100vh;
	background-color: #f4f4f4;
	.nav {
		margin: 30rpx auto;
		width: 690rpx;
		.item {
			margin-top: 30rpx;
			border-radius: 18rpx;
			overflow: hidden;
			.route {
				padding: 0 123rpx;
				padding-bottom: 59rpx;
				display: flex;
				align-items: center;
				justify-content: space-around;
			}
			.left {
				color: #2a2929;
				font-size: 28rpx;
				padding: 10rpx 34rpx 28rpx 35rpx;
				display: flex;
				justify-content: space-between;
				.title {
					font-weight: 400;
					font-size: 28rpx;
					color: #818181;
				}
			}
		}
	}
}
::v-deep.uni-navbar--border {
	border-bottom: none;
}
::v-deep.uni-navbar--shadow {
	box-shadow: none;
}
::v-deep.uni-nav-bar-text {
	font-weight: 600;
	font-size: 36rpx;
	color: #2a2929;
}
::v-deep.uni-nav-bar-right-text {
	font-weight: 400;
	font-size: 28rpx;
	color: #2a2929;
}
::v-deep.uni-navbar__header {
	height: 100rpx !important;
}
::v-deep.uniui-bottom[data-v-d31e1c47]:before {
	content: '\e67b';
	font-size: 30rpx;
	color: #ef4f3f;
}
::v-deep.uni-collapse-item__title-text {
	font-weight: 500;
	font-size: 32rpx;
	color: #2a2929;
}
::v-deep.uni-collapse-item__title {
	background-color: white !important;
}
::v-deep .uni-card {
	margin: 0 !important;
	padding: 0 28rpx !important;
	box-shadow: none !important;
	border: 0 !important;
}
::v-deep.uni-card__content {
	padding: 20rpx 0 !important;
}
::v-deep.uni-collapse {
	background-color: transparent;
}
.goods-carts {
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	background-color: white;
	justify-content: space-between;
	padding: 20rpx 30rpx;
	position: fixed;
	left: 0;
	right: 0;
	/* #ifdef H5 */
	left: var(--window-left);
	right: var(--window-right);
	/* #endif */
	bottom: 0;
	.delay {
		text-align: center;
		line-height: 100rpx;
		font-weight: 400;
		font-size: 32rpx;
		color: #2a2929;
		width: 250rpx;
		background-color: #e6e6e6;
		border-radius: 50rpx;
		height: 100rpx;
	}
	.take {
		width: 414rpx;
		color: white;
		text-align: center;
		line-height: 100rpx;
		height: 100rpx;
		background: #fadcd9;
		border-radius: 50rpx;
	}
	uni-button:after {
		border: none !important;
	}
	.action {
		background-color: #ef4f3f;
		width: 414rpx;
		color: white;
		text-align: center;
		line-height: 100rpx;
		height: 100rpx;
		border-radius: 50rpx;

		&.disabled {
			background-color: #fadcd9;
		}
	}
}
</style>
