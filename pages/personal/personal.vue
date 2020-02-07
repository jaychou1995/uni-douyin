<template>
	<view class="personal">
		<personal-info></personal-info>
		<personal-list :list="list"></personal-list>
		<page-foot :bgColor="block"></page-foot>
	</view>
</template>

<script>
	
	import personalInfo from '../../components/personalInfo.vue'
	import personalList from '../../components/personalList.vue'
	
	export default {
		components:{
			personalInfo,personalList
		},
		data() {
			return {
				list:[],
				show:'',
				block:"#000000"
			}
		},
		onLoad() {
			this.getVideoInfo()
		},
		methods: {
			getVideoInfo(){
				uni.request({
					url:'http://127.0.0.1:8088/static/json/videos.json',
					method:'GET',
					success: (res) => {
						this.list = res.data.list
					}
				})
			}
		}
	}
</script>

<style>
.personal{
	width: 100%;
	height: 100%;
	background: #000000;
	color: #FFFFFF;
}
</style>
