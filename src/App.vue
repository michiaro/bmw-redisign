<template lang="pug">
  #app
    header.header i'm fixed header
    swiper(
      :options="swiperOption",
      ref="mySwiper"
    )
      swiper-slide(
        data-hash="overview"
      ) i'm overview screen
      swiper-slide(
        data-hash="design"
      ) i'm design screen
      swiper-slide(
        data-hash="engine"
      ) i'm engine screen
      swiper-slide(
        data-hash="interior"
      ) i'm interior screen
      swiper-slide(
        data-hash="fulltech"
      ) i'm full tech screen
      swiper-slide(
        data-hash="contact"
      ) i'm contact screen

      .swiper-pagination(
        slot="pagination"
      )
    footer.footer i'm fixed footer
    //- <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    // HelloWorld
  },
  data() {
    return {
      swiperOption: {
        direction: 'vertical',
        slidesPerView: 1,
        mousewheel: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
        hashNavigation: {
          watchState: true,
        },
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // this.swiper.slideTo(3, 1000, false);
  }
};
</script>

<style>
#app {
  
}
</style>
