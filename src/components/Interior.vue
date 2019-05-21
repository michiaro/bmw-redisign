<template lang="pug">
  section.interior
    .container
      .row
        .col.col-xs-4
          h1.interior__title.title Интерьер
        .col.col-xs-4.col-sm-2.col-xl-1
          .interior__subtitle.subtitle.text-color 
            | Мелкозернистая кожа Merino BMW Individual
          .interior__text.text-body.text-color--muted
            | Отделка высококачественной кож&shy;ей Merino делает интерьер еще более бла&shy;городным. Выберите из&nbsp;несколь&shy;ких цветов: 
            | от&nbsp;черного и&nbsp;коньячного до&nbsp;цвета сло&shy;новой кости, а&nbsp;контраст&shy;ная отделка создает эксклюзивную 
            | атмосферу в&nbsp;салоне.
        .col.col-xs-4.col-sm-2.col-xl-1
          .interior__subtitle.subtitle.text-color 
            | Стеклянная отделка 
            br 
            | Crafted Clarity
          .interior__text.text-body.text-color--muted
            | Элегантная стеклянная от&shy;делка голу&shy;бого цвета укра&shy;шает рычаг коробки пере&shy;дач, конт&shy;роллер центральной консоли, 
            | кнопку управ&shy;ления аудиосисте&shy;мой и&nbsp;кнопку Start/Stop.
        .col.col-xs-4.col-sm-2.col-xl-1
          .interior__subtitle.subtitle.text-color 
            | BMW Live Cockpit Professional
          .interior__text.text-body.text-color--muted
            | Это сеть дисплеев: сенсорный дисплей высо&shy;кого разрешения с&nbsp;диа&shy;гональю 26см и&nbsp;цифровая приборная 
            | панель с&nbsp;диа&shy;гональю 31см. Система удобна в&nbsp;использо&shy;вании и&nbsp;персо&shy;нализации.
</template>

<script>
export default {
  name: 'Interior',
  components: {
  },
  props: {
    
  }
}
</script>

<style lang="scss">
  .interior {
    height: 100%;
    background: url("./img/interior.jpg") center no-repeat;
    background-size: auto;

    @media screen and (min-width: 922px) {
      background-size: cover;
    }

    &__title {
      margin-top: 100px;

      @media screen and (min-width:1700px){ 
        margin-top: 131px;
      }
    }

    &__subtitle {
      
    }

    &__text {
      margin-bottom: 25px;
    }
  }
</style>
