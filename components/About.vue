<template>
  <section id="about_me" class="about">
    <div class="container">
      <div class="about__inner">
        <div class="about__photo">
          <picture>
            <source srcset="@/assets/images/designer_photo.webp" type="image/webp" />
            <img
              loading="lazy"
              src="@/assets/images/designer_photo.png"
              class="intro__photo img"
              alt=""
          /></picture>
        </div>
        <div class="about__content">
          <h3 class="about__title">Обо мне</h3>
          <h2 class="about__bigtitle">КТО ЖЕ Я?</h2>
          <div class="about__text">
            <p>
              {{ $t("about.text") }}
            </p>
            <p>
              Предлагаю свои услуги с полным пониманием, что на мне лежит ответственность
              за выполнение задач. Понимаю, что предстоит работа в команде над проектами,
              и буду безумно рад если команда будет заинтересована в качестве выполнения
              работы и соблюдать рационализм. Всю прочую информацию вы найдёте
              <a href="https://hh.ru/resume/d35c57baff0728b9b40039ed1f4c534a526557"
                >здесь.</a
              >
            </p>
            <div class="about__list__container" tabindex="0">
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
</script>

<style scoped></style>
