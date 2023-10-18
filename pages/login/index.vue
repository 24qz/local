<template>
	<view class="content">
		<view class="top">
			<view class="title">{{ titleFlag ? '手机号登录' : '账号登录' }}</view>
			<view style="display: flex; align-items: center">
				<text class="ctitle" @click="onPhone">{{ titleFlag ? '账号登录' : '手机号登录' }}</text>
				<text class="iconfont iconStyle icon-caret"></text>
			</view>
		</view>

		<view class="nav">
			<uni-forms v-if="!titleFlag" ref="onformData" :modelValue="formData" :rules="rules">
				<uni-forms-item name="account" style="border-bottom: 2rpx solid #f9f9f9">
					<input type="text" v-model="formData.account" placeholder="请输入账号" />
				</uni-forms-item>
				<uni-forms-item name="password" style="border-bottom: 2rpx solid #f9f9f9">
					<view class="uni-form-item uni-column">
						<view class="uni-input-wrapper">
							<input class="uni-input" placeholder="请输入密码" :value="formData.password" :password="showpwd" @input="clearInput" />
							<text class="iconfont icon-clear clear" v-if="showClearIcon" @click="clearIcon"></text>
							<text class="iconfont icon-close eye" v-if="showpwd" @click="showpwd = false"></text>
							<text class="iconfont icon-eye eye" v-else @click="showpwd = true"></text>
						</view>
					</view>
				</uni-forms-item>
			</uni-forms>

			<button :disabled="flag" :class="flag ? 'disabled' : ''" class="loginBtn" @click="onLogin">登录</button>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import { login } from '@/api/api.js';
import { useCounterStore } from '@/stores/counter.js';
const store = useCounterStore();
const flag = ref(true);
const showClearIcon = ref(false);
const eyeflag = ref(true);
const showpwd = ref(true);
const titleFlag = ref(false);
const title = ref('手机号登录');
const ctitle = ref('账号登录');
const formData = ref({
	account: 'yangMr',
	password: ''
});
const onformData = ref();

const rules = {
	account: {
		rules: [
			{ required: true, errorMessage: '请填写账号' },
			{
				pattern: /^[a-zA-Z0-9]{6,8}$/,
				errorMessage: '登录账号格式不正确'
			}
		]
	},
	password: {
		rules: [
			{ required: true, errorMessage: '请填写密码' },
			{
				pattern: /^\d{6}$/,
				errorMessage: '登录密码格式不正确'
			}
		]
	}
};

const clearInput = (event) => {
	console.log(event.detail.cursor);
	formData.value.password = event.detail.value;
	if (event.detail.cursor > 0) {
		showClearIcon.value = true;
		flag.value = false;
	} else {
		showClearIcon.value = false;
		flag.value = true;
	}
};

const clearIcon = (e) => {
	formData.value.password = '';
	showClearIcon.value = false;
};

const onLogin = async () => {
	console.log(11111);
	try {
		const formData = await onformData.value.validate();
		let res = await login(formData);
		flag.value = false;
		store.count = res.data;
		uni.switchTab({
			url: '/pages/task/index'
		});
		// console.log(res);
	} catch (e) {
		//TODO handle the exception
		// console.log(e);
	}
};

const onPhone = async () => {
	titleFlag.value = !titleFlag.value;
	if (!titleFlag.value) {
		// #ifdef APP-PLUS
		const { authResult } = await uni.login({
			provider: 'univerify',
			univerifyStyle: {
				fullScreen: true
			}
		});
		uniCloud.callFunction({
			name: 'uni-login',
			data: authResult,
			success({ result }) {
				console.log('res', result);
				if (result.code == 200) {
					console.log('123');

					// 向我们自己的后端发起一个登录请求，
					// uni.switchTab({
					// 	url: '/pages/task/index',
					// })
				}
			},
			fail(err) {
				console.log(err);
			}
		});
		// #endif

		// #ifndef APP-PLUS
		tabIndex.value = Math.abs(tabIndex.value - 1);
		// #endif
	}
};
</script>

<style lang="scss">
.content {
	.top {
		display: flex;
		justify-content: space-between;
		padding: 50rpx 17rpx 45.5rpx 32rpx;
		.title {
			width: 120px;
			height: 33px;
			font-family: PingFangSC-SNaNpxibold;
			font-weight: 600;
			font-size: 24px;
			color: #2a2929;
			letter-spacing: 0;
		}
		.ctitle {
			// width: 64px;
			height: 22px;
			font-family: PingFangSC-Medium;
			font-weight: 500;
			font-size: 16px;
			color: #ef4f3f;
			letter-spacing: 0;
			text-align: right;
			margin-right: 17rpx;
		}
		.iconStyle {
			color: #ef4f3f;
			font-size: 12px;
		}
	}

	.nav {
		padding: 0 33rpx;
		.loginBtn {
			width: 349px;
			color: white;
			height: 50px;
			background: #ef4f3f;
			border-radius: 24.77px;
		}
		.disabled {
			background-color: #f9dcd8;
		}
		.uni-input-wrapper {
			position: relative;
			.clear {
				position: absolute;
				top: 0;
				right: 60rpx;
			}
			.eye {
				position: absolute;
				top: 0;
				right: 20rpx;
			}
		}
	}
}
</style>
