<template lang="pug">
  #app
    Header(
      :isContrast="isContrastScreen"
    )
    Badge(
      :isContrast="isContrastScreen", 
      :content="currentBadgeText", 
      v-if="!isMobile",
      v-cloak=""
    )
    swiper(
      :options="swiperOption",
      ref="fullScreenSwiper",
    )
      swiper-slide(
        v-for="screen in screensConfig",
        :data-hash="screen.name",
        :class="{'contrast' : screen.isContrast}"
      )
        component(:is="screen.component")

      .swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets(
        slot="pagination",
        :class="{'swiper-pagination--contrast' : isContrastScreen}"
      )
    Footer(
      :isContrast="isContrastScreen", 
      :isLast="isLastScreen", 
      v-if="!isMobile",
      v-cloak=""
    )
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
      isMenuOpen: false,
      isMobile: false,
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
          component: Overview,
          isLast: false
        },
        {
          name: "design",
          isContrast: false,
          badgeText: "характер в каждой детали",
          component: Design,
          isLast: false
        },
        {
          name: "engine",
          isContrast: true,
          badgeText: "абсолютная мощность. идеальная точность",
          component: Engine,
          isLast: false
        },
        {
          name: "interior",
          isContrast: false,
          badgeText: "бэха, ты просто космос",
          component: Interior,
          isLast: false
        },
        {
          name: "fulltech",
          isContrast: true,
          badgeText: "детали совершенства",
          component: Fulltech,
          isLast: false
        },
        {
          name: "contact",
          isContrast: false,
          badgeText: "познакомьтесь с благородным спортсменом",
          component: Contact,
          isLast: true
        }
      ]
    };
  },
  methods: {
    handleResize() {
      this.isMobile = window.innerWidth < 1200;
      this.isMenuOpen = window.innerWidth >= 1200;
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    }
  },
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
    isLastScreen() {
      return this.screensConfig[this.activeIndex].isLast;
    }
  },
  mounted() {
    this.swiper.on("slideChangeTransitionEnd", () => {
      this.activeIndex = this.swiper.activeIndex;
    });

    var startScroll, touchStart, touchCurrent;
    this.swiper.slides.on(
      "touchstart",
      function(e) {
        startScroll = this.scrollTop;
        touchStart = e.targetTouches[0].pageY;
      },
      true
    );
    this.swiper.slides.on(
      "touchmove",
      function(e) {
        touchCurrent = e.targetTouches[0].pageY;
        var touchesDiff = touchCurrent - touchStart;
        var slide = this;
        var onlyScrolling =
          slide.scrollHeight > slide.offsetHeight && //allow only when slide is scrollable
          ((touchesDiff < 0 && startScroll === 0) || //start from top edge to scroll bottom
          (touchesDiff > 0 &&
            startScroll === slide.scrollHeight - slide.offsetHeight) || //start from bottom edge to scroll top
            (startScroll > 0 &&
              startScroll < slide.scrollHeight - slide.offsetHeight)); //start from the middle
        if (onlyScrolling) {
          e.stopPropagation();
        }
      },
      true
    );

    this.$nextTick(() => {
      window.addEventListener("resize", this.handleResize);
      this.handleResize();
    });
  }
};
</script>

<style lang="scss">
@import "./styles/_globals";

[v-cloak] {
  display: none;
}

.swiper {
  &-slide {
    overflow-y: scroll;
    overflow-x: hidden;

    &__interior {
      height: 150%;
    }
  }
}

.swiper-container-vertical .swiper-pagination {
  right: 20px;
}

@media screen and (min-width: 768px) {
  .swiper-container-vertical .swiper-pagination {
    right: 48px;
  }
}

.swiper-container-vertical
  > .swiper-pagination-bullets
  .swiper-pagination-bullet {
  margin: 21px 0 0px;
  width: 3px;
  height: 3px;
  background: white;
}

.swiper-container-vertical
  > .swiper-pagination--contrast.swiper-pagination-bullets
  .swiper-pagination-bullet {
  background: black;
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
