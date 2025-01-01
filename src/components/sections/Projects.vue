<template>
    <SectionLayout id="projects">
        <template #section>Projects</template>
        <template #content>
            <div class=" flex flex-col md:flex-row gap-x-4 mt-20">
                <div class="side-nav flex md:block w-full md:w-56 overflow-auto md:overflow-x-hidden">
                   <TabLink v-for="{tab, id} in projects()" 
                            :text="tab" 
                            :key="id" 
                            :active="activeTab"
                            @active="sectActiveTab"/> 
                </div>
                <div class="content md:flex-1">
                    <div v-for="project in projectCollection" :key="project.id">
                        <Project v-show="project.name === activeTab"
                                 :name="project.name" 
                                 :image="project.image" 
                                 :demo-link="project.demoLink"
                                 :github-link="project.githubLink"
                                 :tags="project.tags">
                                <template #description>
                                      {{ project.description }}
                                </template>
                        </Project>
                    </div>
                </div>
            </div> 
        </template>
    </SectionLayout>
</template>

<script setup>
import { ref } from 'vue';
import SectionLayout from '../layouts/SectionLayout.vue';
import Project from '../ui/Project.vue';
import TabLink from '../ui/TabLink.vue';

const activeTab = ref('Church Web Portal');

const projectCollection = ref([
    {
        id: 1,
        name: 'Church Web Portal',
        image: 'web_portal.png',
        demoLink: 'https://church.42web.io/',
        githubLink: 'https://github.com/ron2727/church-web-portal',
        tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'JQuery', 'AJAX', 'PHP', 'MYSQL'],
        description: 'Designed and developed mobile-responsive web application for a church. Features include online booking for availing church services, event management for posting upcoming and searching past events, and a forum for church members to interact and also monthly report for events and services.'
    },
    {
        id: 2,
        name: 'Voting System',
        image: 'voting_system.png',
        demoLink: '#',
        githubLink: 'https://github.com/ron2727/voting-system',
        tags: ['Vue.js', 'Laravel', 'Tailwind', 'RESTful API', 'MySQL'],
        description: 'Designed and developed a single-page mobile reponsive voting system. This application is designed to streamline the election process by providing a user-friendly interface for voting, vote tallying, and report generation.'
    },
    {
        id: 3,
        name: 'School Attendance System',
        image: 'school_attendance.png',
        demoLink: '#',
        githubLink: 'https://github.com/ron2727/school_attendance',
        tags: ['Inertia', 'Vue.js', 'Laravel', 'Tailwind', 'MySQL'],
        description: 'Designed and developed a mobile-responsive, web-based school attendance management system using the VILT Stack. Teachers can efficiently mark student attendance for their assigned classes on a daily basis. The system also provides the functionality to export daily attendance records to PDF or Excel files, making reporting and record-keeping simple and convenient'
    },
    {
        id: 4,
        name: 'Chat Web App',
        image: 'chat_app.png',
        demoLink: '#',
        githubLink: 'https://github.com/ron2727/chat_app',
        tags: ['Laravel', 'Vue.js', 'Pusher', 'Tailwind', 'RESTful API', 'MySQL'],
        description: 'This chat app allows users to talk to others who are currently online. To start a conversation, first create a new group chat. It will then be added to the list of available group chats, and anyone can join in.'
    },
])


const projects = () => {
    return projectCollection.value.map((project) => {
        return {
            id: project.id, 
            tab: project.name
        }
    })
}

const sectActiveTab = (tab) => {
    activeTab.value = tab;
}
</script>
 

<style>
.side-nav::-webkit-scrollbar {
  height: 0px;
} 
</style>