//todo очередные атланты не удосужились нормально прикрутить работу плагинов.
// import { createI18n } from 'vue-i18n'
// import { defineNuxtPlugin} from "#app";
import en from './locales/en.json'
import ru from './locales/ru.json'
// import { getStorage } from '~/utils/storage';
import {useLocalStorage} from '@vueuse/core'
import { getData, setData } from 'nuxt-storage/local-storage';
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
const lang = useLocalStorage('lang')
console.log(lang)
export default defineI18nConfig(() => ({
  legacy: false,
  locale: lang.value || 'en',
  // locale: 'en',
  fallbackLocale: ['ru'],
  messages: {
    en,ru
  }
}))