//todo очередные атланты не удосужились нормально прикрутить работу плагинов.
// import { createI18n } from 'vue-i18n'
// import { defineNuxtPlugin} from "#app";
import en from './locales/en.json'
import ru from './locales/ru.json'
// // You can use `defineI18nConfig` to get type inferences for options to pass to vue-i18n.
// export default defineNuxtPlugin(({vueApp  }) => {
//   const i18n = createI18n({
//     legacy: false,
//     globalInjection: true,
//     locale: 'en',
//     messages: {
//       en,
//       ru
//     }
//     })
//     vueApp.use(i18n)
// })

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en,ru
  }
}))