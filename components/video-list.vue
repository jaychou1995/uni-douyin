<template>
	<view class="videoList">
		{{videos}}
		<view class="swiper-box">
			<swiper class="swiper" :vertical="true" @change="changeVideo" @touchstart="touchStart" @touchend="touchEnd">
				<swiper-item v-for="(item,index) in list" :key="item.id">
					<view class="swiper-item">
						<video-player @changeClick="changeClick" ref="player" :video="item" :index="index"></video-player>
					</view>
					<view class="left-box">
						<list-left></list-left>
					</view>
					<view class="right-box">
						<list-right ref="right"></list-right>
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
	import listLeft from './listLeft.vue'
	import listRight from './listRight.vue'
	
	var timer = null;
	export default {
		props:{
			list:{
				type:Array,
				default:[]
			}
		},
		components:{
			videoPlayer,listLeft,listRight
		},
		data() {
			return {
				videos:'',
				pageStartY:0,
				pageEndY:0,
				page:0
			};
		},
		mounted() {
			
		},
		methods:{
			changeVideo(e){
				clearInterval(timer)
				this.page = e.detail.current
				timer = setTimeout(()=>{
					if(this.pageStartY > this.pageEndY){
						console.log('向上滑动');
						this.$refs.player[this.page - 1].pause()
						this.$refs.player[this.page].player()
						
						this.pageStartY = 0;  //防止滑动意外
						this.pageEndY = 0;
					}else if(this.pageStartY < this.pageEndY){
						console.log('向下滑动');
						this.$refs.player[this.page + 1].pause()
						this.$refs.player[this.page].player()
						
						this.pageStartY = 0;  //防止滑动意外
						this.pageEndY = 0;
					}
				},10)

			},
			touchStart(e){
				this.pageStartY = e.changedTouches[0].pageY
			},
			touchEnd(e){
				this.pageEndY = e.changedTouches[0].pageY
			},
			changeClick(){
				this.$refs.right[this.page].changeA()
			}
		}
	}
</script>

<style scoped>
	.videoList,.swiper-box,.swiper,swiper-item,.swiper-item{
		height: 100%;
		width: 100%;
	}
	.left-box{
		z-index: 20;
		position: absolute;
		left: 20upx;
		bottom: 100upx;
	}
	.right-box{
		z-index: 20;
		position: absolute;
		right: 20upx;
		bottom: 100upx;
	}
</style>
