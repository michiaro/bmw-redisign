<template lang="pug">
  #app
    Header
    Badge
    swiper(
      :options="swiperOption",
      ref="mySwiper"
    )
      swiper-slide.swiper-slide__overview(
        data-hash="overview"
      )
        Overview
      swiper-slide.swiper-slide__design(
        data-hash="design"
      ) 
        Design
      swiper-slide.swiper-slide__engine(
        data-hash="engine"
      ) 
        Engine
      swiper-slide.swiper-slide__interior(
        data-hash="interior"
      ) 
        Interior
      swiper-slide.swiper-slide__fulltech(
        data-hash="fulltech"
      ) i'm full tech screen
      swiper-slide.swiper-slide__contact(
        data-hash="contact"
      ) i'm contact screen

      .swiper-pagination(
        slot="pagination"
      )
    Footer
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Badge from './components/Badge.vue';
import Overview from './components/Overview.vue';
import Design from './components/Design.vue';
import Engine from './components/Engine.vue';
import Interior from './components/Interior.vue';

export default {
  name: "app",
  components: {
    Header,
    Footer,
    Badge,
    Overview,
    Design,
    Engine,
    Interior,
  },
  data() {
    return {
      swiperOption: {
        direction: 'vertical',
        slidesPerView: 'auto',
        mousewheel: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
        hashNavigation: {
          watchState: true,
        },
        simulateTouch: false,
        ignoreTouchClass: 'swiper-slide__interior',
        effect:'slide',
      },
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
  
  &-slide {
    overflow-y: scroll;

    &__interior {
      height: 150%;
    }
  }
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

.container-scroll {
  width: 100%;
  height: 100%;
}
.slide-scroll {
  height: 100%;
  box-sizing: border-box;
}
</style>
