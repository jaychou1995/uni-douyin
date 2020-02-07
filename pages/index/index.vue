<template>
	<view class="content">
		
		<first-nav></first-nav>
		<video-list :list="list"></video-list>
		<page-foot></page-foot>
	</view>
</template>

<script>
	
	import videoList from '../../components/video-list.vue'
	
	export default {
		components:{
			videoList
		},
		data() {
			return {
				title: 'Hello',
				list:[]
			}
		},
		onLoad() {
			this.getVideos()
			// console.log(this.list);
		},
		methods: {
			getVideos(){
				uni.request({
					url:'http://127.0.0.1:8088/static/json/videos.json',
					method:'GET',
					success: (res) => {
						this.list = res.data.list
						console.log(this.list);
					}
				})
			}
		}
	}
</script>

<style>
	.content{
		width: 100%;
		height: 100%;
		min-height: 100%;
	}
</style>
