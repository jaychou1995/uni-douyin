<template>
	<view class="changeList">
		<scroll-view class="scrolly" scroll-y="true" :scroll-into-view="viewId">
			<view class="city-box">
				<view class="box now-city">
					<view class="title">
						<text class="iconfont icondingwei"></text>
						当前城市
					</view>
					<view class="current-city">北京</view>
				</view>
				<view class="box">
					<view class="title">热门城市</view>
					<view class="hotlist">
						<view class="item" v-for="(item,index) in list" :key="index">{{item}}</view>
					</view>
				</view>
				<view class="box-list" v-for="(cities,index) in city" :key="index">
					<view class="initial" :id="cities.initial">{{cities.initial}}</view>
					<view class="city-name" v-for="item of cities.list">
						{{item.name}}
					</view>
				</view>
			</view>
		</scroll-view>

	</view>
</template>

<script>
	
	export default {
		props:{
			city:{
				type:Array,
				default:[]
			},
			letter:{
				type:String,
				default:''
			},
		},
		data() {
			return {
				list:['北京','深圳','上海','南京','广州','香港','武汉','重庆','西安','成都','昆明','大连'],
				viewId:''
			};
		},
		watch:{
			letter(){
				console.log(this.letter);
				this.viewId = this.letter
			}
		}
	}
</script>

<style>
.changeList{
	width: 100%;
	background: #000000;
	color: #FFFFFF;
	z-index: 19;
	height: 100%;
}
.box{
	background: #222222;
	margin-top: 20upx;
	padding: 0 10upx 40upx 10upx;
}
.title{
	height: 80upx;
	line-height: 40px;
	margin-left: 30upx;
	font-size: 14px;
}
.current-city{
	margin: 0 30upx;
	font-size: 15px;
	height: 60upx;
	line-height: 30px;
}
.hotlist{
	width: 100%;
	overflow: hidden;
}
.item{
	width: 30%;
	height: 56upx;
	line-height: 28px;
	font-size: 13px;
	float: left;
	background: #333333;
	margin-left: 2.5%;
	margin-bottom: 20upx;
	text-align: center;
	color: #AAAAAA;
}
.now-city{
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.box-list{
	padding: 16upx 10upx;
}
.initial{
	height: 50upx;
	line-height: 25px;
	background: #000000;
	padding-left: 20upx;
	color: #666666;
	font-size: 12px;
}
.city-name{
	background: #222222;
	height: 80upx;
	line-height: 40px;
	padding-left: 20upx;
	color: #AAAAAA;
	font-size: 15px;
}
.scrolly{
	height: 100%;
}
</style>
