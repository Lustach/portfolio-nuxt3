<template>
  <section class="intro">
    <div class="container">
      <div class="intro__inner">
        <div class="intro__content">
          <h2 class="intro__subtitle">Здравствуй</h2>
          <h1 class="intro__title">Я Влад Луста</h1>
          <div class="intro__text">Frontend-разработчик</div>
          <div class="social">
            <!-- Svg sprites -->
            <!-- <a
              href="https://vk.com/tartarin3"
              class="social__link social__link_vk"
            >
              <svg>
                <use
                  xlink:href="@/assets/images/svgSprites.svg#vk"
                  xmlns="http://www.w3.org/2000/svg"
                ></use>
              </svg>
            </a> -->
            <a
              href="https://github.com/Lustach"
              class="social__link social__link_github"
            >
              <svg>
                <use
                  xlink:href="@/assets/images/svgSprites.svg#github"
                  xmlns="http://www.w3.org/2000/svg"
                ></use>
              </svg>
            </a>
            <a href="https://t.me/Lustach" class="social__link">
              <svg>
                <use
                  xlink:href="@/assets/images/svgSprites.svg#telegram"
                  xmlns="http://www.w3.org/2000/svg"
                ></use>
              </svg>
            </a>
            <a href="mailto:lusta.vlad2001@gmail.com" class="social__link">
              <svg>
                <use
                  xlink:href="@/assets/images/svgSprites.svg#email"
                  xmlns="http://www.w3.org/2000/svg"
                ></use>
              </svg>
            </a>
          </div>
          <!--          <a class="btn" data-modal="#modal_hire_me" @click="showHireMe">Нанять</a>-->
          <button
            type="button"
            class="btn"
            data-modal="#modal_resume"
            @click="showResume()"
          >
            Резюме
          </button>
        </div>
        <picture>
          <source srcset="@/assets/images/photo.webp" type="image/webp" />
          <img
            loading="lazy"
            src="@/assets/images/photo.png"
            class="intro__photo"
            alt=""
        /></picture>
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
