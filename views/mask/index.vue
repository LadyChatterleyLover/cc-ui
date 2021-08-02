<template>
  <view>
    <view>
      <view class="title">基础用法</view>
      <view>
        <cc-mask :show.sync="show1" @click="handleClick"></cc-mask>
        <cc-button @click="open1">打开遮罩层</cc-button>
      </view>
    </view>

    <view>
      <view class="title">嵌套内容</view>
      <view>
        <cc-mask :show.sync="show2">
          <view class="content">
            <view class="block"></view>
          </view>
        </cc-mask>
        <cc-button @click="open2">打开遮罩层</cc-button>
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
      show2: false
    }
  },
  methods: {
    open1() {
      this.show1 = true
    },
    open2() {
      this.show2 = true
    },
    handleClick() {
      console.log('click')
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
.item {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: #{topx(10)};
  view {
    margin: #{topx(5)};
  }
}
.content {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .block {
    width: #{topx(120)};
    height: #{topx(120)};
    background-color: #fff;
  }
}
</style>
