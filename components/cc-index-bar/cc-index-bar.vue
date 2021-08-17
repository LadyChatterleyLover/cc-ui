<template>
  <view class="cc-index-bar">
    <view class="cc-index-bar-side">
      <cc-index-anchor :currentIndex='currentIndex' @click="clickItem" v-for="(item, index) in indexList" :key="index" :index="item"></cc-index-anchor>
    </view>
    <scroll-view scroll-y style="height: 100vh" scroll-with-animation :scroll-into-view='id'>
      <view :id='`cc-index-anchor-item-${currentIndex}`'>
        <slot></slot>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'cc-index-bar',
  components: {},
  props: {
    indexList: {
      type: Array,
      default: () => ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    }
  },
  data() {
    return {
      // 当前高亮的索引
      currentIndex: this.indexList[0],
      id: ''
    }
  },
  methods: {
    clickItem(item) {
      this.id = 'cc-index-anchor-item-' + item
      this.currentIndex = item
      this.$emit('select', item)
    }
  },
  mounted() {
    
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
    &-active {
      color: #0081ff;
    }
  }
}
</style>
