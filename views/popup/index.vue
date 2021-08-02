<template>
  <view>
    <view>
      <view class="demo-title">基础语法</view>
      <view class="demo-item">
        <cc-popup :show.sync="show1">红是朱砂痣烙印心口</cc-popup>
        <cc-button @click="open1" size="small">打开弹框</cc-button>
      </view>
    </view>

    <view>
      <view class="demo-title">弹出框方向</view>
      <view class="demo-item">
        <cc-popup :show.sync="show2" mode="left">红是蚊子血般平庸</cc-popup>
        <cc-button @click="open2">左边打开</cc-button>
      </view>
      <view class="demo-item">
        <cc-popup :show.sync="show3" mode="right">
          <view class="flex">从背后抱你的时候</view>
        </cc-popup>
        <cc-button @click="open3">右边打开</cc-button>
      </view>
      <view class="demo-item">
        <cc-popup :show.sync="show4" mode="top">期待的却是他的面容</cc-popup>
        <cc-button @click="open4">顶部打开</cc-button>
      </view>
      <view class="demo-item">
        <cc-popup :show.sync="show5" mode="bottom">
          <view>握在手中却流失于指缝</view>
        </cc-popup>
        <cc-button @click="open5">底部打开</cc-button>
      </view>
    </view>

    <view>
      <view class="demo-title">关闭按钮</view>
      <view class="demo-item">
        <cc-popup :show.sync="show6" closeable>我不好爱</cc-popup>
        <cc-button @click="open6">关闭按钮</cc-button>
      </view>
      <view class="demo-item">
        <cc-popup :show.sync="show7" width="300" mode="left" closeable>你又美丽又伟大</cc-popup>
        <cc-button @click="open7">关闭按钮</cc-button>
      </view>
      <view class="demo-item">
        <cc-popup closeIcon="search" :show.sync="show8" closeable>得你一人越来越可爱</cc-popup>
        <cc-button @click="open8">自定义关闭图标</cc-button>
      </view>
    </view>

    <view>
      <view class="demo-title">自定义宽高</view>
      <view class="demo-item">
        <cc-popup width="600" :show.sync="show9" closeable>烟味</cc-popup>
        <cc-button @click="open9">自定义宽度</cc-button>
      </view>
      <view class="demo-item">
        <cc-popup width="600" :show.sync="show10" mode="left" closeable>颓废,混杂着烟味</cc-popup>
        <cc-button @click="open10">自定义宽度</cc-button>
      </view>
      <view class="demo-item">
        <cc-popup height="600" mode="bottom" :show.sync="show11" closeable>
          <view class="content">我满脸胡渣</view>
        </cc-popup>
        <cc-button @click="open11">自定义高度</cc-button>
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
.demo-title {
  margin: #{topx(10)};
}
.demo-item {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: #{topx(10)};
  view {
    margin: #{topx(5)};
  }
}
.flex {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.content {
  height: 1000rpx;
}
</style>
