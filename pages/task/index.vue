<template>
	<view class="task-page">
		<view class="inv-h-w">
			<view :class="['inv-h', current == 0 ? 'inv-h-se' : '']" @click="current = 0">待提货</view>
			<view :class="['inv-h', current == 1 ? 'inv-h-se' : '']" @click="current = 1">在途</view>
			<view :class="['inv-h', current == 2 ? 'inv-h-se' : '']" @click="current = 2">已完成</view>
		</view>
		<scroll-view
			v-show="current == 0"
			:refresher-triggered="isTriggered"
			@refresherrefresh="onRefresh"
			refresher-enabled
			@scrolltolower="onScrollToLower"
			class="scroll-view-wrapper"
			scroll-y="true"
		>
			<view>
				<taskCard :current="0" v-for="(item, index) in list" :key="index" :item="item" />
				<empty v-if="list.length == 0" :current="0" />
			</view>
			<view class="task-blank" v-if="hasMore">没有更多了</view>
		</scroll-view>

		<scroll-view
			v-show="current == 1"
			:refresher-triggered="isTriggered1"
			@refresherrefresh="onRefresh1"
			refresher-enabled
			@scrolltolower="onScrollToLower1"
			class="scroll-view-wrapper"
			scroll-y="true"
		>
			<view>
				<taskCard :current="1" v-for="(item, index) in list1" :key="index" :item="item" />
				<empty v-if="list1.length == 0" :current="1" />
			</view>
			<view class="task-blank" v-if="hasMore1">没有更多了</view>
		</scroll-view>

		<scroll-view
			v-show="current == 2"
			:refresher-triggered="isTriggered2"
			@refresherrefresh="onRefresh2"
			refresher-enabled
			@scrolltolower="onScrollToLower2"
			class="scroll-view-wrapper"
			scroll-y="true"
		>
			<view class="Notice-top">
				<view class="search">
					<uni-easyinput prefixIcon="search" v-model="value" placeholder="请输入任务编号" @iconClick="iconClick"></uni-easyinput>
				</view>
			</view>
			<view>
				<taskCard :current="2" v-for="(item, index) in list2" :key="index" :item="item" />
				<empty v-if="list2.length == 0" :current="2" />
			</view>
			<view class="task-blank" v-if="hasMore2">没有更多了</view>
		</scroll-view>
	</view>
</template>

<script setup>
import empty from '@/components/empty.vue';
import { ref } from 'vue';
import taskCard from '@/components/taskCard.vue';
import { getTask } from '@/api/taskApi.js';
const current = ref(0);
const list = ref([]);
const list1 = ref([]);
const list2 = ref([]);
// 下拉刷新状态 false 关闭 true 开启
const isTriggered = ref(false);
const isTriggered1 = ref(false);
const isTriggered2 = ref(false);

// 数据是否加载完毕 false 未加载完成 true全部已加载完
const hasMore = ref(false);
const hasMore1 = ref(false);
const hasMore2 = ref(false);

const page = ref({
	page: 0,
	pageSize: 5,
	status: 1
});
const page1 = ref({
	page: 0,
	pageSize: 5,
	status: 2
});
const page2 = ref({
	page: 0,
	pageSize: 5,
	status: 6
});
const getData = async () => {
	page.value.page++;
	let res = await getTask(page.value);
	// console.log(res);
	if (page.value.page == 1) list.value = [];
	list.value = [...list.value, ...(res.data.items || [])];
	hasMore.value = page.value.page == res.data.pages;
};
getData();
const getData1 = async () => {
	page1.value.page++;
	let res = await getTask(page1.value);
	// console.log(res);
	if (page1.value.page == 1) list1.value = [];
	list1.value = [...list1.value, ...(res.data.items || [])];
	hasMore1.value = page1.value.page == res.data.pages;
};
getData1();
const getData2 = async () => {
	page2.value.page++;
	let res = await getTask(page2.value);
	// console.log(res);
	if (page2.value.page == 1) list2.value = [];
	list2.value = [...list2.value, ...(res.data.items || [])];
	hasMore2.value = page2.value.page == res.data.pages;
};
getData2();

// 监听上拉加载
const onScrollToLower = () => {
	if (hasMore.value) return;
	getData();
};
const onScrollToLower1 = () => {
	if (hasMore1.value) return;
	getData1();
};
const onScrollToLower2 = () => {
	if (hasMore2.value) return;
	getData2();
};

// 监听下拉刷新
const onRefresh = async () => {
	isTriggered.value = true;
	page.value.page = 0;
	await getData();
	isTriggered.value = false;
};
const onRefresh1 = async () => {
	isTriggered1.value = true;
	page1.value.page = 0;
	await getData1();
	isTriggered1.value = false;
};
const onRefresh2 = async () => {
	isTriggered2.value = true;
	page2.value.page = 0;
	await getData2();
	isTriggered2.value = false;
};
</script>

<style lang="scss">
.task-page {
	display: flex;
	flex-direction: column;
	height: calc(100vh - 98rpx);
	background-color: #f4f4f4;
	.scroll-view-wrapper {
		padding-bottom: 30rpx;
		height: 100%;
		.task-blank {
			text-align: center;
			padding: 30rpx 0 130rpx;
		}
		.Notice-top {
			width: 690rpx;
			height: 64rpx;
			padding: 40rpx 30rpx;
			background-color: white;
			::v-deep.is-input-border {
				border: none !important;
				background-color: #f4f4f4 !important;
			}
			.search {
				background: #f4f4f4;
				border-radius: 32rpx;

				border-radius: 60rpx;
				overflow: hidden;
			}
		}
	}
}
.inv-h-w {
	background-color: #ffffff;
	height: 100upx;
	display: flex;
	// justify-content: space-around;
}
.inv-h {
	font-weight: 500;
	font-size: 28rpx;
	color: #818181;
	text-align: center;
	height: 80rpx;
	line-height: 100upx;
	margin-left: 72rpx;
}
.inv-h-se {
	font-weight: 600;
	font-size: 32rpx;
	color: #2a2929;
	border-bottom: 8rpx solid #ef4f3f;
}
</style>
