<template>
   <SectionLayout id="skills">
      <template #section>My Skills</template>
      <template #content>
          <h6 class="mt-5 text-sm md:text-lg font-medium text-default dark:text-dark-default">
             These are technologies I've been working with.
         </h6>
         <div class="skills grid grid-cols-3 lg:grid-cols-6 gap-x-5 lg:gap-y-5 mt-5"> 
            <Skill image="html.png">HTML</Skill> 
            <Skill image="css.png">CSS</Skill>
            <Skill image="js.png">JavaScript</Skill>
            <Skill image="php.png">PHP</Skill> 
            <Skill image="mysql.png">MySQL</Skill> 
            <Skill image="jquery.png">JQuery</Skill> 
            <Skill image="bootstrap.png">Bootstrap</Skill>  
            <Skill image="tailwind.png">Tailwind</Skill>
            <Skill image="laravel.png">Laravel</Skill>
            <Skill image="vue.png">Vue.js</Skill>
            <Skill image="csharp.png">C#</Skill>
            <Skill image="git.png">Git</Skill> 
         </div>
      </template>
   </SectionLayout>
</template>

<script setup>
import SectionLayout from '../layouts/SectionLayout.vue'; 
import Skill from '../ui/Skill.vue';
</script>
 