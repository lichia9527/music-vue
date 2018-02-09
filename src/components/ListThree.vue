<template>
  <div>
    <my-title :m-title="MTitle" :link="link"></my-title>
    <ul class="list">
      <li class="item" v-for="(item,index) in items" :key="index">
        <img :src="item.picUrl" alt="">
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
import MyTitle from './MyTitle.vue'
import { MyUtils } from '../assets/js/util'
export default {
  props: {
    MTitle: {
      type: String,
      default: '标题'
    },
    link: {
      type: String,
      default: '/'
    },
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
@import '../assets/style/var.scss';
.list {
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  .item {
    position: relative;
    width: rem(245);
    display: flex;
    flex-direction: column;
    img {
      width: 100%;
    }
    .name {
      padding: rem(15);
      line-height: 1.2;
    }
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
  }
}
</style>
