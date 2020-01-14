<template>
	<view class="list-right">
		<view class="autor-img">
			<image class="img" src="/static/img/author.jpg" mode=""></image>
			<view class="iconfont iconjiahao add-follow" v-show="isFollow" @click="hideDollow"></view>
		</view>
		<view class="iconfont iconaixin right-box" :style="color" @click="up"></view>
		<view class="number">123</view>
		<view class="iconfont icontubiaozhizuo- right-box"></view>
		<view class="number">123</view>
		<view class="iconfont iconfenxiang right-box"></view>
		<view class="number">123</view>
		<view class="around">
			<image class="img-music" src="/static/img/2-1.jpg"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isFollow:true,
				color:''
			};
		},
		methods:{
			hideDollow(){
				this.isFollow = false
			},
			up(){
				this.color = this.color === '' ? 'color: red;' : ''
			},
			changeA(){
				this.color = 'color: red;'
			}
		}
	}
</script>

<style>
	.list-right{
		color: #FFFFFF;
		width: 100upx;
		margin: 0 auto;
	}
	.autor-img{
		height: 100upx;
		width: 100upx;
		margin-bottom: 40upx;
		position: relative;
	}
	.img{
		border-radius: 50%;
		height: 100upx;
		width: 100upx;
		border: 1px solid #fff;
	}
	.around{
		height: 80upx;
		width: 80upx;
		margin: 30upx auto 0 auto;
		animation: rotate 1.5s linear 0.2s infinite;
	}
	.img-music{
		border-radius: 50%;
		height: 80upx;
		width: 80upx;
	}
	.right-box{
		width: 100upx;
		height: 80upx;
		margin-top: 20upx;
		text-align: center;
		line-height: 80upx;
		font-size: 33px;
	}
	.number{
		font-size: 10px;
		text-align: center;
	}
	.add-follow{
		width: 36upx;
		height: 36upx;
		border-radius: 50%;
		background-color: red;
		position: absolute;
		bottom: -9px;
		left: 50%;
		transform: translateX(-50%);
		text-align: center;
		line-height: 36upx;
		font-size: 12px;
		transition: 1s;
	}
	
	@keyframes rotate{
		0%{
			transform: rotate(0deg);
		}
		100%{
			transform: rotate(360deg);
		}
	}
	
</style>
