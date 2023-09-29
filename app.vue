<template>
  <div>
    <Header/>
    <Intro />
    <Works />
    <About />
    <Footer />
    <Resume v-show="modalState.isShowResume" />
    <!-- <Project
      v-if="modalState.isShowProject"
      :project="project.project"
      @close="closeModal('isShowProject')"
    /> -->
    <!-- 

    <HireMe v-show="modalState.isShowHireMe" @close="closeModal('isShowHireMe')" /> -->
  </div>
</template>
<script setup>
import { inject } from "vue";
import { useModalsStore } from "@/store/modals";
import { useMainStore } from "@/store/store";
import Resume from "@/components/modals/Resume";
const store = useMainStore();
const modalState = useModalsStore().modalState;
</script>
<style lang="scss">
@import "@/assets/scss/main.scss";
</style>
