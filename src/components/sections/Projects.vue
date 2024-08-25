<template>
    <SectionLayout id="projects">
        <template #section>Projects</template>
        <template #content> 
            <Project 
              image="web_portal.png"  
              demo-link="https://church.42web.io/"
              github-link="https://github.com/ron2727/church-web-portal"
              :tags="['HTML', 'CSS', 'Bootstrap','JavaScript', 'JQuery', 'AJAX', 'PHP', 'MYSQL']">
                <template #description>
                        Designed and developed mobile-responsive web application for a church. Features
                        include online booking for availing church services, event management for posting upcoming and
                        searching past events, and a forum for church members to interact and also monthly report for events and services.
                </template>
            </Project>
            <Project 
              image="voting_system.png"  
              demo-link="https://church.42web.io/"
              github-link="https://github.com/ron2727/church-web-portal"
              :tags="['Vue.js', 'Laravel', 'Tailwind', 'RESTful API', 'MySQL']">
                <template #description>
                    Designed and developed a single-page mobile reponsive voting system using Laravel for the backend and Vue.js for the frontend. This application is designed to streamline the election process by providing a user-friendly interface for voting, vote tallying, and report generation.
                </template>
            </Project>
        </template>
    </SectionLayout>
</template>

<script setup>
import SectionLayout from '../layouts/SectionLayout.vue';
import Project from '../ui/Project.vue';
</script>
 