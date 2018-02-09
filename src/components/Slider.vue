<template>
  <div class="slider">
    <swiper :options="swiperOption" ref="mySwiper">
      <slot></slot>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'slider',
  data () {
    return {
      swiperOption: {
        autoplay: {
          delay: 4000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true
      }
    }
  },
  mounted () {}
}
</script>
