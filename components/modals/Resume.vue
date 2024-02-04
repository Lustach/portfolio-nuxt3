<template>
  <div id="modal_resume" class="modal">
    <div class="modal__dialog">
      <button class="modal__close" type="button" @click="close('isShowResume')">
        <img loading="lazy" src="@/assets/images/times-circle.svg" alt="Close" />
      </button>
      <div class="modal__content">
        <h3 class="modal__title text-center" data-modal="#modal_resume">
          {{ t("resume") }}
        </h3>
        <div class="timeline">
          <div class="timeline__col timeline__col--left">
            <h4 class="timeline__title">{{ t("experience") }}</h4>
            <div v-for="(exp, key) in experienceList" :key="key" class="timeline__item">
              <time class="timeline__date" :datetime="exp.date_start"
                >{{ exp.date_start }} - <b>{{ exp.date_end }}</b></time
              >
              <h5 class="timeline__subtitle">
                {{ exp.company }}
              </h5>
              <div class="timeline__position">
                {{ exp.position }}
              </div>
              <div class="timeline__text">
                <p>
                  {{ exp.description }}
                </p>
              </div>
            </div>
          </div>

          <div class="timeline__col timeline__col--right">
            <h4 class="timeline__title">{{ t("education") }}</h4>

            <div class="timeline__item">
              <time class="timeline__date" datetime="11-21-2019">2018 - 2022</time>
              <h5 class="timeline__subtitle">{{ t("cafedra") }}</h5>
              <div class="timeline__position">{{ t("city") }}</div>
            </div>
            <!--            <h4 class="timeline__title">-->
            <!--              Навыки:-->
            <!--            </h4>-->

            <!--            <div class="progress-bar">-->
            <!--              <h3 class="">-->
            <!--                Hard:-->
            <!--              </h3>-->
            <!--              <div class="progress-bar__container">-->
            <!--                <div class="progress-bar__item" style="display: flex;    flex-direction: column;    align-items: baseline;">-->
            <!--                  <div v-for="(skill,key) in skillList.hard" :key="key" class="progress-bar__left">-->
            <!--                    <div class="progress-bar__title">-->
            <!--                      {{ skill.name }}-->
            <!--                    </div>-->
            <!--                  </div>-->
            <!--                </div>-->
            <!--                <div class="progress-bar__progress__container" style="padding-left: 1.2rem;">-->
            <!--                  <div v-for="(skill,key) in skillList.hard" :key="key" class="progress-bar__item">-->
            <!--                    <div class="progress-bar__right">-->
            <!--                      <div class="progress-bar__bar">-->
            <!--                        <div class="progress-bar__progress" :style="{width: skill.progress + '%'}"/>-->
            <!--                      </div>-->
            <!--                    </div>-->
            <!--                  </div>-->
            <!--                </div>-->
            <!--              </div>-->
            <!--              <h3 class="">-->
            <!--                Soft:-->
            <!--              </h3>-->
            <!--              <div class="progress-bar__container">-->
            <!--                <div class="progress-bar__item" style="display: flex;    flex-direction: column;    align-items: baseline;">-->
            <!--                  <div v-for="(skill,key) in skillList.soft" :key="key" class="progress-bar__left">-->
            <!--                    <div class="progress-bar__title">-->
            <!--                      {{ skill.name }}-->
            <!--                    </div>-->
            <!--                  </div>-->
            <!--                </div>-->
            <!--                <div class="progress-bar__progress__container" style="padding-left: 1.2rem;">-->
            <!--                  <div v-for="(skill,key) in skillList.soft" :key="key" class="progress-bar__item">-->
            <!--                    <div class="progress-bar__right">-->
            <!--                      <div class="progress-bar__bar">-->
            <!--                        <div class="progress-bar__progress" :style="{width: skill.progress + '%'}"/>-->
            <!--                      </div>-->
            <!--                    </div>-->
            <!--                  </div>-->
            <!--                </div>-->
            <!--              </div>-->
            <!--            </div>-->
          </div>
        </div>
        <!-- /.timeline__col -->
        <div class="text-center">
          <!--          <a class="btn" href="#" data-modal="#modal_hire_me" @click="showHireMe()">Нанять</a>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, inject } from "vue";
