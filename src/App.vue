<template lang="pug">
  #app
    Header
    Badge
    swiper(
      :options="swiperOption",
      ref="mySwiper"
    )
      swiper-slide(
        data-hash="overview"
      )
        Overview
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
    Footer
    //- <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Overview from './components/Overview.vue';
import Badge from './components/Badge.vue';

export default {
  name: "app",
  components: {
    Header,
    Footer,
    Overview,
    Badge,
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

<style lang="scss">
@import "./styles/_globals";

#app {
  
}

.swiper {  
  
}

.swiper-container-vertical > .swiper-pagination-bullets {
  right: 48px;
}
.swiper-container-vertical > .swiper-pagination-bullets .swiper-pagination-bullet {
  margin: 21px 0 0px;
  width: 3px;
  height: 3px;
  background: white;
}

.swiper-slide {

}

</style>
