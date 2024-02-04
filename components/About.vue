<template>
  <section id="about_me" class="about">
    <div class="container">
      <div class="about__inner">
        <div class="about__photo">
          <picture>
            <!-- <source srcset="@/assets/images/designer_photo.webp" type="image/webp" /> -->
            <img
              loading="lazy"
              src="@/assets/images/Photo2.jpg"
              class="intro__photo img"
              alt=""
            />
          </picture>
        </div>
        <div class="about__content">
          <h3 class="about__title">{{ $t("aboutMe") }}</h3>
          <h2 class="about__bigtitle">{{ $t("about.whoAmI") }}</h2>
          <div class="about__text">
            <p>
              {{ $t("about.text") }}
            </p>
            <!-- <p>
              Всю прочую информацию вы найдёте
              <a href="https://hh.ru/resume/d35c57baff0728b9b40039ed1f4c534a526557"
                >здесь.</a
              >
            </p> -->
            <!-- <div class="about__list__container" tabindex="0">
              <ul>
                <h3>Для вёрстки</h3>
                <ol>
                  <h4>Предпочитаю:</h4>
                  <ul>
                    <li>HTML</li>
                    <li>SCSS</li>
                    <li>Gulp</li>
                  </ul>
                  <h4>Владею:</h4>
                  <ul>
                    <li>PUG</li>
                    <li>Less</li>
                    <li>Bootstrap/other</li>
                    <li>Webpack</li>
                  </ul>
                </ol>
              </ul>
              <ul>
                <h3>Для логики</h3>
                <ol>
                  <h4>Предпочитаю:</h4>
                  <ul>
                    <li>Vue</li>
                    <li>JS/TS</li>
                    <li>Pnpm</li>
                    <li>Webpack</li>
                  </ul>
                  <h4>Владею:</h4>
                  <ul>
                    <li>Nuxt</li>
                    <li>Vite/RollUp</li>
                  </ul>
                </ol>
              </ul>
              <ul>
                <h3>Для тестов</h3>
                <ol>
                  <h4>Предпочитаю:</h4>
                  <ul>
                    <li>Cypress</li>
                  </ul>
                  <h4>Владею:</h4>
                  <ul>
                    <li>Jest/Vue-test-utils</li>
                  </ul>
                </ol>
              </ul>
              <ul>
                <h3>UI-библиотеки</h3>
                <ol>
                  <h4>Предпочитаю:</h4>
                  <ul>
                    <li>Vuetify</li>
                    <li>Quasar</li>
                    <li>Naive-ui</li>
                  </ul>
                  <h4>Владею:</h4>
                  <ul>
                    <li>Element-ui</li>
                    <li>Bootstrap-Vue</li>
                  </ul>
                </ol>
              </ul>
              <ul>
                <h3>Прочее</h3>
                <ol>
                  <h4>Предпочитаю:</h4>
                  <ul>
                    <li>Docker</li>
                    <li>Figma</li>
                  </ul>
                </ol>
              </ul>
              <ul>
                <h3>Для Backend-a</h3>
                <ol>
                  <h4>Предпочитаю:</h4>
                  <ul>
                    <li>Node</li>
                    <li>Fastify</li>
                    <li>MongoDB</li>
                  </ul>
                  <h4>Владею:</h4>
                  <ul>
                    <li>Express</li>
                  </ul>
                </ol>
              </ul>
            </div> -->
            <div class="skills__container">
              <ul class="skills__list" v-for="(item, key) in skillsList" :key="key">
                <li class="skills__title">{{ item.title }}</li>
                <ul class="skills__sublist">
                  <li v-for="(skill, skillKey) in item.list" :key="skillKey">
                    {{ skill }}
                  </li>
                </ul>
              </ul>
            </div>
          </div>
          <!--          <a class="btn" data-modal="#modal_hire_me" @click="showHireMe">Нанять</a>-->
          <button
            class="btn"
            type="button"
            data-modal="#modal_resume"
            @click="showResume()"
          >
            Резюме
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useModalsStore } from "@/store/modals";
const modalStore = useModalsStore();

const showResume = modalStore.showResume;
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();
const skillsList = ref([
  {
    title: locale.value === "ru" ? "БАЗА" : "BASE",
    list: ["HTML", "JS", "TS", "CSS"],
  },
  {
    title: "CSS",
    list: ["SASS", "LESS", "PUG", "STYLED-COMPONENTS", "CSS-MODULES"],
  },
  {
    title: "UI-LIBS",
    list: [
      "VUETIFY",
      "QUASAR",
      "ELEMENT-UI",
      "NAIVE",
      "RADIX",
      "PRIME_VUE",
      "MATERIAL-DESIGN",
      "BOOTSTRAP",
      "CHART.JS",
    ],
  },
  {
    title: "Tests",
    list: ["Jest", "Vitest", "VTU", "Cypress"],
  },
  {
    title: "Forms",
    list: ["VUE FORMKIT", "YUP", "VEE VALIDATE", "VUELIDATE"],
  },
  {
    title: "Bundlers",
    list: ["webpack", "vite"],
  },
  {
    title: "CI/CD",
    list: ["DOCKER", "GITLAB"],
  },
  {
    title: "FRAMEWORKS",
    list: ["VUE 2/3", "NUXT"],
  },
]);
</script>

<style scoped lang="scss">
ul {
  list-style: none;
  /* display: flex; */
  li:not(.skills__title) {
    width: fit-content;
    padding: 4px 8px;
    background: #f3f3f3;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
      background: #d5d5d5;
    }
  }
  li.skills__title {
    text-align: center;
    font-size: 18px;
  }
}
.skills__sublist {
  display: flex;
  gap: 10px;
  font-size: 14px;
  flex-wrap: wrap;
}
img {
  width: 100%;
}
</style>
