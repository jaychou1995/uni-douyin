<template>
	<view class="city">
		<change-header></change-header>
		<change-list :city="city" :letter="letter"></change-list>
		<change-alphabet :city="city" @changeInitialCity="changeCity"></change-alphabet>
	</view>
</template>

<script>
	
	import changeHeader from '../../components/changeHeader.vue'
	import changeList from '../../components/changeList.vue'
	import changeAlphabet from '../../components/changeAlphabet.vue'
	import city from '@/static/city.json'
	
	export default {
		components:{
			changeHeader,changeList,changeAlphabet
		},
		data() {
			return {
				city:city.city,
				letter:''
			}
		},
		onLoad() {
			// console.log(this.city);
		},
		methods: {
			changeCity(res){
				// console.log(res);
				this.letter = res
			}
		}
	}
</script>

<style>
.city{
	width: 100%;
	background: #000000;
	height: 100%;
}
</style>
