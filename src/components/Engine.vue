<template lang="pug">
  section.engine.background-color
    .container
      .row
        .col.col-xs-4.col-lg-2
          img.engine__image(src="./img/engine.png")
        .col.col-xs-4.col-lg-2
          h1.engine__title.title.text-color Двигатель TwinPower Turbo
          .engine__text.text-body.text-color--muted
            | Экстремальная мощность и&nbsp;покой в&nbsp;салоне. 8-цилиндровый двига&shy;тель BMW TwinPower&nbsp;Turbo довел динамику 
            | и&nbsp;эффек&shy;тивность BMW 8&nbsp;серии до&nbsp;высокого уровня. Два турбонагне&shy;тателя с&nbsp;изменяемой 
            | геометрией турбин и&nbsp;давлением впрыска 2500 бар повы&shy;шют эффектив&shy;ность агрегата. Выпускная система с&nbsp;актив&shy;ными 
            | заслонками делает звук двигателя соответ&shy;ствующим его мощности.
          .engine__facts
            .row
              .col.col-xs-4.col-sm-2.col-lg-2
                .engine__fact
                  .engine__fact-title.title.text-color
                    | 8
                    span.engine__fact-title--small
                  .engine__fact-text.text-body.text-color
                    | количество клапанов
                .engine__fact
                  .engine__fact-title.title.text-color
                    | 250
                    span.engine__fact-title--small км/ч
                  .engine__fact-text.text-body.text-color
                    | максимальная скорость
              .col.col-xs-4.col-sm-2.col-lg-2
                .engine__fact
                  .engine__fact-title.title.text-color
                    | 530
                    span.engine__fact-title--small л.с.
                  .engine__fact-text.text-body.text-color
                    | максимальная мощность двигателя
                .engine__fact
                  .engine__fact-title.title.text-color
                    | 4.9
                    span.engine__fact-title--small с
                  .engine__fact-text.text-body.text-color
                    | время разгона с 0 до 100 км/ч
</template>

<script>
export default {
  name: "Engine",
  components: {},
  props: {}
};
</script>

<style lang="scss">
.engine {
  height: 100%;

  &__image {
    margin-top: 100px;
  }

  @media screen and (min-width: 992px) {
    &__title {
      margin-top: 100px;
    }
  }

  &__facts {
    margin: 40px 0;
  }

  &__fact {
    margin-bottom: 25px;

    &-title {
      &--small {
        font-size: 36px;
      }
    }

    &-text {
    }
  }

  img {
    width: 100%;
  }
}

@media screen and (min-width: 1700px) {
  .engine {
    &__title {
      margin-top: 131px;
    }

    &__image {
      margin-top: 131px;
    }
  }
}
</style>
