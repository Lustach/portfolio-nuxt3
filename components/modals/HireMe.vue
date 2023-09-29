<template>
  <div id="modal_hire_me" class="modal">
    <div class="modal__dialog modal__dialog--sm">
      <button class="modal__close" type="button" @click="close()">
        <img
          loading="lazy"
          src="@/assets/images/times-circle.svg"
          alt="Close"
        />
      </button>

      <div class="contact">
        <div class="contact__left">
          <h3 class="modal__title mb-0">Поболтаем?!</h3>
          <h4 class="modal__subtitle">Позвоните или отправьте письмо</h4>

          <ul class="contact__info">
            <!--            <li class="contact__info-item">-->
            <!--              <img loading="lazy" class="contact__info-icon" src="@/assets/images/phone-square.svg" alt=""/>-->
            <!--              0714494247-->
            <!--            </li>-->
            <li class="contact__info-item">
              <a
                href="mailto:lusta.vlad2001@gmail.com?subject=Предложение о работе"
              >
                <img
                  loading="lazy"
                  class="contact__info-icon"
                  src="@/assets/images/envelope-square.svg"
                  alt=""
                />
                lusta.vlad2001@gmail.com
              </a>
            </li>
            <li class="contact__info-item">
              <a href="https://t.me/Lustach" target="_blank">
                <img
                  loading="lazy"
                  class="contact__info-icon"
                  src="@/assets/images/telegram.svg"
                  alt=""
                />
                @Lustach
              </a>
            </li>
          </ul>
          <!-- todo надо прикручивать бд или по апишке на почту -->
          <ValidationObserver ref="form" class="form" tag="form" method="post">
            <ValidationProvider
              ref="emailOrPhone"
              v-slot="{ errors }"
              slim
              :mode="custom"
              rules="required|email"
            >
              <div class="form__group">
                <label class="form__label" for="input-email"
                  >Адрес электронной почты</label
                >
                <input
                  id="input-email"
                  v-model="email.address"
                  :class="{ 'form__input-error': errors[0] }"
                  class="form__input"
                  name="input-email"
                  type="text"
                  placeholder="Адрес электронной почты"
                />
                <span class="field__error">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
            <ValidationProvider
              ref="message"
              v-slot="{ errors }"
              :mode="custom"
              rules="required|max:1500"
            >
              <div class="form__group">
                <label class="form__label" for="input-text">Сообщение</label>
                <textarea
                  id="input-text"
                  v-model="email.message"
                  :class="{ 'form__input-error': errors[0] }"
                  class="form__textarea"
                  name="input-text"
                  placeholder="Введите сообщение..."
                />
                <span class="field__error">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>

            <div class="text-right">
              <button class="btn" type="submit" @click.prevent="sendEmail()">
                Отправить
              </button>
            </div>
          </ValidationObserver>
        </div>
        <!-- /.contact__left -->
      </div>
      <!-- /.contact -->
    </div>
    <!-- /.modal__dialog -->
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import { required, email, max } from "vee-validate/dist/rules";
import modal from "@/mixins/modal";
//
extend("required", {
  ...required,
  message: "Обязательное поле",
});
extend("email", {
  ...email,
  message: "Невалидный e-mail",
});
extend("max", {
  ...max,
  message: "Превышен лимит символов",
});

export default {
  name: "HireMe",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  mixins: [modal],
  data: () => ({
    email: {
      address: "",
      message: "",
    },
  }),
  methods: {
    async sendEmail() {
      const isValid = await this.$refs.form.validate();
      if (isValid) {
        await this.$API.email.sendEmail(this.email);
        this.close();
      }
    },
    custom(context) {
      if (
        context.flags.required &&
        !context.value &&
        !context.flags.validated
      ) {
        return {
          on: ["blur"],
        };
      }
      if (context.flags.dirty) {
        context.reset();
        return;
      }
      return {
        on: ["change"],
      };
    },
  },
};
</script>

<style scoped></style>
