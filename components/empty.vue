<template>
	<view class="empty">
		<image class="img" src="../static/blank@2x.png" mode=""></image>
		<view class="title" v-if="!current">暂无数据</view>
		<view class="title" v-if="current == 2">未找到相关任务</view>
		<view class="title" v-if="current == 1">无在途任务</view>
		<view class="title" v-if="current == 0">无待提货物</view>
	</view>
</template>

<script setup>
const props = defineProps({
	current: {
		type: Number
	}
});
</script>

<style lang="scss">
.empty {
	height: calc(100vh - 225px);
	background-color: #ffff;
	padding-top: 241rpx;
	text-align: center;
	.title {
		font-weight: 400;
		font-size: 28rpx;
		color: #818181;
	}
}
.img {
	width: 400rpx;
	height: 240rpx;
}
</style>
