<template>
  <div id="modal_project" class="modal">
    <div class="modal__dialog">
      <button class="modal__close" type="button" @click="close('isShowProject')">
        <img loading="lazy" src="@/assets/images/times-circle.svg" alt="Close" />
      </button>
      <div class="modal-work">
        <div class="modal-work__preview">
          <img
            v-if="activeImg"
            :src="activeImgSrc"
            alt=""
            loading="lazy"
            class="modal-work__photo"
          />
          <div class="carousel__items_circle__wrapper">
            <div
              v-for="(item, key) in project.imgList"
              :key="key"
              class="carousel__items_circle"
            />
          </div>
          <div class="carousel__actions">
            <button
              class="modal-work__btn prev"
              type="button"
              style="transform: scale(3.5)"
              @click="showPrevImg()"
            >
              <img
                loading="lazy"
                src="@/assets/images/chevron-left.svg"
                height="11"
                alt=""
              />
            </button>
            <button
              class="modal-work__btn prev"
              type="button"
              style="transform: scale(3.5)"
              @click="showNextImg()"
            >
              <img
                loading="lazy"
                src="@/assets/images/chevron-right.svg"
                height="11"
                alt=""
              />
            </button>
          </div>
        </div>
        <div class="modal-work__content">
          <div class="modal-work__header">
            <h3 class="modal-work__title">
              <a target="_blank" :href="project.link">{{ projectPropByKey("title") }}</a>
            </h3>
            <div class="modal-work__info">
              {{ t("works.categories." + project.category) }}
              <span class="modal-work__info-divider">|</span>
              {{ project.date }}
            </div>
          </div>

          <div class="modal-work__client">
            <div class="modal-work__client-title">{{ t("company") }}:</div>
            <div class="modal-work__client-company">
              {{ project.clientOrCompany }}
            </div>
          </div>

          <div class="modal-work__text">
            {{ projectPropByKey("description") }}
          </div>

          <!--          <div class="modal-work__footer">-->
          <!--            <button class="modal-work__btn prev" type="button">-->
          <!--              <img-->
          <!--                loading="lazy"-->
          <!--                src="@/assets/images/chevron-left.svg"-->
          <!--                height="11"-->
          <!--                alt=""-->
          <!--              />-->
          <!--              Previous-->
          <!--            </button>-->
          <!--            <button class="modal-work__btn next" type="button">-->
          <!--              Next-->
          <!--              <img-->
          <!--                loading="lazy"-->
          <!--                src="@/assets/images/chevron-right.svg"-->
          <!--                height="11"-->
          <!--                alt=""-->
          <!--              />-->
          <!--            </button>-->
          <!--          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onBeforeMount } from "vue";
import { useModalsStore } from "@/store/modals";
const modalStore = useModalsStore();
const close = modalStore.close;
const props = defineProps({ project: { type: Object, required: true } });
const { t, locale } = useI18n();

const activeImg = ref("");
const activeImgIndex = ref(0);
const projectImgListLength = computed(() => props.project.imgList.length);
onBeforeMount(() => {
  console.log(props.project.imgList);
  activeImg.value = props.project.imgList[activeImgIndex.value];
});
const showPrevImg = () => {
  if (activeImgIndex.value < projectImgListLength.value && activeImgIndex.value > 0) {
    activeImgIndex.value--;
  } else if (!!activeImgIndex.value) {
    activeImgIndex.value = projectImgListLength.value - 1;
  } else {
    activeImgIndex.value--;
  }
  activeImg.value = props.project.imgList[activeImgIndex.value];
};
const showNextImg = () => {
  if (activeImgIndex.value < projectImgListLength.value - 1) {
    activeImgIndex.value++;
  } else {
    activeImgIndex.value = 0;
  }
  activeImg.value = props.project.imgList[activeImgIndex.value];
};
const activeImgSrc = computed(() => {
  return new URL(`/assets/images/projects/${activeImg.value}`, import.meta.url).href;
});
const projectPropByKey = (key: string) => {
  return props.project[key + locale.value] || props.project[key + "ru"];
};
</script>

<style scoped lang="scss">
.carousel {
  &__items {
    &_circle {
      width: 10px;
      height: 10px;
      border-radius: 100%;
      background: black;
      margin-right: 5px;

      &__wrapper {
        padding-bottom: 40px;
        display: flex;
        margin-top: 10px;
      }
    }
  }

  &__actions {
    width: 95%;
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
    position: absolute;
  }
}
</style>
