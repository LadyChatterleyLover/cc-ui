<template>
  <view>
    <view class="demo">
      <view class="demo-title">基础用法</view>
      <view class="demo-item">
        <cc-field
          :value.sync="value1"
          label="文本"
          :border="false"
          clearable
          @clear="handleClear"
          @input="handleInput"
          @change="handleChange"
          @focus="handleFocus"
          @blur="handleBlur"
          @click="handleClick"
          @clickLeft="clickLeft"
        ></cc-field>
      </view>
      <view v-if="value1">当前输入框值: {{ value1 }}</view>
    </view>

    <view class="demo">
      <view class="demo-title">输入框类型</view>
      <view class="demo-item">
        <cc-field :value.sync="value2" label="文本"></cc-field>
      </view>
      <view class="demo-item">
        <cc-field :value.sync="value3" label="密码" type="password"></cc-field>
      </view>
      <view class="demo-item">
        <cc-field :value.sync="value4" type="tel" label="手机号"></cc-field>
      </view>
      <view class="demo-item">
        <cc-field :value.sync="value5" type="number" label="数字"></cc-field>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">禁用状态</view>
      <view class="demo-item">
        <cc-field :value.sync="value10" label="只读" readonly></cc-field>
      </view>
      <view class="demo-item">
        <cc-field :value.sync="value10" label="禁用" disabled></cc-field>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">显示图标</view>
      <view class="demo-item">
        <cc-field
          :value.sync="value8"
          left-icon="search"
          right-icon="person"
          placeholder="显示图标"
          label="文本"
          @clickRight="clickRight"
        ></cc-field>
      </view>
      <view class="demo-item">
        <cc-field left-icon="chat" :value.sync="value9" placeholder="显示图标" label="文本"></cc-field>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">必填</view>
      <view class="demo-item">
        <cc-field :value.sync="value10" label="文本" required></cc-field>
      </view>
      <view class="demo-item">
        <cc-field :value.sync="value11" label="文本" required error error-message="都怪那天雨下的太急"></cc-field>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">输入长度限制</view>
      <view class="demo-item">
        <cc-field :maxlength="50" show-word-limit :value.sync="value12" label="文本"></cc-field>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">自适应高度</view>
      <view class="demo-item">
        <cc-field
          :maxlength="200"
          show-word-limit
          :value.sync="value13"
          type="textarea"
          rows="1"
          label="文本"
        ></cc-field>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">插入按钮</view>
      <view class="demo-item">
        <cc-field :value.sync="value14" label="文本">
          <template #button>
            <cc-button type="success" size="small">发送验证码</cc-button>
          </template>
        </cc-field>
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
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
      value6: '只读状态',
      value7: '禁用状态',
      value8: '',
      value9: '可乐',
      value10: '',
      value11: '遇见你的那天起',
      value12: '',
      value13: '',
      value14: '',
    }
  },
  methods: {
    handleInput(val) {
      console.log(val)
    },
    handleChange(val) {
      console.log(val)
    },
    handleFocus(e) {
      console.log('focus', e)
    },
    handleBlur(e) {
      console.log('blur', e)
    },
    handleClick(e) {
      console.log('click', e)
    },
    handleClear(e) {
      console.log('clear', e)
    },
    clickLeft(e) {
      console.log('clickLeft', e)
    },
    clickRight(e) {
      console.log('clickRight', e)
    },
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
  margin-bottom: 40rpx;
  padding: 20rpx;
  &-title {
    padding: 20rpx;
  }
  &-item {
    padding: 0 5px;
    margin-bottom: 10px;
  }
}
</style>
