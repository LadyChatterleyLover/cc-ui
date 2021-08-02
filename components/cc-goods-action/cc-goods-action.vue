<template>
	<view class="flex a-center container">
		<view class="flex icon">
			<view class="flex f-col a-center icon-item" v-for="(item,index) in options" :key="index" @click="handleClick(item, index)">
				<view>
					<cc-icon :type="item.icon" :color="item.iconColor"></cc-icon>
					<text class="info" v-if="item.info" :style="{background: item.infoColor}">{{item.info}}</text>
					<view class="dot" v-if="item.dot"></view>
				</view>
				<view class="text flex a-center j-center">
					{{item.text}}
				</view>
			</view>
		</view>
		<view class="f-1 flex a-center btn" v-if="Array.isArray(buttons)">
			<view class="btn-icon flex a-center j-center" :class="{'f-btn' :!buttons[0].background}" :style="{background: buttons[0].background}" @click="clickButton(buttons[0], 0)">
				{{buttons[0].text}}
			</view>
			<view  v-if="buttons[1]" class="btn-icon flex a-center j-center" :class="{'l-btn' :!buttons[1].background}" :style="{background: buttons[1].background}" @click="clickButton(buttons[1], 1)">
				{{buttons[1].text}}
			</view>
		</view>
		<view class="f-1 flex a-center btn" v-else>
			<view  class="btn-icon flex a-center j-center" :class="{'f-btn' :!buttons.background}" :style="{background: buttons.background}" @click="clickButton(buttons, 0)">
				{{buttons.text}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "cc-goods-action",
		components: {
			
		},
		props: {
			options: {
				type: Array,
				required: true
			},
			buttons: {
				type: [Array, Object],
				required: true
			}
		},
		data() {
			return {}
		},
		methods: {
			handleClick(item, index) {
				this.$emit('click', {
					item,
					index
				})
			},
			clickButton(item, index) {
				this.$emit('clickButton', {
					item,
					index
				})
			}
		},
		mounted() {
			this.options.map(item => {
				if (!item.iconColor) this.$set(item, 'iconColor', '#323233')
				if (item.info && !item.infoColor) this.$set(item, 'infoColor', '#ee0a24')
			})
			if (Array.isArray(this.buttons)) {
				this.buttons.map((item, index) => {
					if (index === 0 && !item.background) this.$set(item, 'background', '#ff8917')
					if (index === 1 && !item.background) this.$set(item, 'background', '#ee0a24')
				})
			}
			if (!Array.isArray(this.buttons) && !this.buttons.background) {
				this.$set(this.buttons, 'background', '#ff8917')
			}
		},
		onLoad() {

		},
		filters: {

		},
		computed: {

		},
		watch: {

		},
		directives: {

		}
	}
</script>

<style scoped lang="scss">
	.container {
		// position: fixed;
		// bottom: 0;
		// left: 0;
		// right: 0;
		height: 100rpx;
		width: 100%;
		padding: 6rpx;
	}

	.flex {
		display: flex;
	}

	.f-col {
		flex-direction: column;
	}

	.a-center {
		align-items: center;
	}

	.j-center {
		justify-content: center;
	}

	.f-1 {
		flex: 1;
	}

	.icon {
		min-width: 96rpx;
		.icon-item {
			margin: 10rpx 24rpx;
			font-size: 14px;
			position: relative;
			top: 10rpx;
			.dot {
				width: 8px;
				min-width: 0;
				height: 8px;
				background-color: #ee0a24;
				border-radius: 100%;
				position: absolute;
				top: -8rpx;
				right: -4rpx;
			}
			.text {
				color: #646566;
			}
			.info {
				position: absolute;
				top: -12rpx;
				right: -8rpx;
				box-sizing: border-box;
				min-width: 16px;
				padding: 0 3px;
				color: #fff;
				font-weight: 500;
				font-size: 12px;
				font-family: -apple-system-font, Helvetica Neue, Arial, sans-serif;
				line-height: 1.2;
				text-align: center;
				border: 1px solid #fff;
				border-radius: 16px;
			}
		}
	}

	.btn {
		color: #fff;
		height: 100rpx;
		width: 100%;
		font-size: 14px;

		.btn-icon {
			height: 80rpx;
			width: 100%;
			position: relative;
			top: 10rpx;

			&:first-child {
				border-top-left-radius: 999px;
				border-bottom-left-radius: 999px;
			}

			&:last-child {
				border-top-right-radius: 999px;
				border-bottom-right-radius: 999px;
				margin-right: 10rpx;
			}
		}
	}
	.f-btn {
		background: #ff8917 !important;
	}
	.l-btn {
		background: #ee0a24 !important;
	}
</style>
