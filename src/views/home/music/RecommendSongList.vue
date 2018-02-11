<template>
  <div v-if="this.items.length!==0">
    <my-title m-title="推荐歌单" link="/home"></my-title>
    <ul class="g-layout-3">
      <li class="item" v-for="(item,index) in items" :key="index">
        <img class="image" v-lazy="item.picUrl" alt="">
        <span class="name">{{item.name}}</span>
        <div class="icons">
          <i class="iconfont icon-headseterji"></i>
          <span>{{item.playCount|numberConvert}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import MyTitle from '@/components/MyTitle.vue'
export default {
  props: {
    items: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {}
  },
  components: {
    MyTitle
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/style/var.scss';
.icons {
  position: absolute;
  top: rem(15);
  right: rem(15);
  color: #fff;
  @include font(10);
  .iconfont {
    @include font(10);
  }
}
</style>
