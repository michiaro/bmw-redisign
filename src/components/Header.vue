<template lang="pug">
  header.header
    nav.nav
      a(href="/").logo.subtitle BMW 8 Coupe
      .nav__list
        a.nav__link.text(href="#design") 
          | Дизайн
        a.nav__link.text(href="#engine")
          | Двигатель
        a.nav__link.text(href="#interior")
          | Интерьер
        a.nav__link.text(href="#fulltech")
          | Технические характеристики
      Button

</template>

<script>
import Button from './Button.vue';

export default {
  name: 'Header',
  components: {
    Button,
  },
  props: {
    
  }
}
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