import { useModalsStore } from "@/store/modals";
const modalStore = useModalsStore();
const close = modalStore.close;
const { t, locale } = useI18n();
type experienceList = {
  date_start: string;
  date_end: string;
  company: string;
  position: string;
  description: string;
};
const experienceList: experienceList[] = reactive([
  {
    date_start: "2022",
    date_end: "2023",
    company: "Citadel.one",
    position: "Vue Front-end developer",
    description: `Крипто платформа, предоставляющая для пользователя интуитивный UI/UX, аналитические функции, встроенные приложения. А для разработчиков - создание приложений с помощью SDK.`,
    descriptionen: `Crypto platform that provides the user with an intuitive UI/UX, analytical functions, and built-in applications. And for developers - creating applications using the SDK.`,
  },
  {
    date_start: "2021",
    date_end: "2022",
    company: "Trinity Group",
    position: "Vue Front-end developer",
    description: `Разработка личного кабинета сайта-агреггатора благотворительных фондов(НКО) с нуля с использованием Vue, Vuex, Pinia, Vue-Router, Element-ui, Cypress, vtu, jest. Доработка и разработка лендингов.
          Создание виджета с использованием Typescript, webpack
        `,
    descriptionen: `Development of a personal account for a website aggregator of charitable foundations (NPOs) from scratch using Vue, Vuex, Pinia, Vue-Router, Element-ui, Cypress, vtu, jest. Finalization and development of landing pages.
      Creating a widget using Typescript, webpack
    `,
  },
  {
    date_start: "2020",
    date_end: "2021",
    company: "CraftGroup",
    position: "Vue Front-end developer",
    description:
      "Создание проектов с нуля, доработка crm с использованием Vue, Vuex, Vue-router Vuetify, Quasar, адаптивная вёрстка проектов с использованием pug, sass, gulp, webpack, bootstrap",
    descriptionen:
      "Creation of projects from scratch, modification of crm using Vue, Vuex, Vue-router Vuetify, Quasar, adaptive layout of projects using pug, sass, gulp, webpack, bootstrap",
  },
  {
    date_start: "2020",
    date_end: "2021",
    company: "Freelance",
    position: "Front-end developer",
    description: `Разработка проектов различной сложности. Разработка одностраничных лендингов. Разработка виджетов по поиску автозапчастей. Выполнено полное проектирование проекта с нуля и реализация бизнес-задач по созданию системы подбора автозапчастей. Система предоставляет весь необходимый функционал по удобному подбору по фильтрам, сортировкам, заказам, продажам и поиску запчастей для автомобилей.
  Использованы технологии: Vue,Vuetify, JavaScript, TypeScript.`,
    descriptionen: `Development of projects of varying complexity. Development of one-page landing pages. Development of widgets for searching auto parts. Completed the complete design of the project from scratch and the implementation of business tasks to create a system for selecting auto parts. The system provides all the necessary functionality for convenient selection by filters, sorting, orders, sales and search for spare parts for cars.
  Technologies used: Vue, Vuetify, JavaScript, TypeScript.`,
  },
  {
    date_start: "2019",
    date_end: "2020",
    company: "Astelit",
    position: "Vue Front-end developer",
    description: `Создание основного интерфейса CMS системы для автоматизации бизнеса с использованием Vue.js, Vuex, Vue-router, TypeScript. Разработка лендинга с использованием Nuxt.
           Рефакторинг проекта на основе Vuetify. Доработка интерфейса CRM, разработка виджетов для CMS на Vue, TypeScript, Vuetify `,
    descriptionen: `Creation of the main interface of a CMS system for business automation using Vue.js, Vuex, Vue-router, TypeScript. Landing page development using Nuxt.
      Refactoring a project based on Vuetify. Improvement of the CRM interface, development of widgets for CMS in Vue, TypeScript, Vuetify`,
  },
]);
const skillList = reactive({
  hard: [
    {
      name: "JavaScript",
      progress: "90",
    },
    {
      name: "HTML/CSS",
      progress: "95",
    },
    {
      name: "TypeScript",
      progress: "85",
    },
    {
      name: "Vue",
      progress: "95",
    },
  ],
  soft: [
    {
      name: "Коммуницирование",
      progress: "99",
    },
    {
      name: "Стрессоустойчивость",
      progress: "95",
    },
    {
      name: "Дисциплинированность",
      progress: "99",
    },
    {
      name: "Ответственность",
      progress: "95",
    },
    {
      name: "Усидчивость",
      progress: 90,
    },
  ],
});
const projectTitle = (i: number, key: keyof experienceList): string => {
  const localizedKey = (key + locale.value) as keyof experienceList;
  return experienceList[i][localizedKey] || experienceList[i][key];
};
</script>

<style scoped></style>
