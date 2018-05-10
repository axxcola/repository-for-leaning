<template>
	<div class="cartcontrol">
		<div class="cart-decrease icon-remove_circle_outline" v-show="food.count>0" @click="decreaseCart">
			<transition name="move">
				<span class="inner icon-remove_circle_outline">－</span>
			</transition>
		</div>
		<div class="cart-count" v-show="food.count>0">{{food.count}}</div>
		<div class="cart-add icon-add_circle" @click="addCart">＋</div>
	</div>
</template>

<script>
import Vue from 'vue';

export default {
	props: {
		food: {
			type: Object
		}
	},
	created () {
		
	},
	methods: {
		addCart: function (event) {
			if(!event._constructed) {
				return false;
			}
			if(!this.food.count) {
				//this.food原本没有count这个属性，强行赋值的话, v-show无法监测到
				// this.food.count = 1;
				Vue.set(this.food, 'count', 1);
			} else {
				this.food.count++;
			}
		},
		decreaseCart: function (event) {
			if(!event._constructed) {
				return false;
			}
			if(this.food.count) {
				this.food.count--;
			}
		}
	}
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.cartcontrol
		font-size: 0
		.cart-decrease
			display: inline-block
			padding: 6px
			transition: all 0.4s linear
			.inner
				display: inline-block
				font-size: 24px
				line-height: 24px
				color: rgb(0, 160, 220)
		.cart-count
			display: inline-block
			vertical-align: top
			width: 12px
			padding-top: 6px
			line-height: 24px
			text-align: center
			font-size: 10px
			color: rgb(147, 153, 159)
		.cart-add
			display: inline-block
			padding: 6px
			font-size: 24px
			line-height: 24px
			color: rgb(0, 160, 220)
</style>