<template>
  <view class="cc-avatar" :style="{ width: avatarWidth + 'px', height: avatarHeight + 'px', borderRadius: round ? '100%' : '0' }">
    <img :mode="imgMode" @error="handleError" v-if="src && !error" :style="{ borderRadius: round ? '100%' : '5px' }" class="cc-avatar-img" :src="src" />
    <slot v-else></slot>
  </view>
</template>

<script>
export default {
  name: 'cc-avatar',
  components: {},
  props: {
    // 头像路径
      src: {
        type: String,
        default: ''
      },
      // 是否圆形图片
      round: {
        type: Boolean,
        default: true
      },
      // 尺寸
      size: {
        type: String,
        default: ''
      },
      // 图片模式
      imgMode: {
        type: String,
        default: 'aspectFill'
      }
  },
  data() {
    return {
      error: false
    }
  },
  methods: {
    handleError() {
      this.error = true
        this.$emit('error')
    }
  },
  mounted() {

  },
  onLoad() {

  },
  onShow() {

  },
  filters: {},
  computed: {
    avatarWidth() {
      if (!this.size) return 38
        else if (this.size === 'large') return 60
        else if (this.size === 'small') return 30
        else return this.size
    },
    avatarHeight() {
      if (!this.size) return 38
        else if (this.size === 'large') return 60
        else if (this.size === 'small') return 30
        else return this.size
    }
  },
  watch: {},
}
</script>

<style scoped lang="scss">
  .cc-avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: #fff;
    background: #c0c4cc;
    &-img {
      width: 100%;
      height: 100%;
    }
  }
</style>
