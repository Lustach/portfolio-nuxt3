import { defineStore } from 'pinia'
import {reactive} from 'vue'
export const useMainStore = defineStore('main', {
  state: () => ({
    projectList: reactive([
        {
          title: "Citadel.one",
          description: "",
          clientOrCompany: "Citadel.one",
          category: "super app",
          skillStacks: ["vue 3", "web 3"],
          link: "https://app.citadel.one",
          date: "2022 - 2023",
        },
        {
          title: "VoBlago",
          description:
            "Выполнено проектирование и разработка с нуля личного кабинета для проекта-агрегатора фондов НКО. Приложение позволяет удобно просматривать фонды и программы, осуществлять пожертвования, как в криптовалюте, так и через обычные платёжные системы. Личный кабинет позволяет зарегистрировать фонд пользователя, проводить быструю настройку его данных, подключать 2 факторную аутентификацию а так же просматривать поступления и собранные деньги с терминалов в виде графиков и таблиц. ",
          clientOrCompany: "TrinityGroup",
          category: "Приложение",
          link: "https://voblago.io/",
          skillStacks: ["vue 3", "vue 2", "Element-UI", "Cypress", "Jest"],
          // путь к картинкам в assets/images/projects
          imgList: [
            "voblago/vblg.png",
            "voblago/vblg1.png",
            "voblago/vblg2.png",
            "voblago/vblg3.png",
            "voblago/vblg4.png",
            "voblago/vblg5.png",
            "voblago/vblg6.png",
            "voblago/vblg7.png",
            "voblago/vblg8.png",
          ],
          // img: 'https://placehold.it/370x250',
          // category: 'website',
          date: "2021 - 2022",
        },
        {
          title: "Крипто-виджет Voblago",
          description:
            "Разработан виджет без использования фреймворков, позволяющий создавать крипто транзакции. Виджет можно подключать на разные сайт как путём подключения скрипта, так и используя iframe",
          clientOrCompany: "TrinityGroup",
          category: "Виджет",
          link: "https://voblago.io/",
          skillStacks: ["TypeScript", "webpack"],
          // путь к картинкам в assets/images/projects
          imgList: [
            "voblago_crypto/vblg1.png",
            "voblago_crypto/vblg2.png",
            "voblago_crypto/vblg3.png",
          ],
          // img: 'https://placehold.it/370x250',
          // category: 'website',
          date: "2021 - 2022",
        },
        {
          title: "CRM Corella",
          description:
            "Разработана система, поддерживающая полный жизненный цикл управления документами и автоматизации бизнес-процессов. " +
            "Предназначена для повышения прозрачности, управляемости и эффективности работы. Система охватывает все этапы жизненного цикла документов: " +
            "от подготовки проектов до организации архивного хранения документов, с обеспечением функций электронного архива. " +
            "Продукт поддерживает использование электронных цифровых подписей для защиты документов.",
          goal: "Организация управления процессами электронного документооборота в органах власти",
          clientOrCompany: 'ГП "АСТЕЛИТ"',
          category: "Приложение",
          skillStacks: ["vue", "Vuetify", "TypeScript"],
          // путь к картинкам в assets/images/projects
          imgList: ["corella/img.png", "corella/img_1.png", "corella/img_2.png"],
          // img: 'https://placehold.it/370x250',
          // category: 'website',
          date: "2019",
        },
        {
          title: "Rabota Today",
          description:
            "Классический сайт для поиска работы. Принимал участие непосредственно в разработке личного кабинета.",
          goal: "Топ 1 сайт для поиска работы в Донецке",
          clientOrCompany: "CraftGroup",
          category: "Приложение",
          link: "https://rabota.today",
          // путь к картинкам в assets/images/projects
          imgList: ["rabotaToday/img.png", "rabotaToday/img_1.png"],
          skillStacks: ["vue", "Vuetify"],
          // img: 'https://placehold.it/370x250',
          // category: 'website',
          date: "2020",
        },
        {
          title: "Duct",
          description:
            "Разработан простой чат, который можно использовать как в корпоративных целях, так и для общего пользования.",
          clientOrCompany: "CraftGroup",
          category: "Приложение",
          link: "https://duct.su/",
          skillStacks: ["vue", "vueBootstrap", "webSockets"],
          // путь к картинкам в assets/images/projects
          imgList: ["duct/img_2.png"],
          // img: 'https://placehold.it/370x250',
          // category: 'website',
          date: "2020",
        },
        {
          title: "Хромотограф.ру",
          description: "Классический многостраничный лендинг",
          clientOrCompany: "CraftGroup",
          category: "Лендинг",
          link: "https://chromatograf.ru/",
          skillStacks: ["html", "saas", "bootstrap", "gulp", "jquery"],
          // путь к картинкам в assets/images/projects
          imgList: [
            "chromotograph/chrm.png",
            "chromotograph/chrm1.png",
            "chromotograph/chrm2.png",
            "chromotograph/chrm3.png",
            "chromotograph/chrm4.png",
            "chromotograph/chrm5.png",
            "chromotograph/chrm6.png",
          ],
          // img: 'https://placehold.it/370x250',
          // category: 'website',
          date: "2021",
        },
        {
          title: "SellingsReviews",
          description:
            "Выполнено полное проектирование проекта-прототипа (с нуля) и реализация бизнес-задач по созданию системы оценок. Проект позволяет продвигать товары на различных" +
            " площадках, в котором продавцы продвигают товары, а клиенты зарабатывают на отзывах",
          clientOrCompany: "Freelance",
          category: "Приложение",
          link: "https://sellingreviews.ru/lk/login",
          skillStacks: ["vue", "Vuetify"],
          // путь к картинкам в assets/images/projects
          imgList: [
            "sellingReviews/img.png",
            "sellingReviews/img_1.png",
            "sellingReviews/img_2.png",
          ],
          // img: 'https://placehold.it/370x250',
          // category: 'website',
          date: "2020",
        },
        {
          title: "ZaPoisk",
          description: `Выполнено полное проектирование проекта (с нуля) и реализация бизнес-задач по созданию системы подбора автозапчастей.
          Система предоставляет весь необходимый функционал по удобному подбору по фильтрам, сортировкам, заказам, продажам и поиску запчастей для автомобилей.`,
          clientOrCompany: "Freelance",
          category: "Приложение",
          link: "http://zap0isk.ru/",
          skillStacks: ["vue", "Vuetify"],
          // путь к картинкам в assets/images/projects
          imgList: [
            "zapoisk/img.png",
            "zapoisk/img_1.png",
            "zapoisk/img_2.png",
            "zapoisk/img_3.png",
            "zapoisk/img_4.png",
          ],
          // img: 'https://placehold.it/370x250',
          // category: 'website',
          date: "2020 - 2021",
        },
        {
          title: "BlagoeDelo",
          description: "Классический сайт-визитка",
          clientOrCompany: "TrinityGroup",
          category: "Лендинг",
          link: "https://blagoedelo.org/",
          skillStacks: ["html", "scss", "gulp"],
          // путь к картинкам в assets/images/projects
          imgList: ["blagoeDelo/bd1.png"],
          // img: 'https://placehold.it/370x250',
          // category: 'website',
          date: "2021",
        },
        {
          title: "Английский для IT-специалистов",
          description: "Классический лендинг",
          clientOrCompany: "CraftGroup",
          category: "Лендинг",
          link: "https://en-land.craft-group.xyz/",
          skillStacks: ["pug", "saas", "gulp"],
          // путь к картинкам в assets/images/projects
          imgList: [],
          // img: 'https://placehold.it/370x250',
          // category: 'website',
          date: "2020",
        },
        {
          title: "Портфолио для Behance",
          description: "Необычный лендинг",
          clientOrCompany: "CraftGroup",
          category: "Лендинг",
          link: "https://behance3.craft-group.xyz/",
          skillStacks: ["pug", "saas", "gulp"],
          // путь к картинкам в assets/images/projects
          imgList: [],
          // img: 'https://placehold.it/370x250',
          // category: 'website',
          date: "2020",
        },
      ]),
  }),
  actions: {
      // `this` is the store instance
  },
})