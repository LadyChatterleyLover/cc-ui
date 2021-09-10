<template>
  <view class="cc-time-line"><slot></slot></view>
</template>

<script>
export default {
  name: 'cc-time-line',
  components: {},
  props: {},
  data() {
    return {}
  },
  methods: {},
  mounted() {},
  onLoad() {},
  onShow() {},
  filters: {},
  computed: {},
  watch: {}
}
</script>

<style scoped lang="scss">
.cc-time-line {
  position: relative;
  &::before {
    content: ' ';
    position: absolute;
    left: 20rpx;
    top: 4px;
    width: 1px;
    bottom: 0;
    border-left: 1px solid #ddd;
    transform-origin: 0 0;
    -webkit-transform: scaleX(0.5);
  }
}
</style>
