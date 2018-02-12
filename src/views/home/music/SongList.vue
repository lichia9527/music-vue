<template>
  <div class="song-list">
    <!-- <m-header title="歌单"></m-header> -->
    <div class="bg-header">
      <img src="" alt="">
      <div></div>
    </div>
    <div id="scroll" class="mescroll">
    </div>
  </div>
</template>

<script>
import MHeader from '@/components/Header'
import Service from '@/api/music'
export default {
  created () {
    this.getSongList()
  },
  methods: {
    getSongList (cat = '全部') {
      Service.getSongList(cat).then(res => {})
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
  position: fixed;
  top: rem(110);
  left: 0;
  right: 0;
  bottom: 0;
  background: $color-background;
  z-index: 100;
  .bg-header {
    width: 100%;
    height: rem(295);
  }
}
</style>
