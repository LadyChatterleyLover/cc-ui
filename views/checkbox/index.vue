<template>
  <view>
    <view>普通多选框</view>
    <view class="demo">
      <view class="demo-title">基础用法</view>
      <view class="demo-item">
        <cc-checkbox @change="handleChange" :checked.sync="check1" :option="item1"></cc-checkbox>
      </view>
      <view>当前选中值: {{ check1 }}</view>
    </view>

    <view class="demo">
      <view class="demo-title">禁用状态</view>
      <view class="demo-item">
        <cc-checkbox :checked.sync="check2" :option="item2"></cc-checkbox>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">方型单选框</view>
      <view class="demo-item">
        <cc-checkbox :checked.sync="check3" :option="item3"></cc-checkbox>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">自定义颜色</view>
      <view class="demo-item">
        <cc-checkbox :checked.sync="check4" :option="item4"></cc-checkbox>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">自定义图标</view>
      <view class="demo-item">
        <cc-checkbox :checked.sync="check5" :option="item5"></cc-checkbox>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">文本禁用点击</view>
      <view class="demo-item">
        <cc-checkbox :checked.sync="check6" :option="item6"></cc-checkbox>
      </view>
    </view>

    <view>多选框组</view>
    <view class="demo">
      <view class="demo-title">基础用法</view>
      <view class="demo-item">
        <cc-checkbox-group @change="handleChange" :checked.sync="checked1" :list="list1"></cc-checkbox-group>
      </view>
      <view>当前选中值: {{ checked1.join(',') }}</view>
    </view>

    <view class="demo">
      <view class="demo-title">横向排列</view>
      <view class="demo-item">
        <cc-checkbox-group vertical :checked.sync="checked2" :list="list1"></cc-checkbox-group>
      </view>
      <view>当前选中值: {{ checked2 }}</view>
    </view>

    <view class="demo">
      <view class="demo-title">禁用状态</view>
      <view class="demo-item">
        <cc-checkbox-group :checked.sync="checked3" :list="list2"></cc-checkbox-group>
      </view>
      <view>当前选中值: {{ checked3 }}</view>
    </view>

    <view class="demo">
      <view class="demo-title">方型单选框</view>
      <view class="demo-item">
        <cc-checkbox-group :checked.sync="checked4" :list="list3"></cc-checkbox-group>
      </view>
      <view>当前选中值: {{ checked4 }}</view>
    </view>

    <view class="demo">
      <view class="demo-title">自定义颜色</view>
      <view class="demo-item">
        <cc-checkbox-group :checked.sync="checked5" :list="list4"></cc-checkbox-group>
      </view>
      <view>当前选中值: {{ checked5 }}</view>
    </view>

    <view class="demo">
      <view class="demo-title">自定义大小</view>
      <view class="demo-item">
        <cc-checkbox-group :checked.sync="checked6" :list="list5"></cc-checkbox-group>
      </view>
      <view>当前选中值: {{ checked6 }}</view>
    </view>

    <view class="demo">
      <view class="demo-title">自定义图标</view>
      <view class="demo-item">
        <cc-checkbox-group :checked.sync="checked7" :list="list6"></cc-checkbox-group>
      </view>
      <view>当前选中值: {{ checked7 }}</view>
    </view>

    <view class="demo">
      <view class="demo-title">文本禁用点击</view>
      <view class="demo-item">
        <cc-checkbox-group :checked.sync="checked8" :list="list7"></cc-checkbox-group>
      </view>
      <view>当前选中值: {{ checked8 }}</view>
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      item1: {
        label: '选项1'
      },
      item2: {
        label: '选项1',
        disabled: true
      },
      item3: {
        label: '选项1',
        round: false
      },
      item4: {
        label: '选项1',
        incheckedColor: '#39b54a',
        checkedColor: '#ee0a24'
      },
      item5: {
        label: '选项1',
        icon: 'person'
      },
      item6: {
        label: '选项1',
        labelDisabled: true
      },
      check1: false,
      check2: false,
      check3: false,
      check4: false,
      check5: false,
      check6: false,
      check7: false,
      checked1: [1, 2],
      checked2: [1, 3],
      checked3: [1, 2],
      checked4: [],
      checked5: [],
      checked6: [],
      checked7: [],
      checked8: [],
      list1: [
        {
          label: '选项1',
          value: 1
        },
        {
          label: '选项2',
          value: 2
        },
        {
          label: '选项3',
          value: 3
        },
        {
          label: '选项4',
          value: 4
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
        },
        {
          label: '选项3',
          value: 3
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
        },
        {
          label: '选项3',
          value: 3,
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
        },
        {
          label: '选项3',
          value: 3,
          incheckedColor: '#645367',
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
          size: '30',
          round: false
        },
        {
          label: '选项3',
          value: 3,
          size: '30',
          round: false
        },
        {
          label: '选项4',
          value: 4,
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
        },
        {
          label: '选项3',
          value: 3,
          icon: 'chat'
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
        },
        {
          label: '选项3',
          value: 3,
          labelDisabled: true
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
