<template>
	<view class="followPlayer">
		<video id="myFollowPlay" class="video" objectFit="cover" :src="'http://127.0.0.1:8088/static/video/'+item.src" controls loop="true"></video>
	</view>
</template>

<script>
	export default {
		props:['item'],
		data() {
			return {
				videoContext:''
			};
		},
		created() {
			
		},
		methods:{
			play(){
				this.videoContext = uni.createVideoContext('myFollowPlay',this)
				// console.log(this.videoContext.pageVm);
				this.videoContext.play()
			},
			pause(){
				this.videoContext = uni.createVideoContext('myFollowPlay',this)
				this.videoContext.pause()
			}
		}
	}
</script>

<style>
.followPlayer{
	height: 100%;
	width: 100%;
}
.video{
	width: 80%;
	height: 100%;
	z-index: 19;
}
</style>
