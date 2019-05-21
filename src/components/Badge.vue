<template lang="pug">
  .badge.text-badge(:class="{'color-text--contrast' : isContrast}") {{content}}
</template>

<script>
export default {
  name: "Badge",
  props: {
    isContrast: {
      type: Boolean,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss">
.badge {
  position: fixed;
  top: 46%;
  left: 0;
  z-index: 20;
  text-transform: uppercase;
  -webkit-transform: rotate(-90deg) translateY(-400%);
  transform: rotate(-90deg) translateY(-400%);
  width: 300px;
  text-align: center;
}
</style>
