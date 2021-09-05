<template>
  <view>
    <view class="tip" v-if="$slots.tip"><slot name="tip"></slot></view>
    <view class="container flex a-center">
      <slot></slot>
      <view class="flex j-end a-center f-1">
        <view class="label">{{ label }}:</view>
        <view class="price flex a-center">
          <view class="currency">{{ currency }}</view>
          <view class="leftPrice">{{ leftPrice }}</view>
          <view class="rightPrice">.{{ rightPrice }}</view>
        </view>
        <view>
          <button :loading="loading" @click="submit" :class="{ disable: disabled }" class="button flex a-center j-center" :style="{ background: buttonColor }">
            <span v-if='!loading'>{{ buttonText }}</span>
          </button>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'cc-submit-bar',
  components: {},
  props: {
    // 价钱
    price: {
      type: Number,
      required: true
    },
    // 左侧文案
    label: {
      type: String,
      default: '合计'
    },
    // 按钮文字
    buttonText: {
      type: String,
      default: '提交订单'
    },
    // 按钮颜色
    buttonColor: {
      type: String,
      default: '#ee0a24'
    },
    // 货币符号
    currency: {
      type: String,
      default: '¥'
    },
    // 价格小数点后位数
    decimalLength: {
      type: [String, Number],
      default: '2'
    },
    // 是否禁用按钮
    disabled: {
      type: Boolean,
      default: false
    },
    // 是否显示加载中的按钮
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showPrice: this.price
    };
  },
  methods: {
    submit(e) {
      if (!this.disabled && !this.loading) {
        this.$emit('submit', e)
      }
    }
  },
  mounted() {
   
  },
  computed: {
    leftPrice() {
      return Math.floor(this.showPrice / 100)
    },
    rightPrice() {
      return String((this.showPrice / 100).toFixed(this.decimalLength)).split('.')[1]
    }
  },
  watch: {
    price(val) {
      this.showPrice = val
    }
  }
}
</script>

<style scoped lang="scss">
.w100 {
  width: 100%;
}
.f-1 {
  flex: 1;
}
.flex {
  display: flex;
}
.a-center {
  align-items: center;
}
.j-center {
  justify-content: center;
}
.j-between {
  justify-content: space-between;
}
.j-end {
  justify-content: flex-end;
}
.container {
  height: 50px;
  padding: 0 32rpx;
  font-size: 14px;
  position: relative;
  .price {
    margin: 0 10rpx;
    color: #ee0a24;
    .currency {
      font-size: 12px;
      position: relative;
      top: 2rpx;
    }
    .leftPrice {
      font-size: 20px;
      font-weight: 500;
    }
    .rightPrice {
      font-size: 12px;
      position: relative;
      top: 2rpx;
    }
  }
  .button {
    width: 220rpx;
    height: 80rpx;
    border-radius: 1998rpx;
    color: #fff;
    margin-left: 10rpx;
    font-size: 16px;
  }
}
.tip {
  padding: 16rpx 24rpx;
  color: #f56723;
  font-size: 12px;
  line-height: 1.5;
  background-color: #fff7cc;
}
.disable {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
