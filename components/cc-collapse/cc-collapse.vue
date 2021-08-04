<template>
  <view class="cc-collapse">
    <view class="cc-collapse-item" v-for="(item, index) in cloneList" :key="index">
      <cc-cell
        :title="item.title"
        :value="item.value"
        :label="item.label"
        :icon="item.icon"
        :border="item.border"
        :size="item.size"
        :iconSize="item.iconSize"
        @click="clickItem(item, index)"
        :isLink="false"
        :class="{ disabled: item.disabled }"
        :name="item.name"
      >
        <template #title>
          <!-- #ifdef H5 -->
          <slot :name="item.titleSlot" v-if="item.titleSlot"></slot>
          <!-- #endif -->
        </template>
        <template #value>
          <!-- #ifdef H5 -->
          <slot :name="item.rightSlot" v-if="item.rightSlot"></slot>
          <!-- #endif -->
        </template>
        <template #right-icon>
          <view v-if="item.arrow" class="cc-collapse-item-icon">
            <view class="cc-collapse-item-icon-content" :class="{ 'cc-collapse-item-icon-active': item.show }">
              <cc-icon :color="item.disabled ? '#c8c9cc' : item.arrowColor ? item.arrowColor : '#969799'" type="arrowdown" :size="item.arrowSize ? item.arrowSize : 16"></cc-icon>
            </view>
          </view>
        </template>
      </cc-cell>
      <view class="cc-collapse-item-wrap" :style="{ height: item.show ? height + 'px' : 0 }">
        <view :id="`cc-collapse-item-content-${uid}-${index}`" class="cc-collapse-item-content">
          <!-- #ifdef H5 -->
          <slot v-if="item.contentSlot" :name="item.contentSlot"></slot>
          <view v-else>{{ item.content }}</view>
          <!-- #endif -->
         <!-- #ifndef H5 -->
          <view>{{ item.content }}</view>
         <!-- #endif -->
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import cloneDeep from 'lodash/cloneDeep'
export default {
  name: 'cc-collapse',
  components: {},
  props: {
    // 选项数组
    list: {
      type: Array,
      required: true
    },
    // 默认展开选项
    current: {
      type: [String, Number],
      default: ''
    },
    // 手风琴模式
    accordion: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      height: 0,
      cloneList: [],
      uid: '',
      active: 0
    }
  },
  methods: {
    // 初始化选项
    init() {
      this.$nextTick(() => {
        this.cloneList.map((item, index) => {
          if (item.show === undefined) {
            this.$set(item, 'show', false)
          }
          if (item.arrow === undefined) {
            this.$set(item, 'arrow', true)
          }
          if (item.border === undefined) {
            this.$set(item, 'border', true)
          }
          if (!item.iconSize) {
            this.$set(item, 'iconSize', '16')
          }
          if (!item.arrowColor) {
            this.$set(item, 'arrowColor', '#969799')
          }
          if (!item.name) {
            this.$set(item, 'name', index)
          }
        })

        if (!this.current) {
          this.active = ''
        } else {
          if (typeof this.current === 'number') {
            this.active = this.current
          } else {
            this.active = this.list.findIndex((item, index) => item.name === this.current || index === Number(this.current))
          }
        }
      })
    },
    // 点击每个选项
    clickItem(item, index) {
      if (this.accordion) {
        this.active = index
        item.show = !item.show
        this.cloneList.map(i => {
          if (this.active !== index) i.show = false
        })
      } else {
        item.show = !item.show
      }
      this.$nextTick(() => {
        // #ifdef H5
        let content = document.getElementById(`cc-collapse-item-content-${this.uid}-${index}`)
        this.height = content.offsetHeight
        // #endif
        
        // #ifndef H5
        this.$nextTick(() => {
          uni
            .createSelectorQuery()
            .in(this)
            .select('.cc-collapse-item-content')
            .boundingClientRect()
            .exec(res => {
              this.height = res[0].height
            })
        })
        // #endif
      })
    }
  },
  mounted() {
    this.uid = this._uid
    this.cloneList = cloneDeep(this.list)
    this.init()
  },
  onLoad() {},
  onShow() {},
  filters: {},
  computed: {},
  watch: {
    active(val) {
      this.cloneList.map((item, index) => {
        if (val === index) {
          item.show = true
          // #ifdef H5
          let content = document.getElementById(`cc-collapse-item-content-${this.uid}-${index}`)
          this.height = content.offsetHeight
          // #endif
          // #ifdef MP-WEIXIN
          this.$nextTick(() => {
            uni
              .createSelectorQuery()
              .in(this)
              .select('.cc-collapse-item-content')
              .boundingClientRect()
              .exec(res => {
                this.height = res[0].height
              })
          })
          // #endif
        } else item.show = false
      })
    }
  }
}
</script>

<style scoped lang="scss">
.cc-collapse {
  width: 100%;
  .cc-collapse-item {
    width: 100%;
    &-icon {
      display: flex;
      align-items: center;
      &-content {
        transition: all 0.3s;
        margin-left: 8rpx;
      }
      &-active {
        transform: rotate(180deg);
      }
    }
    &-wrap {
      height: 0;
      transition: all 0.3s;
      overflow: hidden;
    }
    &-content {
      padding: 24rpx 32rpx;
      color: #969799;
      font-size: 14px;
    }
  }
  .disabled {
    color: #c8c9cc;
    pointer-events: none;
    cursor: not-allowed;
  }
}
</style>
