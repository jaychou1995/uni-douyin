<template>
	<view>
		<view class="firstNav">
			<view class="iconfont iconxiangji icon-foll"><text class="icon-val">随拍</text></view>
			<view class="middle">
				<navigator open-type="switchTab" url="/pages/follow/follow" class="text" :style="follow">关注</navigator>
				<navigator open-type="switchTab" url="/pages/friend/friend" class="text" :style="friend">好友</navigator>
			</view>
		</view>
		<view class="ground"></view>
	</view>
</template>

<script>
	export default {
		props:{
			page:{
				type:String,
				default:''
			}
		},
		data(){
			return{
				// active:true
				follow:'',
				friend:''
			}
		},
		methods:{
			// select(url){
			// 	console.log(url);
			// 	if(url == 'follow'){
			// 		this.active = true
			// 	}else if(url == 'friend'){
			// 		this.active = false
			// 	}
			// }
		},
		mounted() {
			
			if(this.page == 'follow'){
				this.follow = 'border-bottom:2px solid #F0AD4E'
			}else if(this.page == 'friend'){
				this.friend = 'border-bottom:2px solid #F0AD4E'
			}
		}
	}
</script>

<style scoped>
	.ground{
		width: 100%;
		height: 120upx;
	}
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
	.icon-foll{
		position: absolute;
		left: 0;
		top: 0;
		color: #fff;
		width: 20%;
		text-align: center;
		font-size: 16px;
	}
	.icon-val{
		font-size: 16px;
		margin-left: 20upx;
	}
	.middle{
		text-align: center;
	}
	.text{
		display: inline;
		color: #fff;
		margin: 0 10px;
	}
	.active{
		border-bottom: 2px solid #F0AD4E
	}
</style>
