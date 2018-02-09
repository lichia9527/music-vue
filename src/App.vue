<template>
  <div id="app">
    <app-nav></app-nav>
    <div class="app-container">
      <router-view></router-view>
    </div>
  </div>
</template>
<script type="text/javascript">
import AppNav from '@/components/AppNav'
import './assets/style/index.scss'
export default {
  components: {
    AppNav
  }
}
</script>
<style lang="scss">
@import './assets/style/var.scss';
#app {
  overflow: auto;
  .app-container {
    padding-top: rem(110);
  }
}

.swiper-pagination-bullet {
  width: rem(10);
  height: rem(10);
  background: #ddd;
}
.swiper-pagination-bullet-active {
  background: $color-theme;
}
</style>
