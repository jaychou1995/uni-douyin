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
				list:[
					{id:1,src:'/static/video/2-6.mp4'},
					{id:2,src:'/static/video/2-7.mp4'},
					{id:3,src:'/static/video/3-1.mp4'},
					{id:4,src:'/static/video/3-2.mp4'},
					{id:5,src:'/static/video/3-3.mp4'},
					{id:6,src:'/static/video/3-4.mp4'},
				]
			}
		},
		onLoad() {
			// this.getVideos()
			// console.log(this.list);
		},
		methods: {
			getVideos(){
				// uni.request({
				// 	url:
				// })
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
