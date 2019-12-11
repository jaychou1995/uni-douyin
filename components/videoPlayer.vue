<template>
	<view class="videoPlayer">
		<video class="video" :src="video.src" 
		:loop="true"
		:controls="false"
		></video>
	</view>
</template>

<script>
	export default {
		props:{
			video:{
				type:Object,
				default:{}
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
	.videoPlayer{
		width: 100%;
		height: 100%;
	}
	.video{
		width: 100%;
		height: 100%;
	}
</style>
