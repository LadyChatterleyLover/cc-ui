<template>
  <view class="cc-full-tabs">
    <cc-tabs :list="list" :current="current" @change="changeTabs"></cc-tabs>
    <slot></slot>
  </view>
</template>

<script>
export default {
  components: {},
  props: {
    list: {
      type: Array,
      required: true
    },
    current: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      
    }
  },
  methods: {
    changeTabs(val) {
      this.$emit('update:current', val)
    }
  },
  mounted() {},
  onLoad() {},
  onShow() {},
  filters: {},
  computed: {},
  watch: {
  }
}
</script>

<style scoped lang="scss">
.cc-full-tabs {
}
</style>
