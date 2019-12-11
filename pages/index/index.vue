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
					{id:1,src:'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'},
					{id:2,src:'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'},
					{id:3,src:'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'},
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
