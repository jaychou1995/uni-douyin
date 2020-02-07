<template>
	<view class="followList">
		<scroll-view style="height: 100%;" scroll-y="true" @scroll="scroll">
			<view class="item" v-for="item in list" :key="item.id">
				<view class="top">
					<view class="img-box">
						<image class="img" src="/static/img/author.jpg"></image>
					</view>
					<view class="author-name">{{item.author}}</view>
					<view class="iconfont iconshare share"></view>
				</view>
				<view class="title">
					{{item.title}}
				</view>
				<view class="video-box">
					<follow-player :item="item" ref="player"></follow-player>
					<!-- <video class="video" objectFit="cover" :src="'/static/video/'+item.src" controls></video> -->
					<view class="music-box">
						<view class="music">
							周杰伦周杰伦周杰伦
						</view>
					</view>
				</view>
				<view class="box">
					<view class="left">
						3-20
					</view>
					<view class="right">
						<view class="iconfont iconaixin icon">
							<text class="text">赞</text>
						</view>
						<view class="iconfont icontubiaozhizuo- icon">
							<text class="text">评论</text>
						</view>
						<view class="iconfont iconfenxiang icon">
							<text class="text">分享</text>
						</view>
					</view>
				</view>
				<view class="comment">
					<view class="number">
						1.2w评论过
					</view>
					<view class="comment-box">
						<view class="iconfont iconpen icon-pen"></view>
						<input class="input-box" type="text" value="" placeholder="添加评论..."/>
					</view>
				</view>
				<view class="ground">
					
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	
	import followPlayer from './followPlayer.vue'
	
	export default {
		components:{
			followPlayer
		},
		props:{
			list:{
				type:Array,
				default:[]
			}
		},
		data() {
			return {
				
			}
		},
		methods:{
			scroll(res){
				const index = Math.floor((res.detail.scrollTop + 150)/550)
				// console.log(index);
				// console.log(this.$refs.player[0]);
				// if(index>=0 && index<this.list.length){
				// 	this.$refs.player[0].play()
				// 	this.$refs.player[1].pause()
				// 	this.$refs.player[2].pause()
				// }
				
				// for(let i=0;i<this.list.length;i++){
				// 	console.log(i);
				// 	if(i==index){
				// 		console.log('play');
				// 		this.$refs.player[i].play()
				// 	}else{
				// 		console.log('pause');
				// 		this.$refs.player[i].pause()
				// 	}
					
				// }
				// if((index-1)>=0 && (index-1)<this.list.length){
				// 	this.$refs.player[index-1].pause()
				// }
				// if((index+1)>=0 && (index+1)<this.list.length){
				// 	this.$refs.player[index+1].pause()
				// }
				// this.$refs.player[index].play()
				// this.$refs.player[index-1].pause()
				// this.$refs.player[index+1].pause()
			}
		}
	}
</script>

<style>
	.ground{
		width: 100%;
		height: 50px;
		background: #000000;
	}
.followList{
	margin-top: 10px;
	background-color: #000000;
	color: #FFFFFF;
	width: 100%;
	height: 100%;
	padding-bottom: 100upx;
}
.item{
	height: 550px;
	padding: 0 50upx;
}
.top{
	height: 35px;
}
.img-box{
	float: left;
}
.img{
	width: 35px;
	height: 35px;
	border-radius: 50%;
}
.author-name{
	float: left;
	font-size: 13px;
	height: 35px;
	line-height: 35px;
	margin-left: 10px;
}
.share{
	float: right;
	font-size: 15px;
	margin-right: 5px;
	height: 35px;
	line-height: 35px;
}
.title{
	width: 100%;
	font-size: 14px;
	margin-top: 15px;
	height: 25px;
	line-height: 25px;
}
.video-box{
	width: 100%;
	height: 350px;
	position: relative;
}
.video{
	width: 80%;
	height: 100%;
	z-index: 19;
}
.music-box{
	z-index: 20;
	position: absolute;
	bottom: 10px;
	left: 10px;
	bottom: 10px;
	width: 100px;
	overflow: hidden;
}
.music{
	font-size: 13px;
	width: 200px;
	animation: music 4s linear infinite;
}
.box{
	height: 25px;
	margin-top: 25px;
}
.left{
	float: left;
	font-size: 13px;
	height: 25px;
	line-height: 25px;
}
.right{
	float: right;
	height: 25px;
}
.icon{
	float: right;
	font-size: 18px;
	margin-left: 10px;
}
.text{
	padding: 0 5px;
	font-size: 13px;
}
.number{
	width: 100%;
	height: 25px;
	font-size: 13px;
	line-height: 13px;
	color: #AAAAAA;
}
.comment-box{
	height: 30px;
	position: relative;
}
.icon-pen{
	height: 30px;
	position: absolute;
	top: 0;
	left: 0;
}
.input-box{
	margin-left: 28px;
	font-size: 15px;
}


@keyframes music{
	0%{
		transform: translate3d(80%,0,0);
	}
	100%{
		transform: translate3d(-80%,0,0);
	}
}

</style>
