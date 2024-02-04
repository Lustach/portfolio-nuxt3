import { defineStore } from 'pinia'
import {reactive} from 'vue'
export const useMainStore = defineStore('main', {
  state: () => ({
    projectList: reactive([
        {
          titleru: "Citadel.one",
          descriptionru:
          "Крипто платформа, предоставляющая для пользователя интуитивный UI/UX, аналитические функции, встроенные приложения. А для разработчиков - создание приложений с помощью SDK. ",
          descriptionen: "A crypto platform that provides the user with an intuitive UI/UX, analytical functions, built-in applications. And for developers - creating applications using the SDK.",
          clientOrCompany: "Citadel.one",
          category: "app",
          skillStacks: ["vue 3", "web 3"],
          link: "https://app.citadel.one",
          date: "2022 - 2023",
          imgList: [
            "citadel/img_1.png",
            "citadel/img_2.png",
            "citadel/img_3.png",
            "citadel/img_4.png",
            "citadel/img_5.png",
          ],
        },
        {
          titleru: "VoBlago",
          descriptionru:
            "Выполнил проектирование и разработка с нуля личного кабинета для проекта-агрегатора фондов НКО. Приложение позволяет удобно просматривать фонды и программы, осуществлять пожертвования, как в криптовалюте, так и через обычные платёжные системы. Личный кабинет позволяет зарегистрировать фонд пользователя, проводить быструю настройку его данных, подключать 2 факторную аутентификацию а так же просматривать поступления и собранные деньги с терминалов в виде графиков и таблиц. ",
          descriptionen: "I designed and developed from scratch a personal account for a project-aggregator of NPO funds. The application allows you to conveniently view funds and programs, make donations, both in cryptocurrency and through regular payment systems. The personal account allows you to register a user’s fund and quickly configure its data , connect 2fa and also view receipts and collected money from terminals in the form of graphs and tables.",
            clientOrCompany: "TrinityGroup",
          category: "app",
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
          titleru: "Крипто-виджет Voblago",
          titleen: "Crypto-widget voBlago",
          descriptionru:
            "Разработан виджет без использования фреймворков, позволяющий создавать крипто транзакции. Виджет можно подключать на разные сайт как путём подключения скрипта, так и используя iframe",
          descriptionen: "A widget has been developed without the use of frameworks, allowing you to create crypto transactions. The widget can be connected to different sites either by connecting a script or using an iframe",
            clientOrCompany: "TrinityGroup",
          category: "widget",
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
          titleru: "CRM Corella",
          descriptionru:
            "Разработана система, поддерживающая полный жизненный цикл управления документами и автоматизации бизнес-процессов. " +
            "Предназначена для повышения прозрачности, управляемости и эффективности работы. Система охватывает все этапы жизненного цикла документов: " +
            "от подготовки проектов до организации архивного хранения документов, с обеспечением функций электронного архива. " +
            "Продукт поддерживает использование электронных цифровых подписей для защиты документов.",
          descriptionen: "A system has been developed that supports the full life cycle of document management and business process automation." +
          "Designed to increase transparency, manageability and efficiency. The system covers all stages of the document life cycle: " +
          "from preparing projects to organizing archival storage of documents, providing electronic archive functions." +
          "The product supports the use of electronic digital signatures to protect documents.",
          goal: "Организация управления процессами электронного документооборота в органах власти",
          clientOrCompany: 'ГП "АСТЕЛИТ"',
          category: "app",
          skillStacks: ["vue", "Vuetify", "TypeScript"],
          // путь к картинкам в assets/images/projects
          imgList: ["corella/img.png", "corella/img_1.png", "corella/img_2.png"],
          // img: 'https://placehold.it/370x250',
          // category: 'website',
          date: "2019",
        },
        {
          titleru: "Rabota Today",
          descriptionru:
            "Классический сайт для поиска работы. Принимал участие непосредственно в разработке личного кабинета.",
            descriptionen: "Classic site for job search. Participated directly in the development of the personal account.",
          goal: "Топ 1 сайт для поиска работы в Донецке",
          clientOrCompany: "CraftGroup",
          category: "app",
          link: "https://rabota.today",
          // путь к картинкам в assets/images/projects
          imgList: ["rabotaToday/img.png", "rabotaToday/img_1.png"],
          skillStacks: ["vue", "Vuetify"],
          // img: 'https://placehold.it/370x250',
          // category: 'website',
          date: "2020",
        },
        {
          titleru: "Duct",
          descriptionru:
            "Разработан простой чат, который можно использовать как в корпоративных целях, так и для общего пользования.",
          descriptionen: "A simple chat has been developed that can be used both for corporate purposes and for general use.",
          clientOrCompany: "CraftGroup",
          category: "app",
          link: "https://duct.su/",
          skillStacks: ["vue", "vueBootstrap", "webSockets"],
          // путь к картинкам в assets/images/projects
          imgList: ["duct/img_2.png"],
          // img: 'https://placehold.it/370x250',
          // category: 'website',
          date: "2020",
        },
        {
          titleru: "Хромотограф.ру",
          titleen: "Chromatograph.ru",
          descriptionru: "Классический многостраничный лендинг",
          descriptionen: "Classic multipage landing",
          clientOrCompany: "CraftGroup",
          category: "landing",
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
          titleru: "SellingsReviews",
          descriptionru:
            "Выполнено полное проектирование проекта-прототипа (с нуля) и реализация бизнес-задач по созданию системы оценок. Проект позволяет продвигать товары на различных" +
            " площадках, в котором продавцы продвигают товары, а клиенты зарабатывают на отзывах",
          descriptionen: "I Complete the full design of a prototype project (from scratch) and the implementation of business tasks to create a rating system. The project allows you to promote products on various" +
          "platforms where sellers promote products and customers earn money from reviews",
          clientOrCompany: "Freelance",
          category: "app",
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
          titleru: "ZaPoisk",
          descriptionru: `Выполнено полное проектирование проекта (с нуля) и реализация бизнес-задач по созданию системы подбора автозапчастей.
          Система предоставляет весь необходимый функционал по удобному подбору по фильтрам, сортировкам, заказам, продажам и поиску запчастей для автомобилей.`,
          descriptionen: `I completed the complete design of the project (from scratch) and the formulation of business tasks to create a system for installing auto parts.
          The system provides a choice of all functionality for convenient selection of filters, sorting, orders, sales and search for spare parts for cars.`,
          clientOrCompany: "Freelance",
          category: "app",
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
          titleru: "BlagoeDelo",
          descriptionru: "Классический сайт-визитка",
          descriptionen: "Classic landing-page",
          clientOrCompany: "TrinityGroup",
          category: "landing",
          link: "https://blagoedelo.org/",
          skillStacks: ["html", "scss", "gulp"],
          // путь к картинкам в assets/images/projects
          imgList: ["blagoeDelo/bd1.png"],
          // img: 'https://placehold.it/370x250',
          // category: 'website',
          date: "2021",
        },
        {
          titleru: "Английский для IT-специалистов",
          titleen: "English for It-specialists",
          descriptionru: "Классический лендинг",
          descriptionen: "Classis landing",
          clientOrCompany: "CraftGroup",
          category: "landing",
          link: "https://en-land.craft-group.xyz/",
          skillStacks: ["pug", "saas", "gulp"],
          // путь к картинкам в assets/images/projects
          imgList: [],
          // img: 'https://placehold.it/370x250',
          // category: 'website',
          date: "2020",
        },
        {
          titleru: "Портфолио для Behance",
          titleen: "Portfolio for behance",
          descriptionru: "Необычный лендинг",
          descriptionen: "Not a common landing",
          clientOrCompany: "CraftGroup",
          category: "landing",
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