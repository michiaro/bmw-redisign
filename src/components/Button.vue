<template lang="pug">
  a.button.text-body(href="#contact") Записаться на тест-драйв
</template>

<script>
export default {
  name: 'Button',
  props: {
    
  }
}
</script>

<style lang="scss">
@import "./styles/_colors";

.button {
  display: inline-block;
  background: $color-primary;
  color: $color-text;
  padding: 5px 22px 7px;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: $color-primary--hover;
    color: $color-text--hover;
    opacity: 1;
  }

  &:active {
    background: $color-primary--active;
    color: $color-text--active;
  }

  &:disabled {
    background: $color-disabled;
    color: $color-text--disabled;
    cursor: not-allowed;
  }

  &:focus {
    outline: 1px $color-primary outset;
    outline-offset: 2px;
  }
}

</style>
