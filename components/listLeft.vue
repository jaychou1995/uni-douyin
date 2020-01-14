<template>
	<view class="list-left-on">
		<view class="author">周杰伦</view>
		<view class="title">周杰伦七里香周杰伦七里香周杰伦七里香周杰伦七里香周杰伦七里香周杰伦七里香周杰伦七里香周杰伦七里香周杰伦七里香周杰伦七里香周杰伦七里香周杰伦七里香周杰伦七里香周杰伦七里香</view>
		<view class="box">
			<view class="music">七里香七里香七里香七里香</view>
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
	.list-left-on{
		color: #fff;
		height: 300upx;
		margin-left: 20upx;
		width: 350upx;
		position: relative;
	}
	.author{
		height: 70upx;
		line-height: 35px;
		font-size: 15px;
	}
	.title{
		width: 100%;
		line-height: 20px;
		font-size: 12px;
		overflow: hidden;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		display: -webkit-box;
	}
	.box{
		width: 200upx;
		overflow: hidden;
		position: absolute;
		bottom: 6upx;
		left: 0;
	}
	.music{
		width: 280upx;
		height: 70upx;
		line-height: 35px;
		font-size: 12px;
		animation: music 4s linear 0.2s infinite;
	}
	
	@keyframes music{
		0%{
			transform: translate3d(80%,0,0)
		}
		100%{
			transform: translate3d(-80%,0,0)
		}
	}
	
</style>
