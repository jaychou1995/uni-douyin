<template>
	<view class="cityContent">
		<view class="conlation">
			<view class="iconfont icondingwei conlation-left">
				自动定位：南京
			</view>
			<view class="conlation-right">
				切换<text class="iconfont iconchangyongicon-"></text>
			</view>
		</view>
		<view class="video-list">
			<view class="item">
				<view class="video">
					<video class="video-in" src="/static/video/3-1.mp4" controls></video>
				</view>
				<view class="img">
					<image class="image-box" src="/static/img/author.jpg"></image>
				</view>
			</view>
			
			<view class="item">
				<view class="video">
					<video class="video-in" src="/static/video/3-1.mp4" controls></video>
				</view>
				<view class="img">
					<image class="image-box" src="/static/img/author.jpg"></image>
				</view>
			</view>
			
			<view class="item">
				<view class="video">
					<video class="video-in" src="/static/video/3-1.mp4" controls></video>
				</view>
				<view class="img">
					<image class="image-box" src="/static/img/author.jpg"></image>
				</view>
			</view>
			
		</view>
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

<style scoped>
	.cityContent{
		width: 100%;
		background-color: #000000;
		color: #FFFFFF;
	}
	.conlation{
		width: 100%;
		height: 80upx;
		padding-top: 140upx;
		overflow: hidden;
		color: #aaaaaa;
	}
	.conlation-left{
		float: left;
		font-size: 13px;
		padding-left: 30upx;
	}
	.conlation-right{
		float: right;
		font-size: 13px;
		padding-right: 30upx;
	}
	.video-list{
		width: 100%;
		overflow: auto;
		background-color: #000000;
		display: flex;
		flex-wrap: wrap;
	}
	.item{
		width: 50%;
		position: relative;
		margin-top: 20upx;
	}
	.video{
		width: 92%;
		margin-left: 4%;
		height: 600upx;
	}
	.video-in{
		width: 100%;
		height: 100%;
	}
	.img{
		position: absolute;
		bottom: 10px;
		right: 15px;
	}
	.image-box{
		width: 60upx;
		height: 60upx;
		border-radius: 50%;
	}
</style>
