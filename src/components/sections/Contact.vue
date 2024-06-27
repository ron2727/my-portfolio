<template>
    <section id="contact">
        <div class=" max-w-xl m-auto py-80 space-y-5 flex flex-col items-center text-center">
            <h1 class=" text-dark-secondary text-2xl md:text-5xl font-bold">Get in touch</h1>
            <p class=" px-4 text-sm md:text-lg text-default dark:text-dark-default">I'm a recent graduate eager to connect and explore new opportunities.
                Whether you have a project in mind, need assistance with web development, or simply want to discuss
                ideas, I'd love to hear from you.</p>
            <div class="email-link-wrapper group relative">
                <a href="mailto:johnronbuere0627@gmail.com" class="email-link relative z-10 font-bold text-default text-sm md:text-lg dark:text-dark-default">johnronbuere0627@gmail.com</a>
                <div class=" absolute bottom-0 left-0 z-0 w-full h-0 transition-all duration-200 group-hover:h-1 bg-dark-secondary"></div>
            </div> 
            <SocialsLinks />
        </div>
    </section>
</template>
 
<script setup>
import SocialsLinks from '../ui/SocialsLinks.vue';
</script>