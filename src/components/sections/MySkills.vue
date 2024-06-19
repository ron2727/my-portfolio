<template>
   <SectionLayout id="skills">
      <template #section>My Skills</template>
      <template #content>
          <h6 class="mt-5 text-sm md:text-lg font-medium text-default dark:text-dark-default">
             These are technologies I've been working with.
         </h6>
         <div class="skills grid grid-cols-3 lg:grid-cols-6 gap-x-5 lg:gap-y-5 mt-5">
            <div v-for="skill in mySkills" class="col group relative flex flex-col items-center justify-center p-4">
               <div class="wrapper group relative">
                  <img :src="`src/assets/image/skills/${skill[0]}.png`" alt="logo" class="w-20 lg:w-24 relative z-0 grayscale">
                  <div class=" overflow-hidden absolute top-0 left-0 z-10 h-0 transition-all duration-500 group-hover:h-full">
                     <img :src="`src/assets/image/skills/${skill[0]}.png`" alt="logo">
                  </div> 
               </div>
               <h6 class=" w-min mt-3 lg:mt-2 font-medium text-default text-sm sm:text-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:text-dark-primary">{{ skill[1] }}</h6>
            </div>
         </div>
      </template>
   </SectionLayout>
</template>

<script setup>
import SectionLayout from '../layouts/SectionLayout.vue';
import { ref } from 'vue'; 
const mySkills = ref([
['html', 'HTML'], 
['css', 'CSS'], 
['js', 'JavaScript'], 
['php', 'PHP'], 
['mysql', 'MySQL'], 
['jquery', 'jQuery'], 
['bootstrap', 'Bootstrap'], 
['tailwind', 'Tailwind'], 
['laravel', 'Laravel'], 
['vue', 'Vue.js'], 
['csharp', 'C#'], 
['git', 'Git']])
</script>
 