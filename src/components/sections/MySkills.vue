<template>
   <SectionLayout id="skills">
      <template #section>My Skills</template>
      <template #content>
          <h6 class="mt-5 text-sm md:text-lg font-medium text-default dark:text-dark-default">
             These are technologies I've been working with.
         </h6>
         <div class="skills grid grid-cols-3 lg:grid-cols-6 gap-x-5 lg:gap-y-5 mt-5">
            <!-- Column --> 
            <Skill image="html.png">HTML</Skill>
             <!-- Column -->
            <Skill image="css.png">CSS</Skill>
            <!-- Column -->
            <Skill image="js.png">JavaScript</Skill>
            <!-- Column -->
            <Skill image="php.png">PHP</Skill>
             <!-- Column -->
            <Skill image="mysql.png">MySQL</Skill> 
            <!-- Column -->
            <Skill image="jquery.png">JQuery</Skill> 
            <!-- Column -->
            <Skill image="bootstrap.png">Bootstrap</Skill> 
            <!-- Column --> 
            <Skill image="tailwind.png">Tailwind</Skill>
            <!-- Column -->
            <Skill image="laravel.png">Laravel</Skill>
            <!-- Column -->
            <Skill image="vue.png">Vue.js</Skill>
            <!-- Column -->
            <Skill image="csharp.png">C#</Skill>
            <!-- Column -->
            <Skill image="git.png">Git</Skill>
            <!-- Column --> 
         </div>
      </template>
   </SectionLayout>
</template>

<script setup>
import SectionLayout from '../layouts/SectionLayout.vue'; 
import Skill from '../ui/Skill.vue';
</script>
 