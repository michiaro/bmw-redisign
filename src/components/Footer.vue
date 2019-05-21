<template lang="pug">
  footer.footer(:class="{'contrast' : isContrast, 'last' : isLast}")
    .social
      a.social__item(
        href="https://www.facebook.com/",
        target="_blank"
      )
        svg(
          width="9",
          height="16",
          viewBox="0 0 9 16",
          fill="none",
          xmlns="http://www.w3.org/2000/svg"
        )
          path.social__icon(d="M2.40625 16V8.84375H0V6H2.40625V3.75C2.40625 2.5625 2.73958 1.64583 3.40625 1C4.07292 0.333333 4.95833 0 6.0625 0C6.95833 0 7.6875 0.0416667 8.25 0.125V2.65625H6.75C6.1875 2.65625 5.80208 2.78125 5.59375 3.03125C5.42708 3.23958 5.34375 3.57292 5.34375 4.03125V6H8L7.625 8.84375H5.34375V16H2.40625Z")
      a.social__item(
        href="https://twitter.com/",
        target="_blank"
      )
        svg(
          width="17",
          height="14",
          viewBox="0 0 17 14",
          fill="none",
          xmlns="http://www.w3.org/2000/svg"
        )
          path.social__icon(d="M14.4283 3.40662C14.4491 3.48995 14.4596 3.62537 14.4596 3.81287C14.4596 5.31287 14.095 6.76078 13.3658 8.15662C12.6158 9.63578 11.5637 10.8129 10.2096 11.6879C8.7304 12.667 7.03248 13.1566 5.11581 13.1566C3.28248 13.1566 1.6054 12.667 0.0845642 11.6879C0.313731 11.7087 0.574148 11.7191 0.865814 11.7191C2.38665 11.7191 3.75123 11.2504 4.95956 10.3129C4.2304 10.3129 3.58456 10.1045 3.02206 9.68787C2.4804 9.25037 2.1054 8.7087 1.89706 8.06287C2.1054 8.0837 2.30331 8.09412 2.49081 8.09412C2.78248 8.09412 3.07415 8.06287 3.36581 8.00037C2.61581 7.8337 1.99081 7.44828 1.49081 6.84412C0.990814 6.23995 0.740814 5.55245 0.740814 4.78162V4.71912C1.19915 4.98995 1.68873 5.13578 2.20956 5.15662C1.77206 4.84412 1.4179 4.44828 1.14706 3.96912C0.876231 3.48995 0.740814 2.96912 0.740814 2.40662C0.740814 1.82328 0.897064 1.2712 1.20956 0.750366C2.02206 1.7712 3.01165 2.5837 4.17831 3.18787C5.36581 3.79203 6.62623 4.12537 7.95956 4.18787C7.9179 3.93787 7.89706 3.68787 7.89706 3.43787C7.89706 2.85453 8.0429 2.31287 8.33456 1.81287C8.62623 1.29203 9.02206 0.885783 9.52206 0.594116C10.0221 0.30245 10.5637 0.156616 11.1471 0.156616C11.6262 0.156616 12.0637 0.250366 12.4596 0.437866C12.8762 0.625366 13.2408 0.875366 13.5533 1.18787C14.3033 1.04203 15.0012 0.781616 15.6471 0.406616C15.3971 1.17745 14.9179 1.78162 14.2096 2.21912C14.8346 2.13578 15.4596 1.9587 16.0846 1.68787C15.6262 2.35453 15.0741 2.92745 14.4283 3.40662Z")
      a.social__item(
        href="https://plus.google.com/",
        target="_blank"
      )
        svg(
          width="20",
          height="13",
          viewBox="0 0 20 13",
          fill="none",
          xmlns="http://www.w3.org/2000/svg"
        )
          path.social__icon(d="M12.2225 5.78162C12.285 6.13578 12.3163 6.46912 12.3163 6.78162C12.3163 7.92745 12.0767 8.94828 11.5975 9.84412C11.1184 10.7191 10.4413 11.4066 9.56628 11.9066C8.69128 12.4066 7.69128 12.6566 6.56628 12.6566C5.48295 12.6566 4.47253 12.3858 3.53503 11.8441C2.61837 11.3024 1.8892 10.5733 1.34753 9.65662C0.826701 8.73995 0.566284 7.73995 0.566284 6.65662C0.566284 5.57328 0.826701 4.57328 1.34753 3.65662C1.8892 2.73995 2.61837 2.01078 3.53503 1.46912C4.47253 0.92745 5.48295 0.656616 6.56628 0.656616C8.12878 0.656616 9.46212 1.17745 10.5663 2.21912L8.94128 3.78162C8.31628 3.17745 7.52462 2.87537 6.56628 2.87537C5.89962 2.87537 5.27462 3.04203 4.69128 3.37537C4.12878 3.7087 3.68087 4.16703 3.34753 4.75037C3.0142 5.3337 2.84753 5.96912 2.84753 6.65662C2.84753 7.34412 3.0142 7.97953 3.34753 8.56287C3.68087 9.1462 4.12878 9.60453 4.69128 9.93787C5.27462 10.2712 5.89962 10.4379 6.56628 10.4379C7.29545 10.4379 7.93087 10.2816 8.47253 9.96912C8.91003 9.71912 9.2642 9.36495 9.53503 8.90662C9.7642 8.55245 9.91003 8.2087 9.97253 7.87537H6.56628V5.78162H12.2225ZM18.0038 6.00037V4.25037H16.2538V6.00037H14.535V7.75037H16.2538V9.50037H18.0038V7.75037H19.7538V6.00037H18.0038Z")
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
      .lang__item.text-body.lang__item--active.text-color
        | RU
      .lang__item.text-body.text-color
        | EN

</template>

<script>
export default {
  name: "Footer",
  props: {
    isContrast: {
      type: Boolean,
      required: true
    },

    isLast: {
      type: Boolean,
      required: true
    },
  }
};
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

  &__icon {
    fill: $color-text;
  }
}
.scroll {
  animation: mousemove 1.5s alternate infinite;
  width: 30px;

  &__mouse {
    stroke: #fefefe;
    stroke-width: 1.18129;
  }
  &__wheel {
    stroke: #fefefe;
    stroke-width: 1.18129;
    stroke-linecap: round;
    stroke-dasharray: 10;
    stroke-dashoffset: 10;
    animation: scroll 1.5s linear alternate infinite;
  }
  &__stroke {
    fill: none;
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

.contrast {
  .lang {
    &__item {
      border-color: $color-text--contrast;
    }
  }

  .scroll {
    &__mouse {
      stroke: $color-text--contrast;
      stroke-width: 1.18129;
    }
    &__wheel {
      stroke: $color-text--contrast;
    }
  }

  .social {
    &__icon {
      fill: $color-text--contrast;
    }
  }
}

.last {
  .scroll {
    display: none;
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
