<template>
  <view
    @click.stop='handleClick'
    class="cc-col"
    :style="{
      width,
      'margin-left': offsetValue,
      'padding-left': padding,
      'padding-right': padding
    }"
  >

    <slot></slot>
  </view>
</template>

<script>
export default {
  name: 'cc-col',
  components: {},
  props: {
    span: {
      type: [Number, String],
      default: ''
    },
    offset: {
      type: [Number, String],
      default: ''
    },
  },
  data() {
    return {
      gutter: ''
    }
  },
  methods: {
    handleClick() {
      this.$emit('click')
    }
  },
  mounted() {
    let parent = null
    // #ifdef H5
    parent = this.$parent.$parent
    // #endif
    // #ifndef H5
    parent = this.$parent
    // #endif
    this.gutter = parent.gutter
  },
  onLoad() {},
  onShow() {},
  filters: {},
  computed: {
    width() {
      return (this.span / 24) * 100 === 0 ? '100%' : (this.span / 24) * 750 + 'rpx'
    },
    padding() {
      if (this.gutter) {
        return this.gutter + 'rpx'
      }
      return 0
    },
    offsetValue() {
      if (this.offset) {
          return (this.offset / 24 * 750) + 'rpx'
        }
        return 0
    }
  },
  watch: {}
}
</script>

<style scoped lang="scss">
.cc-col {
  width: 100%;
}
</style>
