<template>
	<view class="changeAlphabet">
		<view class="list">
			<view class="item" v-for="(cities,index) of city" :key="index" hover-class="hover" @click="selectInitial(cities.initial)" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd" >{{cities.initial}}</view>
		</view>
	</view>
</template>

<script>
	var timer = null;
	export default {
		props:{
			city:{
				type:Array,
				default:[]
			}
		},
		data() {
			return {
				touch:false
			};
		},
		methods:{
			selectInitial(initial){
				// console.log(initial);
				this.$emit('changeInitialCity',initial)
			},
			touchStart(){
				// this.touch = true
			},
			touchMove(e){
				// clearInterval(timer)
				// timer = setInterval(()=>{
				// 	if(this.touch){
				// 		const touchY = e.changedTouches[0].pageY - 150
				// 		const index = Math.floor(touchY/15)
				// 		if(index>=0&&index<=this.city.length){
				// 			this.$emit('changeInitialCity',this.city[index].initial)
				// 		}
				// 	}
				// },30)

			},
			touchEnd(){
				// this.touch = false
			}
		}
	}
</script>

<style>
.changeAlphabet{
	position: fixed;
	top: 150px;
	right: 0;
	z-index: 20;
	color: #FFFFFF;
}
.list{
	width: 15px;
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
