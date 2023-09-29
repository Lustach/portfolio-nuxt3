// In Setup Stores:

// ref()s become state properties
// computed()s become getters
// function()s become actions
import {reactive} from 'vue'
import { setBodyOverflow, deleteBodyOverflow } from "@/composables/useBodyOverflow";
import { defineStore } from 'pinia'
export const useModalsStore = defineStore('modals',()=> {
    //: { [key: string]: boolean } 
    const modalState = reactive({
        isShowProject: false,
        isShowResume: false,
        isShowHireMe: false,
    })
    function close(modalStateKey) {
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
