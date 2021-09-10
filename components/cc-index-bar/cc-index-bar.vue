<template>
  <view class="cc-index-bar">
    <view class="cc-index-bar-side" ref="side"><cc-index-anchor @click="clickItem" v-for="(item, index) in indexList" :key="index" :index="item"></cc-index-anchor></view>
    <view><slot></slot></view>
  </view>
</template>

<script>
export default {
  name: 'cc-index-bar',
  components: {
    
  },
  props: {
    indexList: {
      type: Array,
      default: () => ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    }
  },
  data() {
    return {
      // 当前高亮的索引
      currentIndex: 0,
      isScroll: false
    }
  },
  methods: {
    clickItem(item) {
      this.isScroll = false
      // 右侧内容导航高亮
      let index = this.indexList.findIndex(i => i === item)
      this.currentIndex = index
      this.$slots.default.map((item, idx) => {
        Array.from(item.elm.childNodes).map((child, i) => {
          if (child.children[0]) child.children[0].classList.replace('cc-index-anchor-item', 'cc-index-bar-anchor')
        })
      })
      uni.pageScrollTo({
        scrollTop: this.$slots.default[index].elm.offsetTop,
        duration: 0
      })
      this.$emit('select', item)
    },
  },
  mounted() {
    // #ifdef H5
    // 处理插槽的内容
    this.$slots.default.map((item, index) => {
      Array.from(item.elm.childNodes).map((child, i) => {
        if (child.children[0]) {
          child.id = `cc-cc-index-anchor-${i}`
          child.children[0].classList.replace('cc-index-anchor-item', 'cc-index-bar-anchor')
        }
      })
    })
    // #endif
   // #ifdef MP-WEIXIN
   console.log(this)
   // #endif
  },
  onLoad() {},
  onShow() {},
  filters: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss">
.cc-index-bar {
  &-side {
    position: fixed;
    top: 50%;
    right: 0;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: translateY(-50%);
    cursor: pointer;
    user-select: none;
  }
}
</style>
