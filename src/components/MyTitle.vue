<template>
  <div class="container">
    <router-link :to="link">
      <div class="label"></div>
      <h2>{{MTitle}}</h2>
      <i class="iconfont icon-goto"></i>
    </router-link>
  </div>
</template>
<script>
export default {
  props: {
    MTitle: {
      type: String,
      default: '标题'
    },
    link: {
      type: String,
      default: '/'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/var.scss';
.container {
  background: #fff;
  a {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: rem(105);
    width: 100%;
    .label {
      width: rem(5);
      height: rem(32);
      background: $color-theme;
    }
    h2 {
      padding: 0 rem(15);
      @include font(14);
    }
    .iconfont {
      @include font(12);
    }
  }
}
</style>
