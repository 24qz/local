<template>
	<view class="item">
		<uni-card title="">
			<template v-slot:title>
				<view class="top">
					<text>{{ item.title }}</text>
					<text class="iconfont icon-dot" v-if="item.isRead == 0"></text>
				</view>
			</template>
			<view class="uni-body">
				{{ item.content }}
			</view>
			<view class="bot">
				<uni-dateformat class="time" :date="item.created" format="yyyy.MM.dd hh:mm"></uni-dateformat>
				<view class="btn">查看详情</view>
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
</script>

<style lang="scss">
.item {
	margin: 0rpx auto 30rpx;
	width: 696rpx;
	height: 302rpx;
	border-radius: 10rpx;
	background: #ffffff;
	border-radius: 20rpx;
	overflow: hidden;
	.top {
		padding: 35rpx 0rpx;
		border-bottom: 0.03125rem solid #e3dede8a;
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
	.bot {
		display: flex;
		color: #818181;
		justify-content: space-between;
		align-items: center;
		.btn {
			border: 1px solid #ef4f3f;
			border-radius: 20rpx;
			padding: 0 18rpx;
			font-family: PingFangSC-Regular;
			font-weight: 400;
			font-size: 24rpx;
			color: #ef4f3f;
			letter-spacing: 0.28rpx;
		}
	}
}
</style>
