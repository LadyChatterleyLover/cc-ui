<template>
  <view class="item">
    <cc-tabs @change="change" :current="current1" :list="list">
      <view v-if="current1 === 0">内容1</view>
      <view v-if="current1 === 1">内容2</view>
      <view v-if="current1 === 2">内容3</view>
      <view v-if="current1 === 3">内容4</view>
      <view v-if="current1 === 4">内容5</view>
      <view v-if="current1 === 5">内容6</view>
      <view v-if="current1 === 6">内容7</view>
    </cc-tabs>
  </view>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      list: [
        {
          title: '明年今日'
        },
        {
          title: '圣诞节'
        },
        {
          title: '无条件'
        },
        {
          title: '沙龙'
        },
        {
          title: '谢谢侬'
        },
        {
          title: '人来人往'
        },
        {
          title: '最佳损友'
        }
      ],
      current1: 0
    }
  },
  methods: {
    change(val) {
      this.current1 = val
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
  .item {
    margin: 20rpx 0;
  }
</style>
