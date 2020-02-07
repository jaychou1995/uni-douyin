<template>
	<view class="city">
		<first-nav></first-nav>
		<city-content></city-content>
		<page-foot></page-foot>
	</view>
</template>

<script>
	
	import cityContent from '../../components/cityContent.vue'
	
	export default {
		components:{
			cityContent
		},
		data() {
			return {
				cityName:'北京'
			}
		},
		onShow() {
			
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.city{
		width: 100%;
		height: 100%;
		background-color: #000000;
	}
</style>
