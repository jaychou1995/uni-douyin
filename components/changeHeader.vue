<template>
	<view>
		<view class="changeHeader">
			<navigator class="iconfont iconchahao left" open-type="navigateBack"></navigator>
			<view class="title">切换城市</view>
		</view>
		<view class="ground"></view>
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
.changeHeader{
	width: 100%;
	height: 160upx;
	line-height: 80px;
	/* #ifdef H5 */
	height: 80upx;
	line-height: 40px;
	/* #endif */
	position:fixed;
	top:0;
	left:0;
	margin: 0 auto;
	background: #000000;
}
.ground{
	width: 100%;
	height: 160upx;
	/* #ifdef H5 */
	height: 80upx;
	/* #endif */
}
.left{
	position: absolute;
	top:0;
	left:15px;
	height: 160upx;
	line-height: 80px;
	/* #ifdef H5 */
	height: 80upx;
	line-height: 40px;
	/* #endif */
	color: #AAAAAA;
	font-size: 18px;
}
.title{
	font-size:17px;
	text-align: center;
	color: #FFFFFF;
}
</style>
