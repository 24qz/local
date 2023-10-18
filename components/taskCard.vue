<template>
	<view class="card-page">
		<uni-card>
			<template v-slot:title>
				<view class="itemTop" @click="toDetail(item)">
					<view class="top">
						<view class="id">任务编号:{{ item.transportTaskId }}</view>
						<view class="btn" v-if="current == '0'">已延迟</view>
					</view>
					<view class="nav">
						<view class="start">起</view>
						<view class="end">止</view>
						<view class="cont">
							<view class="contop">{{ item.startAddress }}</view>
							<view class="bot">{{ item.endAddress }}</view>
						</view>
					</view>
				</view>
			</template>
			<view class="bot">
				<view class="left">
					<view class="">提货时间</view>
					<uni-dateformat class="rightTitle" :date="item.planDepartureTime" format="yyyy.MM-dd hh:mm"></uni-dateformat>
				</view>
				<view class="right" v-if="item.status == 1">
					<navigator v-if="item.enablePickUp" class="action" :url="`/subpkg_task/pickup/index?id=${item.id}`">提货</navigator>
					<navigator v-else class="action disabled">提货</navigator>
				</view>
				<view class="right" v-if="item.status == 2">
					<navigator class="action" :url="`/subpkg_task/delivery/index?id=${item.id}`">交付</navigator>
				</view>
				<view class="right" v-if="item.status == 4">
					<navigator class="action" :url="`/subpkg_task/record/index?id=${item.transportTaskId}&actualDepartureTime=${item.actualDepartureTime}`">回车登记</navigator>
				</view>
			</view>
		</uni-card>
	</view>
</template>

<script setup>
const props = defineProps({
	item: {
		type: Object
	}
});
const toDetail = (item) => {
	uni.navigateTo({
		url: `/subpkg_task/detail/index?id=${item.id}&enablePickUp=${item.enablePickUp}`
	});
};
</script>

<style lang="scss">
.card-page {
	margin: 30rpx 30rpx 0;
	width: 690rpx;
	height: 458rpx;
	background: #ffffff;
	overflow: hidden;
	border-radius: 20rpx;
	.itemTop {
		border-bottom: 1rpx solid #81818126;
		.top {
			display: flex;
			padding: 30rpx 0 42rpx;
			justify-content: space-between;
			.id {
				font-weight: 500;
				font-size: 32rpx;
				color: #2a2929;
			}
			.btn {
				color: #ef4f3f;
				font-size: 24rpx;
				padding: 0 10rpx;
				display: flex;
				align-items: center;
				border: 2rpx solid #ef4f3f;
				border-radius: 22rpx;
			}
		}
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
					padding: 0rpx 0 30rpx;
				}
				.bot {
					padding: 30rpx 0 0;
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
		display: flex;
		align-items: center;
		justify-content: space-between;
		.action {
			display: flex;
			align-items: center;
			height: 64rpx;
			padding: 0 40rpx;
			background-color: #ef4f3f;
			color: #fff;
			font-size: 24rpx;
			border-radius: 64rpx;

			&.disabled {
				background-color: #fadcd9;
			}
		}
	}
	::v-deep .uni-card__header {
		padding: 30rpx 0 !important;
	}
	::v-deep .uni-card {
		margin: 0 !important;
		padding: 0 28rpx !important;
		box-shadow: none !important;
		border: 0 !important;
	}
}
</style>
