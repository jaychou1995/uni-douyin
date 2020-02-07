<template>
	<view class="tabbar" :style="tabbar_bg">
		<navigator open-type="switchTab" url="/pages/index/index" class="tabbar-item">
			首页
		</navigator>
		<navigator open-type="switchTab" url="/pages/follow/follow" class="tabbar-item">
			关注
		</navigator>
		<view class="tabbar-item">
			<view class="iconfont iconjiahao icon-box">
				
			</view>
		</view>
		<navigator open-type="switchTab" url="/pages/news/news" class="tabbar-item">
			消息
		</navigator>
		<navigator open-type="switchTab" url="/pages/personal/personal" class="tabbar-item">
			我的
		</navigator>
	</view>
</template>

<script>
	export default{
		props:{
			bgColor:{
				type:String,
				default:''
			}
		},
		data(){
			return{
				tabbar_bg:''
			}
		},
		mounted() {
			if(this.bgColor.length>0){
				this.tabbar_bg = 'background-color: '+this.bgColor+';'
			}
		}
	}
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
