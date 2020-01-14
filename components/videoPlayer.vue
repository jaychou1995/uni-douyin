<template>
	<view class="videoPlayer">
		<video 
		id="myVideo"
		class="video" 
		:src="video.src" 
		:loop="true"
		:controls="false"
		:autoplay="autoplay"
		@click="clickVideo"
		@dblclick="dbClickVideo"
		></video>
	</view>
</template>

<script>
	var timer = null;
	export default {
		props:{
			video:{
				type:Object,
				default:{}
			},
			index:{
				type:Number,
				default:0
			}
		},
		data() {
			return {
				autoplay:false,
				videoContext:'',
				play:false,
				dblClick:false,
			};
		},
		created() {
			this.auto()
		},
		mounted() {
			this.videoContext = uni.createVideoContext('myVideo',this)
			// this.player()
		},
		// onReady() {
		// 	this.videoContext = uni.createVideoContext('myVideo',this)
		// },
		methods:{
			player(){
				if(this.play === false){
					this.videoContext.seek(0)
					this.videoContext.play()
					this.play = true
				}

			},
			pause(){
				if(this.play === true){
					this.videoContext.pause()
					this.play = false
				}

			},
			playThis(){
				if(this.play === false){
					this.videoContext.play()
					this.play = true
				}
			},
			clickVideo(){
				clearInterval(timer)
				this.dblClick = !this.dblClick
				timer = setTimeout(()=>{
					if(this.dblClick){
						//单机
						if(this.play === false){
							this.playThis()
						}else{
							this.pause()
						}
						
						this.dblClick = false
					}else{
						//双击
						console.log("shuangji");
						this.$emit('changeClick')
					}
				},250)
			},
			auto(){
				if(this.index === 0){
					console.log('ddd');
					this.autoplay = true
				}
			}
		}
	}
</script>

<style scoped>
	.videoPlayer{
		width: 100%;
		height: 100%;
	}
	.video{
		width: 100%;
		height: 100%;
	}
</style>
