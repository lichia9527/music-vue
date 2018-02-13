<template>
  <div class="latest-music">
    <my-title m-title="最新音乐" link="/home"></my-title>
    <ul class="g-layout-3">
      <li class="item" v-for="song in data" :key="song.id">
        <img class="image" v-lazy="song.picUrl" alt="">
        <span class="name">{{song.name}}</span>
        <span class="sub-name">{{song.company}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import MyTitle from '@/components/MyTitle'
export default {
  props: {
    data: Array,
    default () {
      return []
    }
  },
  components: {
    MyTitle
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/style/var.scss';
.g-layout-3 {
  .item {
    .name {
      @include ellipsis(1);
      height: rem(30);
    }
    .sub-name {
      height: rem(20);
      @include ellipsis(1);
      @include font(10);
      padding: 0 rem(15);
      margin: 0 0 rem(20);
      color: $color-text-sub;
    }
  }
}
</style>
