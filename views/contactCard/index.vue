<template>
  <view style="background: #f7f7f7;height: 100vh;">
    <view class="demo">
      <view class="demo-title">基础用法</view>
      <view class="demo-item">
        <cc-contact-card type="add" @click="onAdd"></cc-contact-card>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">编辑联系人</view>
      <view class="demo-item">
        <cc-contact-card type="edit" name="eason" tel="13888888888"></cc-contact-card>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">不可编辑</view>
      <view class="demo-item">
        <cc-contact-card
          type="edit"
          name="eason"
          tel="13888888888"
          :editable="false"
          @click="onAdd"
        ></cc-contact-card>
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
    onAdd() {
      console.log('add')
    }
  },
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
  &-title {
    padding: #{topx(20)};
  }
  &-item {
    margin-bottom: #{topx(30)};
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
