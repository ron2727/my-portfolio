<template>
    <SectionLayout id="projects">
        <template #section>Projects</template>
        <template #content>
            <div class="content-wrapper mt-10">
                <div class=" space-y-3 md:space-y-7 text-default">
                    <img src="../../assets/image/projects/web_portal.png" alt="portal" class=" w-full object-contain">
                    <div class="wrapper block sm:flex items-center justify-between">
                        <h6 class=" text-lg md:text-2xl font-bold dark:text-dark-primary">Church Web Portal</h6>
                        <div class="button-links space-x-3 mt-3 sm:mt-0">
                            <a href="http://church.42web.io/" target="_blank" class=" inline-block px-4 border border-dark-secondary text-dark-secondary text-xs lg:text-sm text-center font-medium py-2 lg:py-3 transition-colors duration-200 hover:text-white hover:border-dark-secondary hover:bg-dark-secondary dark:text-dark-secondary dark:border-dark-secondary">
                                Demo</a>
                            <a href="https://github.com/ron2727/church-web-portal" target="_blank" class=" inline-block px-4 border border-dark-secondary text-dark-secondary text-xs lg:text-sm text-center font-medium py-2 lg:py-3 transition-colors duration-200 hover:text-white hover:border-dark-secondary hover:bg-dark-secondary dark:text-dark-secondary dark:border-dark-secondary">Code</a>
                        </div>
                    </div>
                    <p class=" text-sm md:text-base dark:text-dark-default">
                        Designed and developed mobile-responsive web application for a church. Features
                        include online booking for availing church services, event management for posting upcoming and
                        searching past events, and a forum for church members to interact and also monthly report for events and services.
                    </p>
                </div>
                <ListTags :tags="['HTML', 'CSS', 'Bootstrap','JavaScript', 'JQuery', 'AJAX', 'PHP', 'MYSQL']" />
            </div>
        </template>
    </SectionLayout>
</template>

<script setup>
import SectionLayout from '../layouts/SectionLayout.vue';
import ListTags from '../ui/ListTags.vue';
</script>
 