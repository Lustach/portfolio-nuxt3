<template>
  <div id="work" class="works">
    <div class="container">
      <h5 style="text-align: center; padding: 1rem 0 1.4rem 0">
        {{ t("works.H5") }}
      </h5>
      <div class="works__nav">
        <NuxtLink
          v-for="(category, key) in worksList"
          :key="key"
          to=""
          class="works__nav-link"
          @click.native="filterParam = category.key"
        >
          {{ category.title }}
        </NuxtLink>
      </div>
      <div class="portfolio">
        <div
          v-for="(project, key) in filterProjectList"
          :key="key"
          class="portfolio__col"
          @click="showProjectModal(project)"
        >
          <div class="work">
            <picture>
              <source :srcset="project.img" type="image/webp" />
              <img loading="lazy" :src="project.img" alt="" class="work__image"
            /></picture>
            <div class="work__content">
              <div class="work__cat">
                {{ t("works.categories." + project.category) }}
              </div>
              <div class="work__title">
                {{ projectTitle(key) }}
                <time class="work__date" :datetime="dateTime">{{ project.date }}</time>
              </div>
            </div>
          </div>
        </div>
        <div v-if="filterProjectList.length === 0">{{ t("works.nothingFounded") }}</div>
      </div>
    </div>
    <Project
      v-if="modalState.isShowProject"
      :project="selectedProject"
      @close="closeModal('isShowProject')"
    />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useMainStore } from "~/store/store";
import { useModalsStore } from "@/store/modals";
import Project from "@/components/modals/Project";
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();
const modalStore = useModalsStore();
const modalState = modalStore.modalState;
const store = useMainStore();
const dateTime = new Date().getFullYear();
const filterParam = ref("all");
const worksList = ref([
  {
    title: t("works.categories.all"),
    key: "all",
  },
  {
    title: t("works.categories.app"),
    key: "app",
  },
  {
    title: t("works.categories.landing"),
    key: "landing",
  },
  {
    title: t("works.categories.widget"),
    key: "widget",
  },
  {
    title: t("works.categories.other"),
    key: "other",
  },
]);
const projectList = store.projectList;
const filterProjectList = computed(() => {
  const filteredProjects =
    filterParam.value !== "all"
      ? projectList.filter((e) => e.category === filterParam.value)
      : projectList;
  return filteredProjects;
});
const selectedProject = ref(null);
const showProjectModal = (project) => {
  selectedProject.value = project;
  modalState.isShowProject = true;
};
const projectTitle = (key) => {
  return projectList[key]["title" + locale.value] || projectList[key].titleru;
};
</script>

<style scoped></style>
