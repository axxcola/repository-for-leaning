<template>
  <div class="header">
    <div class="content-wrapper">
    	<div class="avatar">
    		<img v-bind:src="seller.avatar" width="64" height="64">
    	</div>
    	<div class="content">
    		<div class="title">
    			<span class="brand"></span>
    			<span class="name">{{seller.name}}</span>
    		</div>
    		<div class="description">
    			{{seller.description}} / {{seller.deliveryTime}}分钟送达
    		</div>
    		<div class="supports" v-if="seller.supports">
    			<span class="icon"></span>
    			<span class="text">{{seller.supports[0].description}}</span>
    		</div>
    	</div>
    </div>
    <div class="bulletin-wrapper"></div>
  </div>
</template>

<script>
export default {
	props: {
		seller: {
			type: Object
		}
	}
};
</script>

<style rel="stylesheet/stylus" lang="stylus">
	.header
		color: #fff
		background: #000
		.content-wrapper
			padding: 24px 12px 18px 24px
			.avatar
				display: inline-block
			.content
				display: inline-block
</style>