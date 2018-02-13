<template>
  <div id="app">
    <app-nav></app-nav>
      <transition name="tab">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
  </div>
</template>
<script type="text/javascript">
import AppNav from '@/components/AppNav'
export default {
  components: {
    AppNav
  }
}
</script>

<style lang="scss" scoped>
@import './assets/style/var.scss';
.main-content {
  position: fixed;
  top: rem(110);
  left: 0;
  width: 100%;
  bottom: 0;
  z-index: 1;
}
</style>
