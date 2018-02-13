<template>
  <div class="header">
    <div class="icon" @click="goBack">
      <i :class="'iconfont '+iconLeft"></i>
    </div>
    <h1>{{title}}</h1>
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
  },

  methods: {
    goBack () {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/var.scss';
.header {
  position: relative;
  z-index: 10;
  height: rem(110);
  background-color: transparent;
  display: flex;
  align-items: center;
  background-color: $color-theme;
  padding: 0 rem(25);
  color: $color-text-theme;
  h1 {
    @include font(18);
  }

  .icon {
    width: rem(50);
    height: 100%;
    line-height: rem(110);
  }
  .iconfont {
    @include font(22);
  }
}
</style>
