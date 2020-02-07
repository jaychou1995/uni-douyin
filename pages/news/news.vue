<template>
	<view class="news">
		<news-nav></news-nav>
		<news-content></news-content>
		<page-foot :bgColor="block"></page-foot>
	</view>
</template>

<script>
	
	import newsNav from '../../components/newsNav.vue'
	import newsContent from '../../components/newsContent.vue'
	
	export default {
		components:{
			newsNav,newsContent
		},
		data() {
			return {
				block:"#000000"
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.news{
	background-color: #000000;
	width: 100%;
	height: 100%;
}
</style>
