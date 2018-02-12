<template>
  <div class="home">
    <ul class="tab">
      <li class="tab-item">
        <router-link class="link" to="/home/music">音乐</router-link>
      </li>
      <li class="tab-item">
        <router-link class="link" to="/home/video">视频</router-link>
      </li>
      <li class="tab-item">
        <router-link class="link" to="/home/Radio">电台</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>
<style lang="scss" scoped>
@import '../../assets/style/var.scss';
.home {
  @include layout();
  padding-top: rem(80);
}

.tab {
  position: fixed;
  top: rem(110);
  left: 0;
  right: 0;
  display: flex;
  z-index: 20;
  @include font(14);
  justify-content: space-around;
  align-items: center;
  background-color: $color-background;

  .link {
    height: rem(80);
    line-height: rem(80);
    padding: 0 rem(40);
    display: inline-block;
    border-bottom: rem(5) solid transparent;
  }
  .link.router-link-active {
    color: $color-theme;
    border-bottom: rem(5) solid $color-theme;
  }
}
</style>
