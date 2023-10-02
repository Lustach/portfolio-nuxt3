<template>
  <div id="work" class="works">
    <div class="container">
      <h5 style="text-align: center; padding: 1rem 0 1.4rem 0">
        Некоторые примеры разработанных мной приложений
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
                {{ project.category }}
              </div>
              <div class="work__title">
                {{ project.title }}
                <time class="work__date" :datetime="dateTime">{{ project.date }}</time>
              </div>
            </div>
          </div>
        </div>
        <div v-if="filterProjectList.length === 0">Ничего нет</div>
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

const modalStore = useModalsStore();
const modalState = modalStore.modalState;
const store = useMainStore();
const dateTime = new Date().getFullYear();
const filterParam = ref("Все");
const worksList = ref([
  {
    title: "Все",
    key: "Все",
  },
  {
    title: "Приложения",
    key: "Приложение",
  },
  {
    title: "Лендинги",
    key: "Лендинг",
  },
  {
    title: "Виджеты",
    key: "Виджет",
  },
  {
    title: "Разное",
    key: "Разное",
  },
]);
const filterProjectList = computed(() => {
  const projectList = store.projectList;
  const filteredProjects =
    filterParam.value !== "Все"
      ? projectList.filter((e) => e.category === filterParam.value)
      : projectList;
  return filteredProjects;
});
const selectedProject = ref(null);
const showProjectModal = (project) => {
  console.log(project);
  selectedProject.value = project;
  modalState.isShowProject = true;
};
</script>

<style scoped></style>
