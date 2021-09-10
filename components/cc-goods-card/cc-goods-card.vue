<template>
  <view class="cc-goods-card">
    <view class="cc-goods-card-wrap" @click="handleClick">
      <view class="cc-goods-card-thumb">
        <image @click="clickImage" :src="thumb" style="width: 100%;height: 100%;"></image>
        <view class="cc-goods-card-thumb-tag" v-if="tag">
          <cc-tag type="error" circleRight>{{ tag }}</cc-tag>
        </view>
      </view>
      <view class="cc-goods-card-content">
        <view class="cc-goods-card-content-info">
          <view class="cc-goods-card-content-info-title" v-if="title">{{ title }}</view>
          <view class="cc-goods-card-content-info-desc" v-if="desc">{{ desc }}</view>
          <view class="cc-goods-card-content-info-tags" v-if="$slots.tags"><slot name="tags"></slot></view>
        </view>
        <view class="cc-goods-card-content-bottom">
          <view class="cc-goods-card-content-bottom-price">
            <view class="cc-goods-card-content-bottom-price-p" v-if="price">
              {{ currency }}
              <text style="font-size: 16px;">{{ String(price).slice(0, 1) }}</text>
              {{ String(price).slice(1) }}
            </view>
            <view class="cc-goods-card-content-bottom-price-o" v-if="originPrice">{{currency}}{{ originPrice }}</view>
          </view>
          <view class="cc-goods-card-content-bottom-num" v-if="num">x{{ num }}</view>
        </view>
      </view>
    </view>
    <view class="cc-goods-card-footer"><slot name="footer"></slot></view>
  </view>
</template>

<script>
export default {
  name: 'cc-goods-card',
  components: {},
  props: {
    // 左侧图片
    thumb: {
      type: String,
      default: ''
    },
    // 标题
    title: {
      type: String,
      default: ''
    },
    // 描述
    desc: {
      type: String,
      default: ''
    },
    // 图片角标
    tag: {
      type: String,
      default: ''
    },
    // 商品数量
    num: {
      type: [Number, String],
      default: ''
    },
    // 商品价格
    price: {
      type: [Number, String],
      default: ''
    },
    // 商品划线原价
    originPrice: {
      type: [Number, String],
      default: ''
    },
    // 货币符号
    currency: {
      type: String,
      default: '￥'
    },
  },
  data() {
    return {}
  },
  methods: {
    handleClick() {
      this.$emit('click')
    },
    clickImage() {
      this.$emit('click-thumb')
    }
  },
  mounted() {},
  onLoad() {},
  onShow() {},
  filters: {},
  computed: {},
  watch: {}
}
</script>

<style scoped lang="scss">
.cc-goods-card {
  position: relative;
  box-sizing: border-box;
  padding: 16px 32px;
  color: #323233;
  font-size: 12px;
  background-color: #fafafa;
  &-wrap {
    display: flex;
  }
  &-thumb {
    width: 190rpx;
    height: 190rpx;
    argin-right: 8px;
    position: relative;
    &-tag {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  &-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 180rpx;
    font-size: 12px;
    &-info {
      &-desc {
        color: #646566;
        margin-bottom: 10rpx;
      }
    }
    &-tags {
      display: flex;
      align-items: center;
    }
    &-bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      &-price {
        display: flex;
        align-items: center;
        &-p {
          margin-right: 10rpx;
          font-weight: 500;
        }
        &-o {
          color: #969799;
          text-decoration: line-through;
          position: relative;
          top: 2rpx;
        }
      }
      &-num {
        color: #969799;
      }
    }
  }
  &-footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}
</style>
