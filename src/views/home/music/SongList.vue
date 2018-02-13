<template>
  <transition name="slide">
    <div class="song-list">
      <m-header title="歌单"></m-header>
      <div class="wrapper">
        <div class="bg-header">
          <div class="bg-img" ref="bgImg"></div>
          <div class="content">
            <img :src="firstSong.coverImgUrl" alt="">
            <div>
              <div class="title">
                <h1>精品歌单</h1>
                <i class="iconfont icon-goto"></i>
              </div>
              <h2 class="name">{{firstSong.name}}</h2>
              <h3 class="sub-name">{{firstSong.copywriter}}</h3>
            </div>
          </div>
        </div>
        <div class="nav">
          <div class="cat">
            <div class="btn-cat">全部分类</div>
            <i class="iconfont icon-goto"></i>
          </div>
          <ul class="tag">
            <li v-for="(tag,index) in firstSong.tags" :key="index">{{tag}}</li>
          </ul>
        </div>
        <ul class="lists">
          <li class="item" v-for="(song,index) in songs" :key="index">
            <img v-lazy="song.coverImgUrl" alt="">
            <h4>{{song.name}}</h4>
            <div class="icons">
              <i class="iconfont icon-headseterji"></i>
              <span>{{song.playCount|numberConvert}}</span>
            </div>
            <div class="author">
              <i class="iconfont icon-personnel"></i>
              <span>{{song.creator.nickname}}</span>
            </div>
          </li>
        </ul>
        <div id="scroll" class="mescroll">
        </div>
      </div>

    </div>
  </transition>
</template>

<script>
import MHeader from '@/components/Header'
import Service from '@/api/music'
export default {
  data () {
    return {
      songList: [],
      firstSong: {}
    }
  },
  computed: {
    songs () {
      return this.songList.slice(1)
    }
  },
  created () {
    this.getSongList()
  },
  methods: {
    getSongList (cat = '全部') {
      Service.getSongList(cat).then(res => {
        if (res.code === 200) {
          this.songList = [...this.songList, ...res.playlists]
          this.firstSong = this.songList[0]
          this.$refs.bgImg.style.backgroundImage = `url(${
            this.firstSong.coverImgUrl
          })`
        }
      })
    }
  },
  components: {
    MHeader
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/style/var.scss';
.song-list {
  .wrapper {
    position: fixed;
    top: rem(110);
    left: 0;
    width: 100%;
    bottom: 0;
    overflow: auto;
    z-index: 5;
  }
  @include layer();
  background: $color-background;
  .bg-header {
    color: $color-text-theme;
    width: 100%;
    height: rem(295);
    position: relative;
    overflow: hidden;
    .bg-img {
      @include blur();
    }

    .content {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      display: flex;
      padding: 0 rem(20);
      align-items: center;
      > div {
        padding: rem(20) 0;
        margin-left: rem(20);
        height: rem(210);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .title {
          display: flex;
          align-items: center;
          @include font(20);
          .iconfont {
            padding-left: rem(10);
            color: $color-text-theme-sub;
          }
        }
        .name {
          @include font(16);
        }
        .sub-name {
          color: $color-text-theme-sub;
        }
      }
      img {
        width: rem(210);
        height: rem(210);
      }
    }
  }
  .nav {
    width: 100%;
    height: rem(110);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 rem(25);
    .cat {
      padding: 0 rem(20);
      border: rem(1) solid #aaa;
      border-radius: rem(40);
      display: flex;
      align-items: center;
      height: rem(60);
      .btn-cat {
        @include font(14);
        padding-right: rem(10);
      }
      .iconfont {
        @include font(14);
      }
    }
    .tag {
      display: flex;
      li {
        @include font(14);
        padding: 0 rem(10);
      }
    }
  }
  .lists {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .item {
      position: relative;
      width: rem(370);
      display: flex;
      flex-direction: column;
      img {
        width: 100%;
      }
      h4 {
        height: rem(80);
        line-height: rem(30);
        padding: rem(10) rem(20);
        @include ellipsis(2);
      }
      .author {
        display: flex;
        align-items: center;
        color: $color-text-theme;
        position: absolute;
        bottom: rem(90);
        left: rem(20);
        i {
          padding-right: rem(10);
        }
      }
    }
    .icons {
      position: absolute;
      top: rem(15);
      right: rem(15);
      color: $color-text-theme;
      @include font(10);
      .iconfont {
        @include font(10);
      }
    }
  }
}
</style>
