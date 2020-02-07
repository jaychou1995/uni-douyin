<template>
	<view class="newsNav">
		<view class="title">消息</view>
	</view>
</template>

<script>
	
	
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style>
.newsNav{
	width: 100%;
	height: 80px;
	/* #ifdef H5 */
	height: 50px;
	/* #endif */
}
.title{
	width: 100%;
	text-align: center;
	height: 80px;
	line-height: 80px;
	/* #ifdef H5 */
	height: 50px;
	line-height: 50px;
	/* #endif */
	font-size: 20px;
	color: #FFFFFF;
}
</style>
