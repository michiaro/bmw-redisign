<template lang="pug">
  section.contact
    .container
      .row
        .col.col-xs-4
          h1.contact__title.title 
            | Дизайн экстерьера

</template>

<script>
export default {
  name: 'Contact',
  components: {
  },
  props: {
    
  }
}
</script>

<style lang="scss">
  .contact {
    height: 100%;

    &__title {
      margin-top: 100px;
    }

    &__subtitle {
      
    }

    &__text {
    }
  }

  @media screen and (min-width:1700px){
    .contact {
      
      &__title {
        margin-top: 131px;
      }
    }
  }
</style>
