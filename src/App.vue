<template>
  <div id="app">
    <router-view></router-view>
    <router-view name="top"></router-view>
  </div>
</template>
<script type="text/javascript">
import './assets/style/index.scss'
export default {}
</script>
<style lang="scss">
@import './assets/style/var.scss';
#app {
  overflow: auto;
}

.swiper-pagination-bullet {
  width: rem(10);
  height: rem(10);
  background: $color-text-theme-sub;
}
.swiper-pagination-bullet-active {
  background: $color-theme;
}
</style>
