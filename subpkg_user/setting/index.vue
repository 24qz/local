<template>
	<view class="set-page">
		<view class="top">
			<uni-list :border="false">
				<uni-list-item showArrow title="换绑手机"></uni-list-item>
				<uni-list-item showArrow title="修改密码"></uni-list-item>
				<uni-list-item showArrow title="消息通知设置"></uni-list-item>
				<uni-list-item showArrow title="修改密码"></uni-list-item>
				<uni-list-item showArrow title="清理缓存"></uni-list-item>
			</uni-list>
		</view>
		<view class="">
			<button class="btn">退出</button>
		</view>
	</view>
</template>

<script></script>

<style lang="scss">
.set-page {
	overflow: hidden;
	background-color: #f4f4f4;
	height: 100vh;
	.top {
		margin: 40rpx auto;
		width: 690rpx;
		height: 600rpx;
		background: #ffffff;
		border-radius: 16rpx;
		overflow: hidden;
		::v-deep.uni-list-item__container {
			padding: 22px 15px;
		}
		::v-deep .uni-list-item__content-title {
			font-weight: 400;
			font-size: 32rpx;
			color: #2a2929;
		}
	}
	uni-button:after {
		border: 0 !important;
	}
	.btn {
		line-height: 120rpx;
		width: 690rpx;
		height: 120rpx;
		color: #2a2929;
		background: #ffffff;
		border-radius: 16rpx;
	}
}
</style>
