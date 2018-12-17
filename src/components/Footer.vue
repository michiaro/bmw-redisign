<template lang="pug">
  footer.footer
    .social
      a.social__item(
        href="https://www.facebook.com/",
        target="_blank"
      )
        img(src="./img/fb.svg")
      a.social__item(
        href="https://twitter.com/",
        target="_blank"
      )
        img(src="./img/twitter.svg")
      a.social__item(
        href="https://plus.google.com/",
        target="_blank"
      )
        img(src="./img/gplus.svg")
    .scroll
      svg(
        xmlns="http://www.w3.org/2000/svg",
        xml:space="preserve",
        width="15px",
        height="24px",
        style="fill-rule:evenodd; clip-rule:evenodd",
        viewBox="0 0 15 24"
      )
        path.scroll__stroke.scroll__wheel(d="M7 10l0 -4")
        path.scroll__stroke.scroll__mouse(d="M1 8c0,-4 3,-7 6,-7 4,0 7,3 7,7l0 8c0,4 -3,7 -7,7 -3,0 -6,-3 -6,-7l0 -8z")
    .lang
      .lang__item.text-body.lang__item--active 
        | RU
      .lang__item.text-body 
        | EN

</template>

<script>
export default {
  name: 'Footer',
  props: {
    
  }
}
</script>

<style lang="scss">
@import "./styles/_colors";

.footer {
  position: fixed;
  bottom: 30px;
  left: 45px;
  right: 45px;
  z-index: 20;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}

.social {
  display: flex;
  flex-flow: row nowrap;
  
  &__item {
    margin-right: 30px;
  }
}
.scroll {
  animation: mousemove 1.5s alternate infinite;

  &__mouse {
    stroke:#FEFEFE;
    stroke-width:1.18129;
  }
  &__wheel {
    stroke:#FEFEFE;
    stroke-width: 1.18129;
    stroke-linecap: round;
    stroke-dasharray: 10;
    stroke-dashoffset: 10;
    animation: scroll 1.5s linear alternate infinite;
  }
  &__stroke {
    fill:none;
  }
}

.lang {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  width: 136px;

  &__item {
    margin-left: 30px;
    opacity: 0.6;
    border-bottom: 1px solid $color-text;
    cursor: pointer;

    &--active {
      opacity: 1;
      border-bottom: none;
      cursor: auto;
    }
  }
}

@keyframes scroll {
  from {
    stroke-dashoffset: 10;
  }
  to {
    stroke-dashoffset: 1;
  }
}

@keyframes mousemove {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(5px);
  }
}

</style>
