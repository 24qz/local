<template>
	<view class="truck">
		<view class="img">
			<swiper style="height: 100%; width: 100%" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item style="height: 100%; width: 100%" v-for="(item, index) in list.pictureList" :key="index">
					<image style="width: 100%; height: 100%" :src="item.url" mode=""></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="bot">
			<uni-list :border="false">
				<uni-list-item :border="false" title="车牌编号" :rightText="list.id"></uni-list-item>
				<uni-list-item :border="false" title="车辆号码" :rightText="list.licensePlate"></uni-list-item>
				<uni-list-item :border="false" title="车型" :rightText="list.truckType"></uni-list-item>
				<uni-list-item :border="false" title="所属机构" :rightText="list.currentOrganName"></uni-list-item>
				<uni-list-item :border="false" title="载重" :rightText="`${Number(list.allowableLoad).toFixed(0)}吨`"></uni-list-item>
			</uni-list>
		</view>
	</view>
</template>

<script setup>
import { myVehicle } from '@/api/api.js';
import { ref } from 'vue';
const list = ref([]);
const getData = async () => {
	let res = await myVehicle();
	console.log(res);
	list.value = res.data;
};
getData();
</script>

<style>
.truck {
	overflow: hidden;
	height: 100vh;
	background-color: #f4f4f4;
	.img {
		border-radius: 10rpx;
		margin: 27rpx auto;
		width: 690rpx;
		height: 402rpx;
		overflow: hidden;
	}
	.bot {
		margin: 0 auto;
		width: 690rpx;
		height: 402rpx;
		background: #ffffff;
		overflow: hidden;
		border-radius: 20rpx;
		::v-deep.uni-list-item__content-title {
			font-weight: 400;
			font-size: 28rpx;
			color: #818181;
		}
		::v-deep.uni-list-item__extra-text {
			font-weight: 400;
			font-size: 28rpx;
			color: #2a2929;
		}
	}
}
</style>
