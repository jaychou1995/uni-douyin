<template>
	<view class="user">
		<view @click="click" class="iconfont iconfanhui icon-fanhui">
		</view>
		<personal-info></personal-info>
		<personal-list></personal-list>
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
				
			}
		},
		methods: {
			click(){
				
			}
		}
	}
</script>

<style>
.user{
	width: 100%;
	height: 100%;
	background: #000000;
	color: #FFFFFF;
}
.icon-fanhui{
	z-index: 21;
	color: #FFFFFF;
	font-size: 17px;
	position: absolute;
	top:30px;
	left:10px;
}
</style>
