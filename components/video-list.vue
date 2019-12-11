<template>
	<view class="videoList">
		{{videos}}
		<view class="swiper-box">
			<swiper class="swiper" :vertical="true">
				<swiper-item v-for="(item,index) in list" :key="item.id">
					<view class="swiper-item">
						<video-player :video="item"></video-player>
					</view>
				</swiper-item>
				<!-- <swiper-item>
					<view class="swiper-item">
						<video-player></video-player>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<video-player></video-player>
					</view>
				</swiper-item> -->
			</swiper>
		</view>
	</view>
</template>

<script>
	
	import videoPlayer from './videoPlayer.vue'
	
	export default {
		props:{
			list:{
				type:Array,
				default:[]
			}
		},
		components:{
			videoPlayer
		},
		data() {
			return {
				videos:''
			};
		},
		mounted() {
			// console.log(this.list );
			// this.list = this.videos
			// console.log(this.videos);
		}
	}
</script>

<style scoped>
	.videoList,.swiper-box,.swiper,swiper-item,.swiper-item{
		height: 100%;
		width: 100%;
	}
/* 	.swiper-box{
		height: 100%;
		width: 100%;
	}
	.swiper{
		width: 100%;
		height: 100%;
	}
	swiper-item{
		width: 100%;
		height: 100%;
	}
	.swiper-item{
		width: 100%;
		height: 100%;
	} */
/* 	.videoList{
		height: 100%;
		width: 100%;
	} */
</style>
