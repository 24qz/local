<template>
	<view class="fault-page">
		<view class="">
			<view class="top">违章类型</view>
			<view class="bot">
				<view @click="onFaultSel(index, item)" :class="{ selItem: FaultSel == index }" class="items" v-for="(item, index) in fault" :key="index">{{ item.value }}</view>
			</view>
			<view class="">
				<textarea v-model="recordData.accidentDescription" maxlength="50" placeholder-style="color:#818181" placeholder="请简单描述故障" />
			</view>

			<view class="">
				<view style="padding: 30rpx 0">请拍照</view>
				<uni-file-picker v-model="recordData.accidentImagesList"></uni-file-picker>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useTaskStore } from '@/stores/task.js';
const { recordData } = storeToRefs(useTaskStore());
const fault = ref([
	{ id: '0', value: '直行事故' },
	{ id: '1', value: '追尾事故' },
	{ id: '2', value: '超车事故' },
	{ id: '3', value: '左转弯事故' },
	{ id: '4', value: '右转弯事故' },
	{ id: '5', value: '弯道事故' },
	{ id: '6', value: '坡道事故' },
	{ id: '7', value: '会车事故' },
	{ id: '8', value: '其他' }
]);

const FaultSel = ref();
const onFaultSel = (index, item) => {
	FaultSel.value = index;
	recordData.value.accidentType = item.id;
};
</script>

<style lang="scss">
.fault-page {
	font-weight: 400;
	font-size: 28rpx;
	color: #2a2929;
	.top {
		padding-bottom: 30rpx;
	}
	.bot {
		display: flex;
		flex-wrap: wrap;

		.items {
			margin-bottom: 28rpx;
			margin-right: 28rpx;
			width: 188rpx;
			text-align: center;
			line-height: 80rpx;
			height: 80rpx;
			background: #f4f4f4;
			border-radius: 20rpx;
		}
		.selItem {
			background: #ffe0dd;
			border: 2rpx solid #ef4f3f;
		}
	}
	.selItem {
		background: #ffe0dd;
		border: 2rpx solid #ef4f3f;
	}
	uni-textarea {
		padding: 30rpx;
		box-sizing: border-box;
		width: 630rpx;
		height: 260rpx;
		background: #f4f4f4;
		border-radius: 16rpx;
	}
	::v-deep.file-picker__box {
		background: #f2f2f2;
	}
	::v-deep .icon-add {
		width: 31px;
		height: 3px;
		background-color: #b3aeae;
		border-radius: 2px;
	}
}
</style>
