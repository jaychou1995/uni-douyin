<template>
	<view class="firstNav">
		<view class="iconfont iconsousuo icon-search"></view>
		<view class="middle">
			<navigator open-type="switchTab" url="/pages/index/index" class="text">推荐</navigator>
			<navigator  url="/pages/city/city" class="text">同城</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		
	}
</script>

<style scoped>
	.firstNav{
		width: 100%;
		height: 35px;
		line-height: 35px;
		position: fixed;
		top: 25px;
		/* #ifdef H5 */
		top: 0;
		/* #endif */
		left: 0;
		z-index: 999;
	}
	.icon-search{
		position: absolute;
		left: 0;
		top: 0;
		color: #fff;
		width: 20%;
		text-align: center;
		font-size: 20px;
	}
	.middle{
		text-align: center;
	}
	.text{
		display: inline;
		color: #fff;
		margin: 0 10px;
	}
</style>
