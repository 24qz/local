<template>
	<view class="msg-page">
		<view class="inv-h-w">
			<view :class="['inv-h', current == 0 ? 'inv-h-se' : '']" @click="current = 0">公告</view>
			<view :class="['inv-h', current == 1 ? 'inv-h-se' : '']" @click="current = 1">任务通知</view>
		</view>

		<scroll-view
			v-if="list.length !== 0"
			:refresher-triggered="isTriggered"
			@refresherrefresh="onRefresh"
			refresher-enabled
			@scrolltolower="onScrollToLower"
			scroll-y="true"
			class="scroll-view"
		>
			<view class="Notice-top" v-show="current == 0">
				<view class="top">
					<text style="margin-right: 20rpx" class="iconfont icon-broom"></text>
					<text @click="onAllRead">全部已读</text>
				</view>
				<view class="nav">
					<uni-list :border="false">
						<uni-list-item @click="toDetail(item)" clickable v-for="(item, index) in list" :key="index" ellipsis="1" :title="item.title">
							<template v-slot:header>
								<view class="slot-box" v-if="item.isRead == 0">
									<text class="iconfont icon-dot"></text>
								</view>
							</template>
							<template v-slot:footer>
								<uni-dateformat class="rightTitle" :date="item.created" format="MM-dd hh:mm"></uni-dateformat>
							</template>
						</uni-list-item>
					</uni-list>
				</view>
				<!-- <view class="noMore" v-if="hasMore">没有更多了</view> -->
			</view>
		</scroll-view>

		<scroll-view
			v-show="current == 1"
			:refresher-triggered="isTriggered1"
			@refresherrefresh="onRefresh1"
			refresher-enabled
			@scrolltolower="onScrollToLower1"
			scroll-y="true"
			class="scroll-view"
		>
			<view class="task">
				<view class="top">
					<text style="margin-right: 20rpx" class="iconfont icon-broom"></text>
					<text @click="onAllRead1">全部已读</text>
				</view>
				<taskItem v-for="(item, index) in TaskList" :key="index" :item="item" />
				<view class="noMore" v-if="hasMore">没有更多了</view>
			</view>
		</scroll-view>
		<empty v-if="list.length == 0" />
	</view>
</template>

<script setup>
import empty from '@/components/empty.vue';
import taskItem from '@/components/taskItem.vue';
import { myMsg, myAllRead } from '@/api/api.js';
import { ref } from 'vue';
const list = ref([]);
const TaskList = ref([]);
const isTriggered = ref(false);
const isTriggered1 = ref(false);
// 判断请求的数据是否全部加载完成, false表示未加载完, true加载完成
const hasMore = ref(false);
const hasMore1 = ref(false);
const page = ref({
	contentType: 200,
	page: 0,
	pageSize: 5
});
const page1 = ref({
	contentType: 201,
	page: 0,
	pageSize: 5
});

const current = ref(0);

const getdata = async () => {
	try {
		page.value.page += 1;
		let res = await myMsg(page.value);
		if (page.value.page === 1) list.value = [];
		list.value = [...list.value, ...(res.data.items || [])];
		console.log(page.value.page);
		hasMore.value = page.value.page == res.data.pages;
	} catch (e) {
		//TODO handle the exception
	}
};
getdata();

const getTaskList = async () => {
	page1.value.page += 1;
	let res = await myMsg(page1.value);
	if (page1.value.page === 1) TaskList.value = [];
	TaskList.value = [...TaskList.value, ...(res.data.items || [])];
	console.log(page1.value.page);
	hasMore1.value = page1.value.page == res.data.pages;
};
getTaskList();

const onRefresh = async () => {
	isTriggered.value = true;
	page.value.page = 0;
	await getdata();
	isTriggered.value = false;
};
const onRefresh1 = async () => {
	isTriggered1.value = true;
	page1.value.page = 0;
	await getTaskList();
	isTriggered1.value = false;
};

const onScrollToLower = (e) => {
	// console.log(e);
	if (hasMore.value) return;
	getdata();
};

const onScrollToLower1 = (e) => {
	// console.log(e);
	if (hasMore1.value) return;
	getTaskList();
};

const onAllRead = async () => {
	let res = await myAllRead(200);
	// console.log(res);
	onRefresh();
};
const onAllRead1 = async () => {
	let res = await myAllRead(201);
	// console.log(res);
	onRefresh1();
};

const toDetail = (item) => {
	console.log(11111);

	uni.navigateTo({
		url: `/pages/message/Notice/index?content=${item.content}&time=${item.created}`
	});
};
</script>

<style lang="scss">
.msg-page {
	display: flex;
	flex-direction: column;
	height: calc(100vh - 94px);
	background-color: #f4f4f4;
	.scroll-view {
		// height: 100%;
		overflow: hidden;
	}
	.Notice-top {
		font-size: 28rpx;

		.top {
			display: flex;
			padding: 0 35rpx;
			align-items: center;
			color: #818181;
			height: 120rpx;
			background-color: #f4f4f4;
		}
		.nav {
			.rightTitle {
				font-weight: 400;
				font-size: 24rpx;
				color: #818181;
			}
			background: #ffffff;
			::v-deep.uni-list-item__container {
				padding: 22px 15px;
			}
			::v-deep .uni-list-item__content-title {
				font-weight: 400;
				font-size: 28rpx;
				color: #2a2929;
			}
		}
	}
	.task {
		.top {
			font-size: 28rpx;
			display: flex;
			padding: 0 35rpx;
			align-items: center;
			color: #818181;
			height: 120rpx;
			background-color: #f4f4f4;
		}
	}
	.noMore {
		text-align: center;
		padding: 0rpx 0 40rpx;
	}
}
.inv-h-w {
	background-color: #ffffff;
	height: 100upx;
	display: flex;
	justify-content: space-around;
}
.inv-h {
	font-weight: 500;
	font-size: 28rpx;
	color: #818181;
	text-align: center;
	height: 80rpx;
	line-height: 100upx;
}
.inv-h-se {
	color: #2a2929;
	border-bottom: 8rpx solid #ef4f3f;
}
</style>
