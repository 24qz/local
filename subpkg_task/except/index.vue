<template>
	<view class="except-page">
		<view class="top">
			<uni-list :border="false">
				<uni-list-item showArrow title="异常时间" rightText="请选择">
					<template v-slot:footer>
						<uni-datetime-picker v-model="exceptionPicker">
							<view class="picker-value">
								<uni-dateformat v-if="exceptionPicker" :date="exceptionTime" format="yyyy.MM.dd hh:mm"></uni-dateformat>
								<view class="" v-else>请选择</view>
							</view>
						</uni-datetime-picker>
					</template>
				</uni-list-item>
				<uni-list-item clickable @click="onAddress" showArrow title="上报位置" :rightText="exceptionPlace ? exceptionPlace : '请选择'"></uni-list-item>
				<uni-list-item clickable @click="openPopup" showArrow title="异常类型" :right-text="exceptionType || '请选择'" />

				<uni-list-item class="child">
					<template v-slot:header>
						<view style="font-size: 14px">异常描述</view>
					</template>
					<template v-slot:body>
						<view>
							<textarea maxlength="50" v-model="exceptionDescribe" placeholder="请输入异常描述" />
						</view>
					</template>
				</uni-list-item>
			</uni-list>
		</view>

		<view class="bot">
			<view style="margin-bottom: 30rpx; font-size: 14px">上传图片 (最多6张)</view>
			<uni-file-picker v-model="exceptionPictures" file-extname="jpg,webp,gif,png" limit="3"></uni-file-picker>
		</view>

		<view class="botbar">
			<button @click="onSubmitForm">提交</button>
		</view>

		<uni-popup class="pop" ref="popup" type="bottom">
			<view style="background-color: #fff; min-height: 500rpx; border-top-left-radius: 50rpx; border-top-right-radius: 50rpx">
				<view style="display: flex; justify-content: space-between; align-items: center">
					<view class="title">选择类型</view>
					<view style="color: transparent; padding-right: 44rpx" class="iconfont icon-clear"></view>
				</view>
				<uni-list>
					<uni-list-item v-for="(item, index) in exceptionTypes" :key="index" :title="item">
						<template v-slot:footer>
							<checkbox-group @change="onCheckboxChange">
								<checkbox round :value="item" />
								<text></text>
							</checkbox-group>
						</template>
					</uni-list-item>
				</uni-list>
				<uni-list-item>
					<template v-slot:body>
						<button @click="onPopupConfirm" class="button" type="default">确定</button>
					</template>
				</uni-list-item>
			</view>
		</uni-popup>
	</view>
</template>

<script setup>
import { reportException } from '@/api/taskApi.js';
import { onLoad } from '@dcloudio/uni-app';
import { ref, computed } from 'vue';
// 异常时间
const exceptionPicker = ref('');
// 运输任务id
const transportTaskId = ref('');
//异常描述
const exceptionDescribe = ref('');
// 异常类型
const exceptionType = ref('');
const popup = ref('popup');
const exceptionTypes = ['发动机启动困难', '不着车，漏油', '照明失灵', '排烟异常、温度异常', '其他问题'];

// 上报异常位置
const exceptionPlace = ref('');
const exceptionTime = computed(() => {
	return exceptionPicker.value;
});

// 初始化加载
onLoad((query) => {
	transportTaskId.value = query.id;
});

const onAddress = async () => {
	let { address } = await uni.chooseLocation({});
	console.log(address);
	exceptionPlace.value = address;
};

const openPopup = () => {
	popup.value.open();
};

const tempException = [];
const onCheckboxChange = (e) => {
	tempException.push(e.detail.value[0]);
	console.log('tempException', tempException);
};

const onPopupConfirm = () => {
	// 关闭弹出层
	popup.value.close();
	exceptionType.value = tempException.join('|');
};

// 异常图片 (可选) 数组
const exceptionPictures = ref([]);

// 过滤出图片的url地址
const exceptionImagesList = computed(() => {
	return exceptionPictures.value.map((item) => {
		return {
			url: item.url
		};
	});
});

// 提交异常方法
const onSubmitForm = async () => {
	try {
		const data = {
			transportTaskId: transportTaskId.value,
			exceptionTime: exceptionTime.value,
			exceptionPlace: exceptionPlace.value,
			exceptionType: exceptionType.value,
			exceptionImagesList: exceptionImagesList.value
		};

		const res = await reportException(data);

		uni.reLaunch({
			url: '/pages/task/index'
		});
	} catch (e) {
		console.log(e);
	}
};
</script>

<style lang="scss">
.except-page {
	overflow: hidden;
	height: calc(100vh - 85rpx);
	background-color: #f4f4f4;
	.top {
		width: 690rpx;
		height: 780rpx;
		background: #ffffff;
		margin: 30rpx auto;
		overflow: hidden;
		border-radius: 20rpx;
		textarea {
			background-color: #f4f4f4;
			width: 630rpx;
			border-radius: 10rpx;
			padding: 20rpx;
			box-sizing: border-box;
			margin-top: 30rpx;
		}
	}
	.pop {
		.title {
			padding: 40rpx 43rpx;
		}
		.button {
			width: 400rpx;
			color: white;
			height: 90rpx;
			background: #ef4f3f;
			border-radius: 45rpx;
		}
		::v-deep.uni-list-item__container {
			padding: 1.25rem 16px 1.25rem 0.9375rem;
		}
		::v-deep.uni-checkbox-input {
			border-radius: 50%;
		}
	}
	.bot {
		padding: 30rpx;
		box-sizing: border-box;
		margin: 0 auto;
		width: 690rpx;
		height: 342rpx;
		background: #ffffff;
		border-radius: 20rpx;
		background-color: white;
	}
	.botbar {
		position: fixed;
		bottom: 0;
		left: 0;
		text-align: center;

		width: 750rpx;
		height: 140rpx;
		background: #ffffff;
		box-shadow: 0 4rpx 16rpx 0 #a2a2a240;
		button {
			width: 414rpx;
			color: white;
			border: none !important;
			// height: 100rpx;
			margin-top: 20rpx;
			background: #ef4f3f;
			border-radius: 50rpx;
		}
		.red {
			background-color: #ef4f3f;
		}
		uni-button:after {
			border: none !important;
		}
	}
}

.picker-value {
	width: 360rpx;
	color: #818181;
	text-align: right;
	font-size: 28rpx;
}

::v-deep.uni-list-item__container {
	padding: 40rpx 0rpx 40rpx 30rpx;
}
::v-deep.uni-date-editor {
	text-align: right !important;
}
::v-deep.uni-list-item__extra-text {
	font-size: 28rpx !important;
}
::v-deep.uni-list-item__extra {
	width: 50%;
}
::v-deep.file-picker__box-content {
	border: none !important;
	background: #f2f2f2;
}
::v-deep.icon-add {
	width: 33px;
	height: 2px;
	background-color: #818181;
}
.child {
	::v-deep.uni-list-item__container {
		display: block !important;
	}
}
</style>
