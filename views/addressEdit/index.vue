<template>
  <view class="demo">
    <view>
      <view class="demo-title">基础用法</view>
      <view class="demo-item">
        <cc-address-edit></cc-address-edit>
      </view>
    </view>

    <view>
      <view class="demo-title">设置初始值</view>
      <view class="demo-item">
        <cc-address-edit :addressInfo="addressInfo"></cc-address-edit>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      addressInfo: {
        name: 'admin',
        tel: '13588888888',
        province: '北京市',
        city: '北京市',
        county: '东城区',
        addressDetail: '乌托邦',
        areaCode: '',
        postalCode: '100000',
        isDefault: true
      }
    }
  },
  methods: {},
  mounted() { },
  onLoad() { },
  onShow() { },
  filters: {},
  computed: {},
  watch: {}
}
</script>

<style scoped lang="scss">
.demo {
  background: #f7f7f7;
  height: 100vh;
  &-title {
    padding: #{topx(10)};
  }
  &-item {
    margin-bottom: #{topx(30)};
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
