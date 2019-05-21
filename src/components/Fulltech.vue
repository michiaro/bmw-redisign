<template lang="pug">
  section.fulltech.background-color
    .container
      .row
        .col.col-xs-4
          h1.fulltech__title.title.text-color Технические характеристики
        .col.col-xs-4.col-lg-2
          .fulltech__specs
            .fulltech__subtitle.subtitle.text-color Двигатель
            .spec.text-body.text-color
              .spec__title Количество цилиндров
              .spec__divider
              .spec__value 8
            .spec.text-body.text-color
              .spec__title Клапанов на цилиндр
              .spec__divider
              .spec__value 4
            .spec.text-body.text-color
              .spec__title Рабочий объем
              .spec__divider
              .spec__value 4 395 см 
                sup 3
            .spec.text-body.text-color
              .spec__title Ход поршня / диаметр цилиндра
              .spec__divider
              .spec__value 88,3 мм / 89,0 мм
            .spec.text-body.text-color
              .spec__title Максимальная мощность, кВт (л. с.) при об/мин
              .spec__divider
              .spec__value 390 (530) / 5.500–6.000
            .spec.text-body.text-color
              .spec__title Максимальный крутящий момент, Н·м при об/мин
              .spec__divider
              .spec__value 750 / 1.800–4.600
            .spec.text-body.text-color
              .spec__title Степень сжатия
              .spec__divider
              .spec__value 1 / 10.5
          .fulltech__specs
            .fulltech__subtitle.subtitle.text-color Расход топлива
            .spec.text-body.text-color
              .spec__title Городской цикл
              .spec__divider
              .spec__value 9.4 л / 100 км
            .spec.text-body.text-color
              .spec__title Загородный цикл
              .spec__divider
              .spec__value 11 л / 100 км
            .spec.text-body.text-color
              .spec__title Смешанный цикл
              .spec__divider
              .spec__value 10.2 л / 100 км
            .spec.text-body.text-color
              .spec__title Выброс CO
                sup 2
              .spec__divider
              .spec__value 228–240 г/км
            .spec.text-body.text-color
              .spec__title Объем топливного бака
              .spec__divider
              .spec__value 68 л
          .fulltech__specs
            .fulltech__subtitle.subtitle.text-color Ходовые качества
            .spec.text-body.text-color
              .spec__title Максимальная скорость
              .spec__divider
              .spec__value 250 км/ч
            .spec.text-body.text-color
              .spec__title Время разгона с 0 до 100 км/ч
              .spec__divider
              .spec__value 4.9 с
        .col.col-xs-4.col-lg-2
          .fulltech__car
            img.fulltech__image(src="./img/car-drawing.png")
          .fulltech__specs
            .fulltech__subtitle.subtitle.text-color Масса
            .spec.text-body.text-color
              .spec__title Масса без груза (ЕС)
              .spec__divider
              .spec__value 1 965 кг
            .spec.text-body.text-color
              .spec__title Допустимая полная масса
              .spec__divider
              .spec__value 2 395 кг
            .spec.text-body.text-color
              .spec__title Полезная нагрузка
              .spec__divider
              .spec__value 505 кг
            .spec.text-body.text-color
              .spec__title Допустимая нагрузка на переднюю ось
              .spec__divider
              .spec__value 1.235 кг
            .spec.text-body.text-color
              .spec__title Допустимая нагрузка на заднюю ось
              .spec__divider
              .spec__value 1.250 кг
            .spec.text-body.text-color
              .spec__title Объем багажного отделения
              .spec__divider
              .spec__value 420 л

</template>

<script>
export default {
  name: 'Fulltech',
  components: {
  },
  props: {
    
  }
}
</script>

<style lang="scss">
@import "./styles/_colors";

.fulltech {
  height: 100%;

  &__image {
    padding-bottom: 50px;
    width: 100%;
  }

  &__title {
    margin-top: 100px;
  }

  &__specs {
    padding-bottom: 33px;

  }
}

.spec {
  display: flex;
  align-items: baseline;

  &__title {

  }

  &__divider {
    flex-grow: 1;
    height: 1px;
    background: $color-text--contrast--muted;
    opacity: 0.1;
    margin: 0 6px;
  }

  &__value {
    width: 70px;
    text-align: right;

    @media screen and (min-width: 576px) {
      width: auto;
    }
  }

}

@media screen and (min-width:1700px){
  .fulltech {
    
    &__title {
      margin-top: 131px;
    }
  }
}
</style>
