<template>
	<view class="picker-page">
		<view class="example-body">
			<uni-file-picker limit="3" title="请拍照上传回单凭证" v-model="receiptPictrues"></uni-file-picker>
			<view style="margin-top: 30rpx">
				<uni-file-picker limit="3" title="请拍照上传货品照片" v-model="goodsPictrues"></uni-file-picker>
			</view>
		</view>
		<button :class="{ disabled: !disabled }" class="btn" @click="onbtn" :disabled="!disabled">提货</button>
	</view>
</template>

<script setup>
import { getDelivery } from '@/api/taskApi.js';
import { computed, ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';

const id = ref('');
// v-mode绑定的是上传的凭证图片
const receiptPictrues = ref([]);

// v-mode绑定的是上传的交付图片
const goodsPictrues = ref([]);

onLoad((e) => {
	// console.log(e);
	id.value = e.id;
});

const deliverPictureList = computed(() => {
	return receiptPictrues.value.map((item) => {
		return {
			url: item.url
		};
	});
});

const certificatePictureList = computed(() => {
	return goodsPictrues.value.map((item) => {
		return {
			url: item.url
		};
	});
});

const disabled = computed(() => {
	return deliverPictureList.value.length > 0 && certificatePictureList.value.length > 0;
});

const onbtn = async () => {
	let data = {
		cargoPickUpPictureList: deliverPictureList.value,
		id: id.value,
		cargoPictureList: certificatePictureList.value
	};
	let res = await getDelivery(data);
	console.log(res);
	uni.reLaunch({
		url: '/pages/task/index'
	});
};
</script>

<style lang="scss">
.picker-page {
	height: calc(100vh - 85rpx);
	overflow: hidden;
	background-color: #f4f4f4;
	.example-body {
		width: 690rpx;
		padding: 28rpx 40rpx;
		box-sizing: border-box;
		height: 760rpx;
		margin: 30rpx auto 0;
		background: #ffffff;
		border-radius: 20rpx;
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
	::v-deep.uni-file-picker__header {
		padding-bottom: 40rpx;
	}
	.btn {
		width: 414rpx;
		// height: 100rpx;
		color: white;
		margin-top: 50rpx;
		background: #ee4f3e;
		border-radius: 50rpx;
	}
	.disabled {
		background: #fadcd9;
	}
	uni-button:after {
		border: none !important;
	}
}
</style>
