<template>
  <view>
    <view class="demo">
      <view class="demo-title">基础用法</view>
      <view class="demo-item">
        <cc-checker :list="list1" :value.sync="value1" @change="handleChange"></cc-checker>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">多选</view>
      <view class="demo-item">
        <cc-checker :list="list1" :value="value2" multiple @change="handleChange"></cc-checker>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">圆角类型</view>
      <view class="demo-item">
        <cc-checker :list="list2" :value="value1"></cc-checker>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">只读状态</view>
      <view class="demo-item">
        <cc-checker :list="list3" :value="value1"></cc-checker>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">禁用状态</view>
      <view class="demo-item">
        <cc-checker :list="list4" :value="value1"></cc-checker>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">徽标</view>
      <view class="demo-item">
        <cc-checker :list="list5" :value="value1"></cc-checker>
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
      value1: 0,
      value2: [0, 1],
      list1: [
        {
          label: '彷徨',
          value: 0
        },
        {
          label: '呐喊',
          value: 1
        },
        {
          label: '动物凶猛',
          value: 2
        }
      ],
      list2: [
        {
          label: '彷徨',
          value: 0,
          round: true
        },
        {
          label: '呐喊',
          value: 1,
          round: true
        },
        {
          label: '动物凶猛',
          value: 2,
          round: true
        }
      ],
      list3: [
        {
          label: '彷徨',
          value: 0,
          readonly: true
        },
        {
          label: '呐喊',
          value: 1,
          readonly: true
        },
        {
          label: '动物凶猛',
          value: 2,
          readonly: true
        }
      ],
      list4: [
        {
          label: '彷徨',
          value: 0,
          disabled: true
        },
        {
          label: '呐喊',
          value: 1,
          disabled: true
        },
        {
          label: '动物凶猛',
          value: 2,
          disabled: true
        }
      ],
      list5: [
        {
          label: '彷徨',
          value: 0,
          info: '99'
        },
        {
          label: '呐喊',
          value: 1,
          disabled: true
        },
        {
          label: '动物凶猛',
          value: 2,
          info: 'ok',
          round: true
        }
      ]
    }
  },
  methods: {
    handleChange(val) {
      console.log(val)
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
  margin-bottom: #{topx(20)};
  padding: #{topx(10)};
  &-title {
    padding: #{topx(10)};
  }
  &-item {
    padding: 0 5px;
    margin-bottom: 10px;
  }
}
</style>
