<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
const { data } = await useFetch("/api/hello");
import {useLocalStorage} from '@vueuse/core'
// const lang = useLocalStorage('lang')
// onBeforeMount(()=>{

// })
</script>
