<template>
	<div class="classification">
		<div class="classification-header">
			<img src="../../../static/img/pic.jpg" alt="">
		</div>
		<div class="classification-shang">
			<div class="classification-top">
				<div class="classification-logo">
					<h1>
						<img src="../../../static/img/classlogo2.png" alt="">
						<img src="../../../static/img/classlogo1.png" alt="">
					</h1>
				</div>
				<div class="classification-wumei">
					<img src="../../../static/img/classwumei.png" alt="">
					<h1>全球精选（北京会员店）</h1>
				</div>	
			</div>
			<div class="classification-xia">
				<ul >
					<li @click="state()">
						<img src="../../../static/img/all.png" alt="">
					</li>
					<li @click="state()">全部分类</li>
					<li v-for="(index,value) in this.$store.state.goods" @click="cat(value,index)" :class="index.cmCatId == Num?'active':''">
					{{index.catName}}</li>
				</ul>
			</div>
		</div>
		<div class="classification-shnagpin">
			<div>
				<img src="../../../static/img/speaker.png" alt="">
				<p>购物满69元，减6元服务费</p>
			</div>
		</div>
		<div class="classification-ul">
			<ul>
				<li v-for="i in spText">
					<div class="classification-ul-pic">
						<img :src="i.img" alt="">
						<span v-show="i.promotionInfo.promotionDisplay">{{i.promotionInfo.promotionDisplay}}</span>
					</div>
					<p>{{i.title}}</p>
					<div class="classification-ul-price">
						<span>￥{{i.promotionInfo.promotionPrice | n}}</span> 
						<img src="../../../static/img/add.png" alt="">
					</div>
				</li>
			</ul>
		</div>
		<div class="classification-bottom">
			<hr>
			<p>没有更多商品啦！</p>
			<hr>
		</div>
	</div>
</template>

<style>
	.active{
		color: #fd7138!important;
		border-bottom: 0.067568rem solid #fd7138;
	}
	.classification-header{
		height: 4.594595rem;
	}
	.classification-header img{
		width: 100%;
		height: 100%;
	}
	.classification-top{
		height: 80%;
		overflow: hidden;
	}
	.classification-shang{
		position: absolute;
		top: 0;
		width: 100%;
		height: 4.594595rem;
		background: rgba(0,0,0,.6);
	}
	.classification-wumei{
		width: 50%;
		margin: 0.540541rem auto 0;
	}
	.classification-wumei img{
		width: 1.936937rem;
		margin: 0 auto;
	}
	.classification-wumei h1{
		font-size: 0.36036rem;
		color: #fff;
		text-align: center;
		margin-top: 0.45045rem;
	}
	.classification-logo{
		position: absolute;
		right: 0.27027rem;
		top: 0.225225rem;
	}
	.classification-logo img{
		display: inline-block;
	}
	.classification-xia ul{
		height: 100%;
		display: -webkit-box;
		overflow: scroll;
	}
	.classification-xia {
		height: 20%;
	}
	.classification-xia ul li{
		color: #fff;
		font-size: 0.405405rem;
		line-height: 0.853333rem;
		padding: 0 0.133333rem;
	}
	.classification-xia ul li:first-child{
		background: #000;
	    position: absolute;
	    left: 0;
	    height: 20%;
	    align-items: center;
	    display: flex;
	    justify-content: center
	}
	.classification-xia ul li img{
		height: 87%;
	}
	.classification-xia ul li:nth-child(2){
		margin-left: 1.013333rem;
	}
	.classification-shnagpin div{
		height: 0.8rem;
		font-size: 0.32rem;
		background: #fef2de;
		display: flex;
		align-items: center;
	}
	.classification-shnagpin div img{
		width: 0.533333rem;
		height: 0.533333rem;
		margin:0 0.337838rem;
	}
	.classification-ul ul{
		display: flex;
		flex-wrap: wrap;
	}
	.classification-ul ul li{
		width: 33.33%;
		box-sizing: border-box;
		border:1px solid #f6f6f6;
	}
	.classification-ul-pic{
		position: relative;
	}
	.classification-ul-pic span{
		position: absolute;
		display: block;
		height:0.45045rem;
		width: 0.900901rem;
		background: #fd7172;
		bottom: -0.093333rem;
		left: 0.2rem;
		border-radius: 0.066667rem;
		text-align: center;
		color: #fff;
	}
	.classification-ul-pic img{
		width: 2.477477rem;
		height: 2.477477rem;
		margin:0.27027rem auto 0.263063rem;
		background: url(../../../static/img/jiazai.jpg) no-repeat -1.333333rem;
		background-size: 208%;
		
	} 
	.classification-ul  p{
		padding: 0 0.225225rem;
		font-size: 0.36036rem;
		height: 1.0rem;
		overflow : hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.classification-ul-price{
		display: flex;
		justify-content: space-between;
		margin:0.405405rem 0.225225rem 0.225225rem 0.225225rem;
		font-size: 0.315315rem;
		color: #fd7842;
		align-items: center;
	}
	.classification-bottom{
		display: flex;
		margin:0.8rem 0;
		align-items: center;
		color: #bbb;
		font-size: 0.35rem;
	}
	.classification-bottom hr{
		width: 25%;
		background: #ddd;
		height: 1px;
	}
</style>

<script>
	export default{
		data(){
			return {
				spText:[],
				Num : this.$store.state.catId
			}
		},
		methods : {
			state(){
				this.$store.commit('changeState');
			},
			cat(index,id){
				if(id !=undefined){
					this.$store.state.catId = id.cmCatId;
					this.Num = id.cmCatId;
				}else{
					this.$store.state.catId;
					this.Num = this.$store.state.catId;
				}
				this.$http({
					url:"http://127.0.0.1:8080",
					params:{
						hostname:"gatewx.dmall.com",
						path:"/customersite/searchWareByCategory?",
						param:'{"pageNum":1,"pageSize":30,"venderId":"1","storeId":"318","sort":"1","categoryId":'+this.$store.state.catId+',"categoryLevel":3,"cateSource":1,"bizType":"2"}',
						token:"530901FA2EFEAD8CF04466A35DB55B9B1B7F232B74D8703788748D874F6155AEFA8163325A891ABBA6B3C8E919F02C9AC440E2EACDB39E6E8942F7D98A6627ABDFCB2AAF5F78810E51818ABC4C656ACBF8CF58A66FB54BD61D42E683B888A4B0BCB1EBA3B21A20FAB63561416FB3D3D119105DE81E52BAE83F817A2FF70A2B4B",
						source:2,
						tempid:"C78E8C0DB0700002B3D81609D6C219F5",
						pubParam:"{}",
						_:"1496902259006"
					},
					method:"GET"
				}).then(function(req){
					this.spText = req.body.data.list;
				})
			}
		},
		mounted(){
			this.cat();
		},
		computed :{
			catTro(){
				return this.$store.state.catEmitStatus;
			}
		},
		watch :{
			catTro(isEmit){
				if(isEmit){
					this.cat();
				}
				this.$store.state.catEmitStatus = false;
			}
		}
	}
</script>

