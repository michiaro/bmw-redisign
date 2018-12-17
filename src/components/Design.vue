<template lang="pug">
  section.design
    .container
      .row
        .col.col-xs-4
          h1.design__title.title 
            | Дизайн экстерьера
        .col.col-col-xs-4.col-lg-1
          .design__subtitle.subtitle 
            | Лазерные фары
          .design__text.text-body.color--muted
            | Дальний свет лазер&shy;ных фары осве&shy;щает дорогу на&nbsp;600&nbsp;метров, обеспе&shy;чивая безо&shy;пас&shy;ное движе&shy;ние ночью.
        .col.col-col-xs-4.col-lg-1
          .design__subtitle.subtitle 
            | Покрытие
          .design__text.text-body.color--muted
            | Лакокрасочное по&shy;крытие BMW Individual с&nbsp;эффек&shy;том &laquo;метал&shy;лик&raquo;&nbsp;&mdash; это широ&shy;кая гамма цветов. 
            | Выбери&shy;те цвет для ваше&shy;го эффект&shy;ного образа.
        .col.col-col-xs-4.col-lg-2
          .design__subtitle.subtitle 
            | Карбоновые элементы
          .design__text.text-body.color--muted
            | Резкие линии диффу&shy;зора, задний спойлер, наклад&shy;ки на&nbsp;воздухо&shy;заборники и&nbsp;корпуса наружных зер&shy;кал, 
            | выполнен&shy;ные из&nbsp;насто&shy;ящего карбона, создают восхити&shy;тельный об&shy;раз, даже при взгляде 
            | на&nbsp;непод&shy;вижный автомобиль.
</template>

<script>

export default {
  name: 'Design',
  components: {
  },

}
</script>

<style lang="scss">
  .design {
    height: 100%;
    background: url("./img/car-2.jpg") center no-repeat;
    background-size: cover;

    &__title {
      margin-top: 100px;
    }

    &__subtitle {
      
    }

    &__text {
    }
  }

  @media screen and (min-width:1700px){
    .design {
      
      &__title {
        margin-top: 131px;
      }
    }
  }
</style>
