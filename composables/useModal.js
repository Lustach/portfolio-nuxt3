import { setBodyOverflow } from "@/composables/useBodyOverflow";
import {reactive} from 'vue'
export default function useModal(){
    //: { [key: string]: boolean } 
    const modalState = reactive({
        isShowProject: false,
        isShowResume: false,
        isShowHireMe: false,
      });
    const close = (modalFlag) => {
      setBodyOverflow();
      modalState[modalFlag] = false;
    }
    const showHireMe = () => {
      modalState.isShowHireMe = !modalState.isShowHireMe;
    }
    const showResume = () => {
      console.log(modalState.isShowResume,'showResume')
      modalState.isShowResume = !modalState.isShowResume;

    }
    provide('modalState',modalState)

    return {
        close,
        showHireMe,
        showResume,
    }
}
