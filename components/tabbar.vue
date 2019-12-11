<template>
	<view class="tabbar">
		<view class="tabbar-item">
			首页
		</view>
		<view class="tabbar-item">
			关注
		</view>
		<view class="tabbar-item">
			<view class="iconfont iconjiahao icon-box">
				
			</view>
		</view>
		<view class="tabbar-item">
			消息
		</view>
		<view class="tabbar-item">
			我的
		</view>
	</view>
</template>

<script>
</script>

<style scoped>
	.tabbar{
		height: 50px;
		width: 100%;
		position: fixed;
		left: 0;
		bottom: 0;
		display: flex;
		z-index: 999;
	}
	.tabbar-item{
		flex: 1;
		text-align: center;
		color: #fff;
		height: 50px;
		line-height: 50px;
		font-size: 20px;
	}
	.icon-box{
		width: 60%;
		height: 30px;
		background-color: #fff;
		color: #000000;
		margin: 10px 20%;
		line-height: 30px;
		border-radius: 5px;
		font-size: 15px
	}
</style>
