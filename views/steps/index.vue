<template>
  <view>
    <view class="demo">
      <view class="demo-title">基础用法</view>
      <view class="demo-item">
        <cc-steps :list="list1" :active="active"></cc-steps>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">展示点</view>
      <view class="demo-item">
        <cc-steps :list="list1" dot :active="active"></cc-steps>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">自定义图标</view>
      <view class="demo-item">
        <cc-steps :list="list2" :active="active"></cc-steps>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">自定义颜色</view>
      <view class="demo-item">
        <cc-steps :list="list3" :active="active"></cc-steps>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">描述信息</view>
      <view class="demo-item">
        <cc-steps :list="list4" :active="active"></cc-steps>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">竖向</view>
      <view class="demo-item">
        <cc-steps :list="list4" :active="active" vertical></cc-steps>
      </view>
    </view>

    <view class="demo-btn">
      <view class="demo-btn-item" @click="pre">
        <cc-button round type="primary" size="small">上一步</cc-button>
      </view>
      <view class="demo-btn-item" @click="next">
        <cc-button round type="error" size="small">下一步</cc-button>
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
      active: 0,
      list1: [
        {
          name: '下单'
        },
        {
          name: '出库'
        },
        {
          name: '运输'
        },
        {
          name: '签收'
        }
      ],
      list2: [
        {
          name: '下单',
          icon: 'chat'
        },
        {
          name: '出库',
          icon: 'search'
        },
        {
          name: '运输',
          icon: 'person'
        },
        {
          name: '签收',
          icon: 'heart'
        }
      ],
      list3: [
        {
          name: '下单',
          activeColor: '#fa2c19'
        },
        {
          name: '出库',
          activeColor: '#fa2c19'
        },
        {
          name: '运输',
          activeColor: '#fa2c19'
        },
        {
          name: '签收',
          activeColor: '#fa2c19'
        }
      ],
      list4: [
        {
          name: '下单',
          content: '描述信息'
        },
        {
          name: '出库',
          content: '描述信息'
        },
        {
          name: '运输',
          content: '描述信息'
        },
        {
          name: '签收',
          content: '描述信息'
        }
      ],
    }
  },
  methods: {
    pre() {
      this.active--
      if (this.active === 0) this.active = 0
    },
    next() {
      this.active++
      if (this.active === 3) this.active = 3
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
  &-title {
    padding: #{topx(10)};
  }
  &-item {
    margin-left: #{topx(2)};
    view {
      margin-left: #{topx(15)};
    }
  }
  &-btn {
    display: flex;
    align-items: center;
    &-item {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
