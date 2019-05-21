<template lang="pug">
  section.contact
    .container
      .row
        .col.col-xs-4.col-sm-2
          h1.contact__title.title 
            | Тест-драйв
          .contact__text.text-body.text-color--muted
            | Найдите дилера в вашем городе 
            br
            | и запишитесь на тест-драйв.
          form.contact-form#contact-form
            input.contact-form__field.text-body.text-color--muted(
              type="text",
              name="city",
              placeholder="Введите ваш город",
              required, v-model="form.data[0].data")
            .contact-form__label.contact-form__label--select
              select.contact-form__field.contact-form__select.text-body.text-color--muted(
                type="text",
                name="affiliate",
                required, v-model="form.data[1].data")
                option.contact-form__option(value="placeholder", selected)
                  | Выберите дилера
                option.contact-form__option(value="diler1")
                  | Автодом на Зорге 17
                option.contact-form__option(value="diler2")
                  | Автодом на Зорге 17
                option.contact-form__option(value="diler3")
                  | Автодом на Зорге 17
                option.contact-form__option(value="diler4")
                  | Автодом на Зорге 17
            input.contact-form__field.text-body.text-color--muted(
              type="text",
              name="name",
              placeholder="Имя",
              required, v-model="form.data[2].data")
            input.contact-form__field.text-body.text-color--muted(
              type="text",
              name="phone",
              placeholder="Телефон",
              required, v-model="form.data[3].data")
            input.contact-form__field.text-body.text-color--muted(
              type="text",
              name="email",
              placeholder="E-mail",
              required, v-model="form.data[4].data")
            label.contact-form__label.contact-form__label--checkbox.text-small.text-color--muted(for="privacy")
              input.contact-form__checkbox#privacy(
                type="checkbox",
                name="privacy",
                required, v-model="form.isAgree")
              span.contact-form__checkmark
              | Согласен 
              a.contact-form__link(href="") с условиями обработки и&nbsp;хранения 
              | персональных данных
            button.contact-form__button.button.text-body.text-color(
              type="submit",
              :disabled="!form.isAgree") Записаться на тест-драйв
    Map
</template>

<script>
import Button from "./Button.vue";
import Map from "./Map.vue";

export default {
  name: "Contact",
  components: {
    Button,
    Map
  },
  props: {},
  data() {
    return {
      form: {
        isAgree: false,
        subject: "Заявка на тест-драйв",
        isSent: false,
        url: "",
        data: [
          {
            label: "Введите ваш город",
            data: ""
          },
          {
            label: "Выберите дилера",
            data: "placeholder"
          },
          {
            label: "Имя",
            phone: ""
          },
          {
            label: "Телефон",
            data: ""
          },
          {
            label: "E-mail",
            data: ""
          }
        ]
      },
    };
  },
};
</script>

<style lang="scss">
.contact {
  height: 100%;

  &__title {
    margin-top: 100px;
  }

  &__text {
    margin-bottom: 25px;
  }

  &-form {
    display: flex;
    flex-flow: column wrap;
    width: 256px;

    &__field {
      width: 100%;
      box-sizing: border-box;
      border: 1px solid #ffffff;
      border-radius: 2px;
      background-color: #000d18;
      padding: 5px 16px 6px;
      margin-bottom: 16px;
    }

    &__field:focus {
      border: 1px solid #f9541c;
    }
    &__select {
      box-sizing: border-box;
      width: 100%;
      appearance: none;
      cursor: pointer;
    }
    &__checkbox {
      display: none;
    }
    &__label {
      position: relative;
      cursor: pointer;
      box-sizing: border-box;

      &--checkbox {
        padding-left: 26px;
        margin-top: -5px;

        & input:checked ~ .contact-form__checkmark:after {
          display: block;
        }
      }

      .contact-form__checkmark:after {
        left: 7px;
        top: -5px;
        width: 6.5px;
        height: 14px;
        border: solid #f9541c;
        border-width: 0 1px 1px 0;
        transform: rotate(45deg);
        background-color: #000d18;
        box-shadow: 3px -4px 1px 1px #000d18;
      }

      &--select {
        &:after {
          content: "";
          color: #cae1d6;
          right: 16px;
          top: 12px;
          width: 7px;
          height: 7px;
          border: solid #cae1d6;
          border-width: 0 1px 1px 0;
          transform: rotate(45deg);
          position: absolute;
          pointer-events: none;
        }
      }
    }
    &__checkmark {
      position: absolute;
      top: 4px;
      left: 0;
      width: 16px;
      height: 16px;
      border: 1px solid #cae1d6;
      box-sizing: border-box;
      border-radius: 2px;

      &:after {
        content: "";
        position: absolute;
        display: none;
      }
    }
    &__link {
      color: #f9541c;
    }
    &__button {
      width: 100%;
      margin-top: 17px;
    }
  }
}

@media screen and (-webkit-min-device-pixel-ratio: 0) {
  select {
    padding-right: 18px;
  }
}

@media screen and (min-width: 1700px) {
  .contact {
    &__title {
      margin-top: 131px;
    }
  }
}
</style>
