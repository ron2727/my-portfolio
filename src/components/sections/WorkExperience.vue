<template> 
  <SectionLayout id="experience">
      <template #section>Work Experience</template>
      <template #content>
        <div class="work-experience grid grid-cols-1 lg:grid-cols-8 mt-8lg:mt-20">
          <h6 class=" col-span-2 text-default text-sm md:text-xl font-medium dark:text-dark-default">Jan 2024 - Apr 2024</h6>
          <div id="company" class=" col-span-6 ">
            <h1 class=" text-lg md:text-xl font-bold text-default dark:text-dark-primary">Neksjob Corporation - Intern</h1>
            <h1 class=" text-lg md:text-xl font-bold text-defaultSecondary dark:text-dark-defaultSecondary">Software Developer</h1>
            <p class=" mt-4 text-sm md:text-lg text-default dark:text-dark-default">
              Collaborated to designed and developed a mobile-responsive web for applicants and clients to send messages and apply
              for jobs through forms
            </p>
            <ListTags :tags="['HTML', 'CSS', 'JavaScript', 'Tailwind', 'Vue.js', 'Laravel']" />
          </div>
        </div>
      </template>
   </SectionLayout>
</template>

<script setup>
import SectionLayout from '../layouts/SectionLayout.vue';
import ListTags from '../ui/ListTags.vue';
</script>
 