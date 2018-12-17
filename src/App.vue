<template lang="pug">
  #app
    Header(:isContrast="isContrastScreen")
    Badge(:isContrast="isContrastScreen", :content="currentBadgeText")
    swiper(
      :options="swiperOption",
      ref="fullScreenSwiper"
    )
      swiper-slide(
        v-for="screen in screensConfig",
        :data-hash="screen.name",
        :class="{'contrast' : screen.isContrast}"
      )
        component(:is="screen.component")

      .swiper-pagination(
        slot="pagination"
      )
    Footer(:isContrast="isContrastScreen")
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Badge from "./components/Badge.vue";
import Overview from "./components/Overview.vue";
import Design from "./components/Design.vue";
import Engine from "./components/Engine.vue";
import Interior from "./components/Interior.vue";
import Fulltech from "./components/Fulltech.vue";
import Contact from "./components/Contact.vue";

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
    Fulltech,
    Contact
  },
  data() {
    return {
      swiperOption: {
        direction: "vertical",
        slidesPerView: "auto",
        mousewheel: true,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true
        },
        hashNavigation: {
          watchState: true
        },
        simulateTouch: false,
        ignoreTouchClass: "swiper-slide__interior",
        effect: "slide"
      },
      activeIndex: 0,
      screensConfig: [
        {
          name: "overview",
          isContrast: false,
          badgeText: "с удовольствием за рулем",
          component: Overview
        },
        {
          name: "design",
          isContrast: false,
          badgeText: "характер в каждой детали",
          component: Design
        },
        {
          name: "engine",
          isContrast: true,
          badgeText: "абсолютная мощность. идеальная точность",
          component: Engine
        },
        {
          name: "interior",
          isContrast: false,
          badgeText: "бэха, ты просто космос",
          component: Interior
        },
        {
          name: "fulltech",
          isContrast: true,
          badgeText: "детали совершенства",
          component: Fulltech
        },
        {
          name: "contact",
          isContrast: false,
          badgeText: "познакомьтесь с благородным спортсменом",
          component: Contact
        }
      ]
    };
  },
  methods: {},
  computed: {
    swiper() {
      return this.$refs.fullScreenSwiper.swiper;
    },
    isContrastScreen() {
      return this.screensConfig[this.activeIndex].isContrast;
    },
    currentBadgeText() {
      return this.screensConfig[this.activeIndex].badgeText;
    },
  },
  mounted() {
    this.swiper.on("slideChangeTransitionEnd", () => {
      this.activeIndex = this.swiper.activeIndex;
      console.log(this.swiper.activeIndex);
    });
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
.swiper-container-vertical
  > .swiper-pagination-bullets
  .swiper-pagination-bullet {
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
