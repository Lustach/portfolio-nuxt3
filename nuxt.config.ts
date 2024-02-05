// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: false,
  pages: true,
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/i18n',
  ],
  i18n:{
    locales: [
      {
        code: 'en',
        name: 'en'
      },
      {
        code: 'ru',
        name: 'ru'
      },
    ],
    vueI18n: '~/plugins/i18n/i18n',
    experimental: {
      localeDetector: '~/plugins/i18n/localeDetector.js'
    },
  //   vueI18n: "~/plugins/i18n/i18n",
  }
})
