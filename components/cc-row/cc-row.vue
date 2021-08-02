<template>
    <view
      @click='handleClick'
      class="cc-row"
      :style="{
        'margin-left': margin,
        'margin-right': margin,
        'justify-content': justifyValue
      }"
    >
      <slot></slot>
    </view>
</template>

<script>
export default {
  name: 'cc-row',
  components: {},
  props: {
    gutter: {
      type: [Number, String],
      default: ''
    },
    justify: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  methods: {
    handleClick() {
      this.$emit('click')
    }
  },
  mounted() {
    
  },
  onLoad() {},
  onShow() {},
  filters: {},
  computed: {
    margin() {
      if (this.gutter) {
        return '-' + this.gutter + 'rpx'
      }
      return 0
    },
    justifyValue() {
      if (!this.justify) return 'flex-start'
      else if (this.justify === 'end') return 'flex-end'
      else return this.justify
    }
  },
  watch: {}
}
</script>

<style scoped lang="scss">
.cc-row {
  display: flex;
  height: 100%;
}
</style>
