<template>
  <view>
    <view>
      <view class="title">基础用法</view>
      <view class="item">
        <cc-action-sheet :list="list1" :show.sync="show1"></cc-action-sheet>
        <cc-button @click="open1">打开操作列表</cc-button>
      </view>
    </view>

    <view>
      <view class="title">圆角菜单</view>
      <view class="item">
        <cc-action-sheet :list="list1" round :show.sync="show2"></cc-action-sheet>
        <cc-button @click="open2">打开操作列表</cc-button>
      </view>
    </view>

    <view>
      <view class="title">描述信息</view>
      <view class="item">
        <cc-action-sheet :list="list2" description="这是一段描述信息" :show.sync="show3"></cc-action-sheet>
        <cc-button @click="open3">打开操作列表</cc-button>
      </view>
    </view>

    <view>
      <view class="title">取消按钮</view>
      <view class="item">
        <cc-action-sheet :list="list1" showCancel :show.sync="show4"></cc-action-sheet>
        <cc-button @click="open4">打开操作列表</cc-button>
      </view>
      <view class="item">
        <cc-action-sheet closeable :list="list1" showCancel :show.sync="show5"></cc-action-sheet>
        <cc-button @click="open5">关闭按钮</cc-button>
      </view>
      <view class="item">
        <cc-action-sheet :closeOnClickAction="false" :list="list1" showCancel :show.sync="show6"></cc-action-sheet>
        <cc-button @click="open6">点击取消按钮不可关闭</cc-button>
      </view>
      <view class="item">
        <cc-action-sheet cancelText="关闭" :list="list1" showCancel :show.sync="show7"></cc-action-sheet>
        <cc-button @click="open7">取消文字</cc-button>
      </view>
    </view>

    <view>
      <view class="title">禁用和自定义样式</view>
      <view class="item">
        <cc-action-sheet closeabled :list="list3" :show.sync="show8"></cc-action-sheet>
        <cc-button @click="open8">打开操作列表</cc-button>
      </view>
    </view>

    <view>
      <view class="title">自定义标题</view>
      <view class="item">
        <cc-action-sheet closeable title="标题" :list="list1" :show.sync="show9"></cc-action-sheet>
        <cc-button @click="open9">自定义标题</cc-button>
      </view>
    </view>

    <view>
      <view class="title">自定义内容</view>
      <view class="item">
        <cc-action-sheet :list="list1" :show.sync="show10">
          <template #content>
            <view class="content">内容</view>
          </template>
        </cc-action-sheet>
        <cc-button @click="open10">自定义内容</cc-button>
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
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      show7: false,
      show8: false,
      show9: false,
      show10: false,
      show11: false,
      list1: [
        {
          name: '选项一'
        },
        {
          name: '选项二'
        },
        {
          name: '选项三'
        }
      ],
      list2: [
        {
          name: '选项一'
        },
        {
          name: '选项二'
        },
        {
          name: '选项三',
          subname: '描述信息'
        }
      ],
      list3: [
        {
          name: '选项一',
          color: '#ee0a24'
        },
        {
          name: '选项二',
          disabled: true
        },
        {
          name: '选项三',
          fontSize: 50
        },
        {
          name: '加载选项',
          loading: true
        }
      ]
    }
  },
  methods: {
    open1() {
      this.show1 = true
    },
    open2() {
      this.show2 = true
    },
    open3() {
      this.show3 = true
    },
    open4() {
      this.show4 = true
    },
    open5() {
      this.show5 = true
    },
    open6() {
      this.show6 = true
    },
    open7() {
      this.show7 = true
    },
    open8() {
      this.show8 = true
    },
    open9() {
      this.show9 = true
    },
    open10() {
      this.show10 = true
    },
    open11() {
      this.show11 = true
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
  margin: 20rpx;
}
.item {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 20rpx 0;
  view {
    margin: 10rpx;
  }
}
.content {
  padding: 32rpx 32rpx 320rpx;
}
</style>
