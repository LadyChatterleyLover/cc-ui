<template>
  <view class="cc-contact-card" @click="handleClick">
    <view class="cc-contact-card-icon" v-if="type ==='add'"><cc-icon type="plusempty" color="#fff" size="24"></cc-icon></view>
    <view v-else>
      <cc-icon type="person" size="18" style="margin-right: 30rpx;"></cc-icon>
    </view>
    <view class="cc-contact-card-content">
      <view v-if="type === 'add'">{{ addText }}</view>
      <view v-else style="color: #323233;">
        <view>姓名: {{name}}</view>
        <view>电话: {{tel}}</view>
      </view>
    </view>
    <view class="cc-contact-card-arrow" v-if='editable'><cc-icon type="arrowright" color="#969799"></cc-icon></view>
  </view>
</template>

<script>
export default {
  name: 'cc-contact-card',
  components: {},
  props: {
    // 类型
    type: {
      type: String,
      default: 'edit'
    },
    // 联系人姓名
    name: {
      type: String,
      default: ''
    },
    // 联系人手机号
    tel: {
      type: String,
      default: ''
    },
    // 添加时的文案提示
    addText: {
      type: String,
      default: '添加联系人'
    },
    // 是否可编辑
    editable: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {}
  },
  methods: {
    handleClick() {
      if (!this.editable) return
      this.$emit('click')
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
.cc-contact-card {
  display: flex;
  align-items: center;
  padding: 48rpx;
  position: relative;
  background: #fff;
  &::before {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 4rpx;
    background: -webkit-repeating-linear-gradient(135deg, #ff6c6c 0, #ff6c6c 20%, transparent 0, transparent 25%, #1989fa 0, #1989fa 45%, transparent 0, transparent 50%);
    background: repeating-linear-gradient(-45deg, #ff6c6c 0, #ff6c6c 20%, transparent 0, transparent 25%, #1989fa 0, #1989fa 45%, transparent 0, transparent 50%);
    background-size: 80px;
    content: '';
  }
  &-icon {
    width: 60rpx;
    height: 60rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #1989fa;
    border-radius: 10rpx;
    margin-right: 30rpx;
  }
  &-content {
    flex: 1;
    font-size: 14px;
    color: #323233;
  }
}
</style>
