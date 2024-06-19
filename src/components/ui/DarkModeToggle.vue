<template>
  <div id="dark-mode-toggle" class=" flex items-center space-x-2">
    <i class='bx bx-sun dark:text-white'></i>
    <div @click="toggleDarkMode" id="btn-toggle" class=" flex items-center w-10 h-6 p-1 bg-dark-default border rounded-full cursor-pointer dark:bg-dark-secondary">
      <div ref="toggleIndicator" class="toggle-indicator toggled-light transition-transform duration-300 w-4 h-4 rounded-full bg-white"></div>
    </div>
    <i class='bx bx-moon dark:text-white'></i>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const toggleIndicator = ref(null);
const toggleDarkMode = () => {
    if (toggleIndicator.value.classList.contains('toggled-light')) {
        toggleIndicator.value.classList.remove('toggled-light');
        toggleIndicator.value.classList.add('toggled-dark');
        document.documentElement.classList.add('dark');
    } else {
        toggleIndicator.value.classList.remove('toggled-dark');
        toggleIndicator.value.classList.add('toggled-light'); 
        document.documentElement.classList.remove('dark');
    }
}
</script>

<style scoped>

.toggled-light{
   transform: translateX(0px);
}
.toggled-dark{
   transform: translateX(100%);
}
</style>