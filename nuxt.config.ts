// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: true,
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/i18n',
  ],
  i18n:{
    vueI18n: '~/plugins/i18n/i18n.ts'
  //   vueI18n: "~/plugins/i18n/i18n",
  }
})
