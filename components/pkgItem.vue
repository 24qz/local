<template>
	<view class="content">
		<uni-card>
			<template v-slot:title>
				<view class="itemTop">
					<view class="nav">
						<view class="start">起</view>
						<view class="end">止</view>
						<view class="cont">
							<view class="contop">{{ list.startAddress }}</view>
							<view class="bot">{{ list.endAddress }}</view>
						</view>
					</view>
				</view>
			</template>
			<view class="bot">
				<view style="display: flex; justify-content: space-between">
					<view style="font-weight: 400; font-size: 28rpx; color: #818181">任务编号</view>
					<view class="">{{ list.transportTaskId }}</view>
				</view>
				<view class="left">
					<view class="title">联系人</view>
					<view class="">{{ list.finishHandoverName }}</view>
				</view>
				<view class="left">
					<view class="title">联系电话</view>
					<view class="">
						{{ list.finishHandoverPhone }}
						<text class="iconfont icon-phone" @click="toggle"></text>
					</view>
				</view>
				<view class="left">
					<view class="title">提货时间</view>
					<uni-dateformat class="rightTitle" :date="list.planDepartureTime" format="yyyy.MM-dd hh:mm"></uni-dateformat>
				</view>
				<view class="left">
					<view class="title">预计送达时间</view>
					<uni-dateformat class="rightTitle" :date="list.planArrivalTime" format="yyyy.MM-dd hh:mm"></uni-dateformat>
				</view>
			</view>
		</uni-card>
		<uni-popup ref="popup" background-color="#fff" @change="change">
			<view class="popup-content" :class="{ 'popup-height': type === 'left' || type === 'right' }">
				<view style="font-weight: 400; font-size: 32rpx; color: #2a2929; padding: 28rpx 256rpx; border-bottom: 1px solid rgb(204 204 204 / 32%)">
					{{ list.finishHandoverPhone }}
				</view>
				<view style="padding: 32rpx 0 89rpx; text-align: center" @click="close">取消</view>
			</view>
		</uni-popup>
	</view>
</template>

<script setup>
import { ref } from 'vue';
const type = ref('bottom');
const popup = ref(null);
const props = defineProps({
	list: {
		type: Object
	}
});

const toggle = () => {
	// open 方法传入参数 等同在 uni-popup 组件上绑定 type属性
	popup.value.open(type.value);
	// console.log(popup.value);
};

const close = () => {
	popup.value.close(type.value);
};

const change = (e) => {
	console.log(e);
};
</script>

<style lang="scss">
.popup-content {
	padding: 15px;
	// height: 50px;
	background-color: #fff;
}
.popup-height {
	// height: 50px;
	width: 200px;
}
.itemTop {
	border-bottom: 1rpx solid #81818126;

	.nav {
		position: relative;
		.cont {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			margin-left: 30rpx;
			margin-bottom: 30rpx;
			padding: 0rpx 0 0rpx 32rpx;
			border-left: 2rpx dashed #ef4f3f;
			.contop {
				padding: 0rpx 0 38rpx;
			}
			.bot {
				padding: 38rpx 0 0;
			}
		}
		.start {
			background-color: #000;
			position: absolute;
			top: 0;
			left: 10rpx;
			text-align: center;
			line-height: 44rpx;
			border-radius: 50%;
			width: 44rpx;
			height: 44rpx;
			font-family: PingFangSC-Medium;
			font-weight: 500;
			font-size: 24rpx;
			color: #ffffff;
		}
		.end {
			position: absolute;
			background-color: red;
			bottom: 0;
			left: 10rpx;
			border-radius: 50%;
			text-align: center;
			line-height: 44rpx;
			width: 44rpx;
			height: 44rpx;
			font-family: PingFangSC-Medium;
			font-weight: 500;
			font-size: 24rpx;
			color: #ffffff;
		}
	}
}

.bot {
	.left {
		color: #2a2929;
		font-size: 28rpx;
		padding-top: 30rpx;
		display: flex;
		justify-content: space-between;
		.title {
			font-weight: 400;
			font-size: 28rpx;
			color: #818181;
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
</style>
