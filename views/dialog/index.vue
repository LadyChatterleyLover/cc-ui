<template>
  <view>
    <view>
      <view class="title">基础用法</view>
      <view class="item">
        <cc-dialog
          :show.sync="show1"
          title="最佳损友"
          content="问我有没有,确实也没有,一直躲避的借口,非什么大仇,为何旧知己到最后,变不到老友"
        ></cc-dialog>
        <cc-button type="primary" @click="open1">提示弹框</cc-button>
      </view>
    </view>

    <view>
      <view class="title">无标题</view>
      <view class="item">
        <cc-dialog :show.sync="show2" content="朋友我当你一秒朋友,朋友,我当你一世朋友"></cc-dialog>
        <cc-button type="primary" @click="open2">提示弹框</cc-button>
      </view>
    </view>

    <view>
      <view class="title">确认弹框</view>
      <view class="item">
        <cc-dialog :show.sync="show3" showCancelButton title="最佳损友" content="严重似情侣讲分手"></cc-dialog>
        <cc-button type="primary" @click="open3">提示弹框</cc-button>
      </view>
    </view>

    <view>
      <view class="title">点击遮罩层可关闭</view>
      <view class="item">
        <cc-dialog :show.sync="show4" title="最佳损友" closeOnClickOverlay content="我有痛快过你有没有"></cc-dialog>
        <cc-button type="primary" @click="open4">提示弹框</cc-button>
      </view>
    </view>

    <view>
      <view class="title">自定义颜色和文字</view>
      <view class="item">
        <cc-dialog
          :show.sync="show5"
          showCancelButton
          confirmText="立即登录"
          cancelText="继续浏览"
          confirmColor="#e54d42"
          cancelColor="#0081ff"
          title="最佳损友"
          content="严重似情侣讲分手"
        ></cc-dialog>
        <cc-button type="primary" @click="open5">提示弹框</cc-button>
      </view>
    </view>

    <view>
      <view class="title">异步关闭</view>
      <view class="item">
        <cc-dialog
          ref="dialog"
          @confirm="confirm"
          :show.sync="show6"
          asyncClose
          showCancelButton
          title="最佳损友"
          content="挂念这旧友"
        ></cc-dialog>
        <cc-button type="primary" @click="open6">提示弹框</cc-button>
      </view>
    </view>

    <view>
      <view class="title">富文本内容</view>
      <view class="item">
        <cc-dialog :show.sync="show7" showCancelButton title="东邪西毒">
          <template #content>
            <view style="height: 300rpx" v-html="content"></view>
          </template>
        </cc-dialog>
        <cc-button type="primary" @click="open7">提示弹框</cc-button>
      </view>
    </view>

    <view>
      <view class="title">自定义按钮</view>
      <view class="item">
        <cc-dialog
          :show.sync="show8"
          asyncClose
          showCancelButton
          title="东邪西毒"
          content="看见他走的时候,我的内心在嫉妒"
        >
          <template #button>
            <view class="btn" @click="clickButton">确认</view>
          </template>
        </cc-dialog>
        <cc-button type="primary" @click="open8">提示弹框</cc-button>
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
      content: `
              <span>
                嫣: 告诉我,你最爱的女人是哪一位?  
              </span>
              <span>
                峰: 不是你咯。  
              </span>
            `
    }
  },
  methods: {
    confirm() {
      setTimeout(() => {
        this.$refs.dialog.close()
      }, 3000)
    },
    clickButton() {
      this.show8 = false
    },
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
.btn {
  background: linear-gradient(to right, #ff6034, #ee0a24);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 66rpx;
  width: 92%;
  margin-left: 4%;
  border-radius: 48rpx;
  font-size: 14px;
}
</style>
