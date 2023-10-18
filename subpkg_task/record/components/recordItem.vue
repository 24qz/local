<template>
	<view class="recordItem-page">
		<view class="">
			<view class="top">违章类型</view>
			<view class="bot">
				<view @click="onTypeSel(index, item)" :class="{ selItem: typeSel == index }" class="items" v-for="(item, index) in type" :key="index">{{ item.value }}</view>
			</view>
		</view>

		<view class="">
			<view class="top">罚款金额</view>
			<view class="bot">
				<view @click="onMoneySel(index, item)" :class="{ selItem: MoneySel == index }" class="items" v-for="(item, index) in money" :key="index">{{ item.value }}</view>
			</view>
		</view>

		<view class="">
			<view class="top">扣分</view>
			<view class="bot">
				<view @click="onMarksSel(index, item)" :class="{ selItem: MarksSel == index }" class="items" v-for="(item, index) in marks" :key="index">{{ item.value }}</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useTaskStore } from '@/stores/task.js';
const { recordData } = storeToRefs(useTaskStore());
const type = ref([
	{ id: '1', value: '闯红灯' },
	{ id: '2', value: '无证驾驶' },
	{ id: '3', value: '超载' },
	{ id: '4', value: '酒后驾驶' },
	{ id: '5', value: '超速驾驶' }
]);

const money = ref([
	{ id: '0', value: '0元' },
	{ id: '100', value: '100元' },
	{ id: '200', value: '200元' },
	{ id: '300', value: '300元' },
	{ id: '500', value: '500元' },
	{ id: '1000', value: '1000元' },
	{ id: '2000', value: '2000元' }
]);
const marks = ref([
	{ id: '0', value: '0分' },
	{ id: '1', value: '1分' },
	{ id: '2', value: '2分' },
	{ id: '3', value: '3分' },
	{ id: '6', value: '6分' },
	{ id: '12', value: '12分' }
]);

const typeSel = ref();
const onTypeSel = (index, item) => {
	typeSel.value = index;
	recordData.value.breakRulesType = item.id;
};

const MoneySel = ref();
const onMoneySel = (index, item) => {
	MoneySel.value = index;
	recordData.value.penaltyAmount = item.id;
};
const MarksSel = ref();
const onMarksSel = (index, item) => {
	MarksSel.value = index;
	recordData.value.deductPoints = item.id;
};
</script>

<style lang="scss">
.recordItem-page {
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
}
</style>