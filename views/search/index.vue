<template>
  <view>
    <view>
      <view class="title">基础语法</view>
      <view>
        <cc-search
          :value.sync="value"
          @input="handleInput"
          @focus="handleFocus"
          @blur="handleBlur"
          @confirm="handleConfirm"
          @clear="clear"
          @cancel="cancel"
        ></cc-search>
      </view>
    </view>

    <view>
      <view class="title">圆形</view>
      <view>
        <cc-search :value.sync="value" round></cc-search>
      </view>
    </view>

    <view>
      <view class="title">不展示右侧文字</view>
      <view>
        <cc-search :value.sync="value" :show-action="false"></cc-search>
      </view>
    </view>

    <view>
      <view class="title">文字对齐方式</view>
      <view>
        <cc-search :value.sync="value" textAlign="center"></cc-search>
      </view>
      <view>
        <cc-search :value.sync="value" textAlign="right"></cc-search>
      </view>
    </view>

    <view>
      <view class="title">图标对齐方式</view>
      <view>
        <cc-search :value.sync="value" iconAlign="center" textAlign="center"></cc-search>
      </view>
      <view>
        <cc-search :value.sync="value" iconAlign="right" textAlign="right"></cc-search>
      </view>
    </view>

    <view>
      <view class="title">自定义图标</view>
      <view>
        <cc-search :value.sync="value" round icon="person"></cc-search>
      </view>
    </view>

    <view>
      <view class="title">左侧内容</view>
      <view>
        <cc-search :value.sync="value" round label="地址"></cc-search>
      </view>
    </view>

    <view>
      <view class="title">禁用</view>
      <view>
        <cc-search :value.sync="value" round disabled></cc-search>
      </view>
    </view>

    <view>
      <view class="title">自定义左侧内容</view>
      <view>
        <cc-search :value.sync="value" round>
          <template #label>
            <view class="label">
              <view>地址</view>
              <view style="margin-left: 8rpx">
                <cc-icon type="arrowdown" size="10"></cc-icon>
              </view>
            </view>
          </template>
        </cc-search>
      </view>
    </view>

    <view>
      <view class="title">自定义右侧内容</view>
      <view>
        <cc-search :value.sync="value" round>
          <template #action>
            <view>搜索</view>
          </template>
        </cc-search>
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
      value: ''
    }
  },
  methods: {
    clear() {
      console.log('clear')
    },
    cancel() {
      console.log('cancel')
    },
    handleFocus() {
      console.log('focus')
    },
    handleInput() {
      console.log('input')
    },
    handleBlur() {
      console.log('blur')
    },
    handleConfirm() {
      console.log('confirm')
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
.title {
  margin: #{topx(10)};
}
.label {
  display: flex;
  align-items: center;
}
</style>
