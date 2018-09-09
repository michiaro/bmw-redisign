<template lang="pug">
  button.button.text Записаться на тест-драйв
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
  background: $color-primary;
  color: $color-text;
  padding: 3px 22px 5px;
  border: none;
  border-radius: 2px;
  cursor: pointer;

  &:hover {
    background: $color-primary--hover;
    color: $color-text--hover;
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
