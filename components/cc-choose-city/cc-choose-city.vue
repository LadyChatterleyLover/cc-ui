<template>
  <cc-popup :show.sync="visible" mode="bottom" height="700">
    <view class="cc-choose-city">
      <view class="cc-choose-city-title">
        <view class="cc-choose-city-title-item" v-for="(item, index) in titles" :key="index" @click="clickTitle(item, index)">
          <view class="cc-choose-city-title-item-name">{{ item.name }}</view>
          <view class="cc-choose-city-title-item-line" v-if="currentTitle === index"></view>
        </view>
      </view>
      <view class="cc-choose-city-container" :style="{ transform: `translateX(${-translateX}%)`, height: height + 'px' }">
        
        <view class="cc-choose-city-city" :scroll-top="0">
          <view class="cc-choose-city-city-item" v-for="(item, index) in area" :key="index" @click="clickItem(item, index, 0)">
            <view class="cc-choose-city-city-item-name" :class="{ 'cc-choose-city-city-item-active': currentIndex1 === index }">{{ item.name }}</view>
            <cc-icon type="checkmarkempty" color="#0081ff" size="18" v-if="currentIndex1 === index"></cc-icon>
          </view>
        </view>

        <view class="cc-choose-city-city" :scroll-top="0">
          <view class="cc-choose-city-city-item" v-for="(item, index) in currentItem1.children" :key="index" @click="clickItem(item, index, 1)">
            <view class="cc-choose-city-city-item-name" :class="{ 'cc-choose-city-city-item-active': currentIndex2 === index }">{{ item.name }}</view>
            <cc-icon type="checkmarkempty" color="#0081ff" size="18" v-if="currentIndex2 === index"></cc-icon>
          </view>
        </view>

        <view class="cc-choose-city-city" :scroll-top="0" v-if="currentItem2">
          <view class="cc-choose-city-city-item" v-for="(item, index) in currentItem2.children" :key="index" @click="clickItem(item, index, 2)">
            <view class="cc-choose-city-city-item-name" :class="{ 'cc-choose-city-city-item-active': currentIndex3 === index }">{{ item.name }}</view>
            <cc-icon type="checkmarkempty" color="#0081ff" size="18" v-if="currentIndex3 === index"></cc-icon>
          </view>
        </view>

        <view class="cc-choose-city-city" :scroll-top="0"  v-if="currentItem3">
          <view class="cc-choose-city-city-item" v-for="(item, index) in currentItem3.children" :key="index" @click="clickItem(item, index, 3)">
            <view class="cc-choose-city-city-item-name" :class="{ 'cc-choose-city-city-item-active': currentIndex4 === index }">{{ item.name }}</view>
            <cc-icon type="checkmarkempty" color="#0081ff" size="18" v-if="currentIndex4 === index"></cc-icon>
          </view>
        </view>
      
      
      
      
      </view>
    </view>
  </cc-popup>
</template>

<script>
import area from './area.json'
export default {
  components: {},
  props: {
    // 是否显示城市选择列表
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      area,
      visible: this.show,
      titles: [
        {
          name: area[0].name
        }
      ],
      currentTitle: 0,
      currentItem1: area[0],
      currentItem2: null,
      currentItem3: null,
      currentIndex1: -1,
      currentIndex2: -1,
      currentIndex3: -1,
      currentIndex4: -1,
      translateX: 0,
      height: 40 * area.length,
    }
  },
  methods: {
    clickTitle(item, index) {
      this.currentTitle = index
      this.translateX = 25 * index
    },
    clickItem(item, index, level) {
      this.currentIndex2 = -1
      this.currentIndex3 = -1
      this.currentIndex4 = -1
      this[`currentItem${level + 1}`] = item
      this[`currentIndex${level + 1}`] = index
      this.currentTitle = level + 1
      this.translateX = 25 * (level + 1)
      this.titles[level].name = item.name
      if (this.titles.length <= level + 1) {
        this.titles.push({
          name: '请选择'
        })
      }
      if (level === 0) {
        this.titles.length = 2
      }
      if (level === 1) {
        this.titles.length = 3
      }
      if (level === 3) {
        this.visible = false
        this.titles = [
          {
            name: area[0].name
          }
        ]
        this.$emit('select', [
          {
            name: this.currentItem1.name,
            code: this.currentItem1.code
          },
          {
            name: this.currentItem2.name,
            code: this.currentItem2.code
          },
          {
            name: this.currentItem3.name,
            code: this.currentItem3.code
          },
          {
            name: this.currentItem4.name,
            code: this.currentItem4.code
          }
        ])
        setTimeout(() => {
          this.currentTitle = 0
          this.currentItem1 = area[0]
          this.currentItem2 = null
          this.currentItem3 = null
          this.currentIndex1 = -1
          this.currentIndex2 = -1
          this.currentIndex3 = -1
          this.currentIndex4 = -1
          this.translateX = 0
        }, 200)
      }
    }
  },
  mounted() {},
  onLoad() {},
  onShow() {},
  filters: {},
  computed: {},
  watch: {
    show(val) {
      this.visible = val
    },
    visible(val) {
      this.$emit('update:show', val)
    },
    currentTitle(val) {
      if (val === 0) this.height = 40 * area.length + 33
    },
    currentItem1: {
      handler(val) {
        if (val) this.height = 40 * val.children.length + 33
      },
      deep: true
    },
    currentItem2: {
      handler(val) {
        if (val) this.height = 40 * val.children.length + 33
      },
      deep: true
    },
    currentItem3: {
      handler(val) {
        if (val) this.height = 40 * val.children.length + 33
      },
      deep: true
    },
  }
}
</script>

<style scoped lang="scss">
.cc-choose-city {
  height: 700rpx;
  overflow-x: hidden;
  &-container {
    width: 400%;
    overflow-x: hidden;
    transition: all 0.5s;
    display: flex;
  }
  &-title {
    display: flex;
    align-items: center;
    position: fixed;
    left: 10rpx;
    right: 0;
    top: 0;
    z-index: 99;
    background: #fff;
    &-item {
      height: 33px;
      line-height: 33px;
      transition-duration: 0.5s;
      padding: 0px 12px;
      position: relative;
      &-name {
        color: #323233;
        font-weight: 500;
        font-size: 14px;
      }
      &-line {
        position: absolute;
        width: 44rpx;
        transition-duration: 0.5s;
        background-color: #0081ff;
        height: 4rpx;
        border-radius: 4rpx;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
  &-city {
    margin-top: 80rpx;
    font-size: 14px;
    overflow: scroll;
    width: 25%;
    box-sizing: border-box;
    padding: 0 30rpx;
    overflow: hidden;
    &-item {
      padding: 20rpx 0;
      font-size: 14px;
      line-height: 40rpx;
      display: flex;
      align-items: center;
      justify-content: space-between;
      &-active {
        color: #0081ff;
      }
    }
  }
}
/* #ifdef H5 */
::-webkit-scrollbar {
  display: none;
  width: 0 !important;
  height: 0 !important;
  -webkit-appearance: none;
  background: transparent;
}
/* #endif */
</style>
