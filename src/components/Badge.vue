<template lang="pug">
  .badge.text-body(:class="{'color-text--contrast' : isContrast}") {{content}}
</template>

<script>

export default {
  name: 'Badge',
  props: {
    isContrast: {
      type: Boolean,
      required: true,
    },
    content: {
      type: String,
      required: true,
    }
  },
}
</script>

<style lang="scss">
.badge {
  position: fixed;
  top: 48%;
  left: 45px;
  z-index: 20;
  text-transform: uppercase;
  font-size: 11px;
  transform: rotate(-90deg) translateY(-420%);
}

</style>
