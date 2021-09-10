<template>
  <view class="cc-steps" :class="{'cc-steps-vertical': vertical}">
    <view class="cc-steps-item" :class="{'cc-steps-item-vertical': vertical}" v-for="(item, index) in list" :key="index">
      <view class="cc-steps-item-index" :class="{'cc-steps-item-index-vertical': vertical}">
        <view v-if="dot" class="cc-steps-item-index-dot" :style="{ background: item.activeColor ? item.activeColor : Number(active) >= index ? '#0081ff' : '#909399' }"></view>
        <view
          v-else
          class="cc-steps-item-index-num"
          :style="{
            background: Number(active) >= index ? (item.activeColor ? item.activeColor : '#0081ff') : '#fff',
            color: item.activeColor ? item.activeColor : '#909399',
            border: Number(active) >= index ? 'none' : item.activeColor ? `1px solid ${item.activeColor}` : `1px solid #909399`
          }"
        >
          <view v-if="Number(active) >= index">
            <cc-icon v-if="item.icon" :type="item.icon" size="12" :color="Number(active) >= index ? '#fff' : '#909399'"></cc-icon>
            <cc-icon v-else type="checkmarkempty" :color="Number(active) >= index ? '#fff' : '#909399'"></cc-icon>
          </view>
          <view v-else>
            <view v-if="item.icon"><cc-icon v-if="item.icon" :type="item.icon" size="12"></cc-icon></view>
            <view v-else>{{ index + 1 }}</view>
          </view>
        </view>

        <view class="cc-steps-item-index-line" :class="{'cc-steps-item-index-line-vertical': vertical}"></view>
      </view>
      <view class="cc-steps-item-name" :class="{'cc-steps-item-name-vertical': vertical}" :style="{ color: Number(active) >= index ? (item.activeColor ? item.activeColor : '#0081ff') : '' }">{{ item.name }}</view>
      <view class="cc-steps-item-name cc-steps-item-content" :class="{'cc-steps-item-content-vertical': vertical}" :style="{ color: Number(active) >= index ? (item.activeColor ? item.activeColor : '#0081ff') : '' }" v-if="item.content">
        {{ item.content }}
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'cc-steps',
  components: {},
  props: {
    // 当前激活项
    active: {
      type: [Number, String],
      default: 0
    },
    // 步骤条数据
    list: {
      type: Array,
      required: true
    },
    // 以点的形式展现
    dot: {
      type: Boolean,
      default: false
    },
    // 是否是竖向
    vertical: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  methods: {},
  mounted() {},
  onLoad() {},
  onShow() {},
  filters: {},
  computed: {},
  watch: {}
}
</script>

<style scoped lang="scss">
.cc-steps {
  display: flex;
  align-items: center;
  &-vertical {
    flex-direction: column;
    align-items: flex-start;
  }
  &-item {
    flex: 1;
    &-vertical {
      display: flex;
    }
    &-index {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      &-vertical {
        flex-direction: column;
      }
      &-dot {
        width: 16rpx;
        height: 16rpx;
        background: #909399;
        border-radius: 100%;
      }
      &-line {
        width: 50%;
        height: 2rpx;
        margin: 0 10rpx;
        background: #ebedf0;
        &-vertical {
          width: 2rpx !important;
          height: 40rpx !important;
          margin: 10rpx 0;
        }
      }
      &-num {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50rpx;
        height: 50rpx;
        border-radius: 100%;
        color: #fff;
      }
    }
    &-name {
      font-size: 12px;
      margin-top: 20rpx;
      position: relative;
      left: 12rpx;
      &-vertical {
        margin-top: 0rpx;
        left: 20rpx;
      }
    }
    &-content {
      &-vertical {
       position: relative;
       top: 20rpx;
       left: -28rpx;
      }
    }
  }
}
</style>
