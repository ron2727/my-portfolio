<template>
    <section id="intro">
        <div class="main-wrapper max-w-5xl lg:h-screen m-auto flex flex-col justify-center md:mb-40 py-20 px-6 md:px-10 xl:px-0">
            <div class="main-wrapper space-y-4 lg:space-y-7 text-default dark:text-dark-primary">
                <h1 class=" font-montserratAlternates mt-32 lg:mt-0 text-lg font-medium text-dark-secondary">Hi, my name is</h1>
                <div class=" wrapper text-4xl sm:text-5xl md:text-6xl lg:text-7xl ">
                    <h1 class="font-bold text-default dark:text-dark-primary">John Ron Buere. </h1>
                    <h1 class="font-bold text-default/80 dark:text-dark-primary/80">Software Developer.</h1>
                </div>
                <h1 class=" max-w-2xl leading-normal text-sm sm:text-lg">I'm a recent graduate with a Bachelor of Science in
                    Information System. With a passion for both front-end and back-end development, I thrive on building dynamic, functional and user-friendly web</h1>
                <div class="flex items-center py-10">
                    <a href="https://cdn.fbsbx.com/v/t59.2708-21/449217724_417508417954357_2028749097656275383_n.pdf/JohnRon-Buere_Resume.pdf?_nc_cat=109&ccb=1-7&_nc_sid=2b0e22&_nc_eui2=AeERDHcnmPNaLmOaX1zIPZehW1OpeQTMYO9bU6l5BMxg72Ry_inw5EmWs_FUHAjNuxjZgUHP2oAdqmA_aLI24w-D&_nc_ohc=1cAaabzreJYQ7kNvgH83T_7&_nc_ht=cdn.fbsbx.com&oh=03_Q7cD1QF8ApK0S6m_MdtYCbjoRCs8wIJUo9wTgPR2DlJC9T-XbQ&oe=66800DA9&dl=1" class=" inline-block px-4 mr-10 border border-dark-secondary text-dark-secondary text-xs lg:text-sm text-center font-medium py-2 lg:py-3 transition-colors duration-200 hover:text-white hover:border-dark-secondary hover:bg-dark-secondary dark:text-dark-secondary dark:border-dark-secondary">
                        Download Resume
                    </a>
                     <SocialLinks />
                </div>
            </div>
        </div>
    </section>  
</template>   
 
<script setup>
import SocialLinks from '../ui/SocialLinks.vue';
</script>