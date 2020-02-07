<template>
	<view class="friend">
		<follow-nav :page="page"></follow-nav>
		<follow-list :list="list"></follow-list>
		<page-foot :bgColor="block"></page-foot>
	</view>
</template>

<script>
	import followNav from '../../components/follow-nav.vue'
	import followList from '../../components/followList.vue'
	
	export default {
		components:{
			followNav,followList
		},
		data() {
			return {
				page:'friend',
				list:[],
				block:'#000000'
			}
		},
		onLoad() {
			this.getVideo()
		},
		methods: {
			getVideo(){
				uni.request({
					url:'http://127.0.0.1:8088/static/json/videos.json',
					method:'GET',
					success:(res)=>{
						this.list = res.data.list.slice(3,8)
					}
				})
			}
		}
	}
</script>

<style>
.friend{
	width: 100%;
	height: 100%;
	background-color: #000000;
}
</style>
