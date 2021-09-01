<template>
  <view class="cc-sticky" >
    <view class="cc-sticky-content"><slot></slot></view>
  </view>
</template>

<script>
export default {
  name: 'cc-sticky',
  components: {},
  props: {
    // 吸顶时与顶部的距离
    offsetTop: {
      type: [String, Number],
      default: 0
    },
    position: {
      type: String,
      default: 'top'
    }
  },
  data() {
    return {
    }
  },
  methods: {
  },
  mounted() {},
  onLoad() {},
  onShow() {},
  filters: {},
  computed: {
 
  },
  watch: {}
}
</script>

<style scoped lang="scss">
  .cc-sticky {
    position: sticky;
    z-index: 999;
  }
</style>
