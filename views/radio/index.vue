<template>
  <view>
    <view class="demo">
      <view class="demo-title">基础用法</view>
      <view class="demo-item">
        <cc-radio @change="onChange" :value.sync="value1" :list="list1"></cc-radio>
      </view>
      <view>当前选中值: {{ value1 }}</view>
    </view>

    <view class="demo">
      <view class="demo-title">横向排列</view>
      <view class="demo-item">
        <cc-radio vertical :value.sync="value1" :list="list1"></cc-radio>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">禁用状态</view>
      <view class="demo-item">
        <cc-radio :value.sync="value2" :list="list2"></cc-radio>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">方型单选框</view>
      <view class="demo-item">
        <cc-radio :value.sync="value1" :list="list3"></cc-radio>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">自定义颜色</view>
      <view class="demo-item">
        <cc-radio :value.sync="value1" :list="list4"></cc-radio>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">自定义大小</view>
      <view class="demo-item">
        <cc-radio :value.sync="value1" :list="list5"></cc-radio>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">自定义图标</view>
      <view class="demo-item">
        <cc-radio :value.sync="value1" :list="list6"></cc-radio>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">文本禁用点击</view>
      <view class="demo-item">
        <cc-radio :value.sync="value1" :list="list7"></cc-radio>
      </view>
    </view>
  </view>
</template>

<script>
import ccRadio from '../../components/cc-radio/cc-radio.vue'
export default {
  components: {
    ccRadio
  },
  props: {},
  data() {
    return {
      list1: [
        {
          label: '选项1',
          value: 1
        },
        {
          label: '选项2',
          value: 2
        }
      ],
      list2: [
        {
          label: '选项1',
          value: 1,
          disabled: true
        },
        {
          label: '选项2',
          value: 2,
          disabled: true
        }
      ],
      list3: [
        {
          label: '选项1',
          value: 1,
          round: false
        },
        {
          label: '选项2',
          value: 2,
          round: false
        }
      ],
      list4: [
        {
          label: '选项1',
          value: 1,
          incheckedColor: '#39b54a',
          checkedColor: '#ee0a24'
        },
        {
          label: '选项2',
          value: 2,
          incheckedColor: '#39b54a',
          checkedColor: '#ee0a24'
        }
      ],
      list5: [
        {
          label: '选项1',
          value: 1,
          size: '30'
        },
        {
          label: '选项2',
          value: 2,
          size: '30'
        }
      ],
      list6: [
        {
          label: '选项1',
          value: 1,
          icon: 'person'
        },
        {
          label: '选项2',
          value: 2,
          icon: 'search'
        }
      ],
      list7: [
        {
          label: '选项1',
          value: 1,
          labelDisabled: true
        },
        {
          label: '选项2',
          value: 2,
          labelDisabled: true
        }
      ],
      value1: 1,
      value2: 2
    }
  },
  methods: {
    onChange(val) {
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
