<template>
    <nav>
        <div @click="isMobileNavActive = false" id="mobile-nav-backdrop-blur" :class="isMobileNavActive ? 'translate-x-0' : '-translate-x-full'" class=" md:hidden fixed top-0 left-0 z-[999] md:translate-x-0 transition-transform duration-400 h-full w-full backdrop-blur-sm"></div>
        <div id="mobile-nav" class=" fixed top-0 left-0 z-50 w-full flex md:hidden justify-between items-center px-4 py-3 bg-white border-b border-b-gray-200 dark:border-0 dark:bg-dark-body">
            <a id="logo" href="/" class="font-bold text-logo ">
                 {{ logo }}
            </a>
            <button class=" text-default dark:text-dark-primary" @click="isMobileNavActive = true">
                <i class='bx bx-menu-alt-right bx-md'></i>
            </button>
        </div>
        <div id="nav" :class="isMobileNavActive ? 'translate-x-0' : 'translate-x-full'" class="fixed top-0 right-0 md:left-0 z-[1000] flex justify-center md:justify-between items-center w-64 md:w-full h-screen md:h-min md:px-4 bg-none md:border-b md:border-b-gray-200 border-l md:border-l-0 border-l-gray-200 bg-white md:translate-x-0 transition-transform duration-400 dark:border-0 dark:bg-dark-body">
            <button @click="isMobileNavActive = false" id="btn-close-nav" class=" md:hidden absolute top-0 right-0 mt-3 mr-4 text-default dark:text-dark-primary">
                <i class='bx bx-x bx-lg'></i>
            </button>
            <a id="logo" href="/" class="absolute font-bold font-montserratAlternates md:static top-0 left-0 w-full md:w-max text-center md:text-left mt-20 md:mt-0 text-logo">
                {{ logo }}
            </a>
            <ul class="flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0 font-medium text-sm text-default">
                <li class=" relative group" v-for="(nav, link) in navLinks">
                    <a @click="isMobileNavActive = false" :href="`#${link}`" class="nav-link inline-block text-default text-sm py-3 px-5 transition-all duration-200 dark:text-dark-primary">
                        {{ nav }}
                    </a>
                    <div class="absolute bottom-0 left-0 w-full h-0 transition-all duration-200 group-hover:h-0.5 bg-dark-secondary"></div>
                </li>
                <li class="pb-4 md:pb-0 md:ml-2 absolute md:static bottom-0 left-0 w-full md:w-min flex md:block justify-center">
                    <DarkModeToggle />
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup>
import DarkModeToggle from '../ui/DarkModeToggle.vue'; 
import { onMounted, ref, watch } from 'vue'
const logo = '<JohnRon/>'
const isMobileNavActive = ref(false)
const navLinks = ref({
    about: 'About Me',
    skills: 'Skills',
    experience: 'Experience',
    projects: 'Projects',
    contact: 'Contact Me'
});

watch(() => isMobileNavActive.value, (newValue, oldValue) => {
    if (newValue) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'auto'
    }
})
onMounted(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            setTimeout(() => {
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }, 100);
        });
    });

    window.addEventListener('scroll', () => {

        const sections = document.querySelectorAll('section');

        sections.forEach(section => {

            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollY >= sectionTop - sectionHeight / 3) {

                let id = section.getAttribute('id');

                removeActiveNav();

                if ((innerHeight + scrollY) === document.body.clientHeight) {
                    id = 'contact';
                }

                const navLink = document.querySelector(`[href="#${id}"]`);
                navLink.classList.add('active');
            }

        });
    });

});

const removeActiveNav = () => {
    const navLinks = document.querySelectorAll('.nav-link')
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
}


</script>

<style scoped>
.active~div {
    height: 0.125rem;
}
</style>