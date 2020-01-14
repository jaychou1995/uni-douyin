<template>
	<view class="changeAlphabet">
		<view class="list">
			<view class="item" v-for="(cities,index) of city" :key="index" hover-class="hover" @click="selectInitial(cities.initial)">{{cities.initial}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			city:{
				type:Array,
				default:[]
			}
		},
		data() {
			return {
				
			};
		},
		methods:{
			selectInitial(initial){
				// console.log(initial);
				this.$emit('changeInitialCity',initial)
			}
		}
	}
</script>

<style>
.changeAlphabet{
	position: fixed;
	top: 300upx;
	right: 0;
	z-index: 20;
	color: #FFFFFF;
}
.list{
	width: 30upx;
}
.item{
	text-align: center;
	line-height: 18px;
	font-size: 12px;
}
.hover{
	line-height: 20px;
	font-size: 18px;
	color: #007AFF;
}
</style>
