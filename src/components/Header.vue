<template lang="pug">
  header.header(
    :class="{'contrast' : isContrast}",
    v-if="!isMobile",
    v-cloak=""
  )
    nav.nav
      a(href="#overview").logo.subtitle.text-color BMW 8 Coupe
      .nav__list
        a.nav__link.text-body.text-color(href="#design") 
          | Дизайн
        a.nav__link.text-body.text-color(href="#engine")
          | Двигатель
        a.nav__link.text-body.text-color(href="#interior")
          | Интерьер
        a.nav__link.text-body.text-color(href="#fulltech")
          | Технические характеристики
      Button

</template>

<script>
import Button from "./Button.vue";

export default {
  name: "Header",
  components: {
    Button
  },
  data() {
    return {
      isMenuOpen: false,
      isMobile: false
    }
  },
  props: {
    isContrast: {
      type: Boolean,
      required: true
    }
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
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.handleResize);
      this.handleResize();
    });
  }
};
</script>

<style lang="scss">
@import "./styles/_colors";
@import "./styles/_globals";

.header {
  position: fixed;
  top: 30px;
  left: 45px;
  right: 45px;
  z-index: 20;
}

.nav {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  &__list {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    margin-right: 30px;
  }

  &__link {
    text-decoration: none;
    padding: 5px;
    margin-left: 30px;
  }
}

.logo {
  flex-grow: 1;
  text-decoration: none;
}
</style>
