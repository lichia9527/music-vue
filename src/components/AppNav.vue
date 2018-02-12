<template>
  <div class="container">
    <div class="menu">
      <i class="icon iconfont icon-menu"></i>
    </div>
    <ul>
      <li>
        <router-link to="/user">
          <i class="icon iconfont icon-music"></i>
        </router-link>
      </li>
      <li>
        <router-link to="/home">
          <i class="icon iconfont icon-wangyiyunyinyuemusic1193417easyiconnet"></i>
        </router-link>
      </li>
      <li>
        <router-link to="/news">
          <i class="icon iconfont icon-personnel"></i>
        </router-link>
      </li>
    </ul>
    <div class="search">
      <i class="icon iconfont icon-search"></i>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {}
</script>
<style lang="scss" scoped>
@import '../assets/style/var.scss';
.container {
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: rem(110);
  padding: 0 rem(30);
  background-color: $color-theme;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ul {
    display: flex;
    align-items: center;
    .icon {
      padding: 0 rem(30);
      color: $color-text-theme-sub;
    }
    .router-link-active {
      .icon {
        color: $color-text-theme;
      }
    }
  }
  .icon {
    color: $color-text-theme;
    @include font(28);
  }
}
</style>
