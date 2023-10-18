<template>
	<view class="arrow-area">
		<view class="title">系统公告</view>
		<view class="time">
			<uni-dateformat class="rightTitle" :date="time" format="MM-dd hh:mm"></uni-dateformat>
		</view>
		<view class="content">{{ content }}</view>
	</view>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
const content = route.query.content;
const time = route.query.time;
console.log(route.query);
</script>

<style lang="scss">
.arrow-area {
	padding: 32rpx;
	.time {
		font-weight: 400;
		font-size: 24rpx;
		padding: 15rpx 0 28rpx;
		color: #818181;
	}
	.title {
		font-weight: 500;
		font-size: 32rpx;
		color: #2a2929;
	}
	.content {
		font-weight: 400;
		font-size: 26rpx;
		color: #2a2929;
	}
}
</style>
