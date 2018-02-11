<template>
  <div class="dujia" v-if="data.length!==0">
    <my-title m-title="独家放送" link="/"></my-title>
    <div class="pannel-two">
      <div v-for="song in personalRecommendsTwo" :key="song.id">
        <img v-lazy="song.sPicUrl" alt="">
        <span>{{song.name}}</span>
      </div>
    </div>
    <div class="pannel-one">
      <div v-for="song in personalRecommendsOne" :key="song.id">
        <img v-lazy="song.picUrl" alt="">
        <span>{{song.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import MyTitle from '@/components/MyTitle.vue'
export default {
  props: {
    data: Array,
    default () {
      return []
    }
  },
  computed: {
    personalRecommendsTwo () {
      return this.data.filter(song => song.type === 24)
    },
    personalRecommendsOne () {
      return this.data.filter(song => song.type === 19)
    }
  },
  components: {
    MyTitle
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/style/var.scss';
.dujia {
  background: #fff;
  .pannel-two,
  .pannel-one {
    img {
      display: block;
    }
    span {
      display: block;
      height: rem(65);
      margin: rem(15) auto;
      padding: 0 rem(15);
      line-height: rem(30);
      @include ellipsis(2);
    }
  }
  .pannel-two {
    display: flex;
    width: 100%;
    justify-content: space-between;
    > div {
      width: rem(370);
      img {
        width: 100%;
      }
    }
  }
  .pannel-one {
    margin-top: rem(10);
    width: 100%;
    > div {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
}
</style>
