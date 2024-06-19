<template> 
   <Navigation />
   <Intro /> 
   <AboutMe /> 
   <MySkills />
   <WorkExperience />
   <Projects />
   <Contact />
   <Footer />
   <PageScroll /> 
</template>
<script setup>
import Navigation from './components/sections/Navigation.vue'; 
import Intro from './components/sections/Intro.vue'; 
import AboutMe from './components/sections/AboutMe.vue'; 
import MySkills from './components/sections/MySkills.vue';
import WorkExperience from './components/sections/WorkExperience.vue';
import Projects from './components/sections/Projects.vue';
import Footer from './components/sections/Footer.vue';
import Contact from './components/sections/Contact.vue';
import PageScroll from './components/ui/PageScroll.vue';  
</script>

<style>
  *{
    font-family: "Montserrat", sans-serif;
   }
   body{
      overflow-x: hidden
   }
</style>
