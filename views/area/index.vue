<template>
  <view>
    <view class="demo">
      <view class="demo-title">基础用法</view>
      <view class="demo-item">
        <cc-area></cc-area>
      </view>
    </view>
    
    
    <view class="demo">
      <view class="demo-title">选择省市</view>
      <view class="demo-item">
        <cc-area :columns-num='2'></cc-area>
      </view>
    </view>
    
    
    <view class="demo">
      <view class="demo-title">配置列占位提示文字</view>
      <view class="demo-item">
        <cc-area :columnsPlaceholder="['请选择', '请选择', '请选择']" @confirm='confirm'></cc-area>
      </view>
    </view>
  </view>

</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {}
    },
    methods: {
      confirm(val) {
        console.log(val)
      }
    },
    mounted() {

    },
    onLoad() {

    },
    onShow() {

    },
    filters: {},
    computed: {},
    watch: {},
  }
</script>

<style scoped lang="scss">
.demo {
  margin-bottom: #{topx(20)};
  &-title {
    padding: #{topx(10)};
  }
}
</style>
