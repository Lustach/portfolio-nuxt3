import {reactive} from 'vue';
import { setBodyOverflow, deleteBodyOverflow } from "@/composables/useBodyOverflow";
import { defineStore } from 'pinia';
export const useModalsStore = defineStore('modals',()=> {
  //{ [key: string]: boolean }
    const modalState:{ [key: string]: boolean } = reactive({
        isShowProject: false,
        isShowResume: false,
        isShowHireMe: false,
    })
    //"isShowProject"|"isShowResume"|"isShowHireMe"
    function close(modalStateKey:"isShowProject"|"isShowResume"|"isShowHireMe") {
      deleteBodyOverflow()
      modalState[modalStateKey] = false;
    }
    function showHireMe() {
      setBodyOverflow();
      modalState.isShowHireMe = !modalState.isShowHireMe;
    }
    function showResume() {
      setBodyOverflow();
      modalState.isShowResume = !modalState.isShowResume;
    }

    return {
        modalState,
        close,
        showHireMe,
        showResume,
    }
})
