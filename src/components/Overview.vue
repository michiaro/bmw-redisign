<template lang="pug">
  section.overview
    .container
      .row.row--middle
        .col.col-xs-4.col-xl-2
          h1.overview__title.title Создан дарить острые ощущения
          Button.overview__button
</template>

<script>
import Button from './Button.vue';

export default {
  name: 'Overview',
  components: {
    Button,
  },
  props: {
    
  }
}
</script>

<style lang="scss">
  .overview {
    height: 100%;
    background: url("./img/main.jpg") center no-repeat;
    background-size: cover;

    &__title {
      margin-top: 155px;
    }

    &__button {
      margin-top: 155px;
      text-transform: uppercase;
      padding: 12px 25px;
    }
  }
</style>
