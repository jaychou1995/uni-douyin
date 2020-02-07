<template>
	<view class="personalInfo">
		<view class="background-img-box">
			<image class="background-img" src="/static/img/background.jpg"></image>
		</view>
		<view class="top">
			<view class="personal-img-box">
				<image class="personal-img" src="/static/img/author.jpg"></image>
			</view>
			<view class="change" @click="change">编辑资料</view>
		</view>
		<view class="name-box">
			<view class="name">
				张三
			</view>
			<view class="douyinId">
				抖音号:1e243141
			</view>
		</view>
		<view class="text-box">
			<view class="introduce">
				我爱睡觉
			</view>
			<view class="label-box">
				<view class="label">
					清华大学
				</view>
				<view class="label">
					北京
				</view>
			</view>
			<view class="number-box">
				<view class="box">
					<text class="number">123w</text>
					<text class="number-text">获赞</text>
				</view>
				<view class="box">
					<text class="number">152</text>
					<text class="number-text">关注</text>
				</view>
				<view class="box">
					<text class="number">1235</text>
					<text class="number-text">粉丝</text>
				</view>
			</view>
		</view>
		<view class="add-box">
			<text class="iconfont iconxiangji"></text>
			<text class="add">添加随拍</text>
		</view>
		<view class="option-box">
			<view class="option" :class="option == 0 ? 'option-style' : ''" @click="click(0)">
				作品
			</view>
			<view class="option" :class="option == 1 ? 'option-style' : ''" @click="click(1)">
				动态
			</view>
			<view class="option" :class="option == 2 ? 'option-style' : ''" @click="click(2)">
				喜欢
			</view>
		</view>
		
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				option:0
			};
		},
		methods:{
			click(flag){
				this.option = flag
			},
			change(){
				uni.navigateTo({
					url:'/pages/changeInfo/changeInfo'
				})
			}
		}
	}
</script>

<style>
.personalInfo{
	width:100%;
	background: #000000;
	position: relative;
}
.background-img-box{
	width: 100%;
	padding: 0 1px;
	z-index:19;
}
.background-img{
	width: 100%;
	height: 180px;
}
.top{
	width:100%;
	position:absolute;
	top:140px;
	left:0;
	z-index:20;
	background:#000000;
	height:60px;
}
.personal-img-box{
	margin:-25px 0 0 30px;
}
.personal-img{
	width:80px;
	height:80px;
	border-radius:50%;
	z-index:20;
	border:3.5px solid #000000;
}
.change{
	position:absolute;
	top:15px;
	right:25px;
	width:55%;
	height:35px;
	line-height:35px;
	font-size:16px;
	text-align:center;
	background:#333333;
	border-radius:2px;
	color:#ffffff;
}
.name-box{
	padding:0 25px;
	color:#EEEEEE;
	z-index:20;
	margin-top:20px;
}
.name{
	height: 50px;
	line-height: 50px;
	font-size:26px;
}
.douyinId{
	height: 25px;
	line-height: 25px;
	font-size: 14px;
}
.text-box{
	z-index:20;
	padding:0 25px;
	margin-top: 8px;
	border-top: 1px solid #222222;
}
.introduce{
	height: 30px;
	line-height: 30px;
	font-size: 15px;
	color: #EEEEEE;
}
.label-box{
	width: 100%;
	height: 25px;
	margin-top: 5px;
	line-height: 25px;
	color: #EEEEEE;
}
.label{
	height: 20px;
	padding: 0 5px;
	line-height: 20px;
	font-size: 11.5px;
	background: #333333;
	color: #999999;
	float: left;
	border-radius: 1.5px;
	margin-right: 10px;
}
.number-box{
	width: 100%;
	height: 50px;
	line-height: 50px;
}
.box{
	height: 40px;
	line-height: 40PX;
	float: left;
	margin-right: 5px;
}
.number{
	color: #FFFFFF;
	font-size: 15px;
}
.number-text{
	color: #999999;
	font-size: 13px;
	width:50px;
}
.add-box{
	margin: 0 6%;
	height:40px;
	line-height: 40px;
	background: #333333;
	border-radius: 3px;
	text-align: center;
	color: #FFFFFF;
}
.add{
	padding-left: 5px;
	font-size: 13px;
}
.option-box{
	width: 100%;
	height:50px;
	line-height: 50px;
	margin-bottom: 10px;
}
.option{
	width: 33%;
	height:50px;
	line-height: 50px;
	color: #999999;
	float: left;
	text-align: center;
}
.option-style{
	border-bottom: 3px solid #F0AD4E;
}
</style>
