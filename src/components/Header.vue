<template>
  <div class="header" :style="styles">
    <div class="left">
      <div class="icon-left">
        <i :class="'iconfont '+iconLeft"></i>
      </div>
      <h1>{{title}}</h1>
    </div>
    <div class="icon-right">
      <i :class="'iconfont '+iconRight"></i>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '网易云音乐'
    },
    iconLeft: {
      type: String,
      default: 'icon-fanhui'
    },
    iconRight: {
      type: String,
      default: ''
    },
    styles: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/var.scss';
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: rem(110);
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  background-color: $color-theme;
  padding: 0 rem(25);
  color: #fff;
  h1 {
    @include font(18);
  }
  .left {
    display: flex;
    align-items: center;
  }

  .icon-left,
  .icon-right {
    width: rem(50);
    height: 100%;
    line-height: rem(110);
  }
  .iconfont {
    @include font(22);
  }
}
</style>
