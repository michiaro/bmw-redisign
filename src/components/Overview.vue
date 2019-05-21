<template lang="pug">
  section.overview
    .container
      .row.row--middle
        .col.col-xs-4.col-xl-2
          h1.overview__title.title.text-color Создан дарить острые ощущения
          Button.overview__button
</template>

<script>
import Button from './Button.vue';

export default {
  name: 'Overview',
  components: {
    Button,
  },
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
      text-transform: uppercase;
      padding: 12px 25px;
      margin-top: 30px;

      @media screen and (min-width:768px) {
        margin-top: 155px;
      }
    }
  }
</style>
