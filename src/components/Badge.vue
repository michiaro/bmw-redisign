<template lang="pug">
  .badge.text-body i'm fixed badge
</template>

<script>
export default {
  name: 'Badge',
  props: {
    
  }
}
</script>

<style lang="scss">
.badge {
  position: fixed;
  top: 48%;
  left: 0;
  z-index: 20;
  text-transform: uppercase;
  font-size: 11px;
  transform: rotate(-90deg) translateY(-66%);
}

</style>
