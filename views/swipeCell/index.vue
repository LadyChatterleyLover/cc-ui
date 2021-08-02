<template>
  <view>
    <cc-swipe-cell>
      <cc-cell :border="false" title="单元格" value="内容" />
      <template #right>
        <cc-button  type="error">删除</cc-button>
        <cc-button  type="primary">收藏</cc-button>
      </template>
    </cc-swipe-cell>
  </view>
</template>

<script>
export default {
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

<style scoped lang="scss"></style>
