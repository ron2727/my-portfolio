<template>
    <SectionLayout id="projects">
        <template #section>Projects</template>
        <template #content> 
            <Project 
              name="Church Web Portal"
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
              name="Voting System"
              image="voting_system.png"  
              demo-link="#"
              github-link="https://github.com/ron2727/voting-system"
              :tags="['Vue.js', 'Laravel', 'Tailwind', 'RESTful API', 'MySQL']">
                <template #description>
                    Designed and developed a single-page mobile reponsive voting system. This application is designed to streamline the election process by providing a user-friendly interface for voting, vote tallying, and report generation.
                </template>
            </Project>
            <Project 
              name="School Attendance System"
              image="school_attendance.png"  
              demo-link="#"
              github-link="https://github.com/ron2727/school_attendance"
              :tags="['Inertia', 'Vue.js', 'Laravel', 'Tailwind', 'MySQL']">
                <template #description>
                    Designed and developed a mobile-responsive, web-based school attendance management system using the VILT Stack. Teachers can efficiently mark student attendance for their assigned classes on a daily basis. The system also provides the functionality to export daily attendance records to PDF or Excel files, making reporting and record-keeping simple and convenient
                </template>
            </Project>
        </template>
    </SectionLayout>
</template>

<script setup>
import SectionLayout from '../layouts/SectionLayout.vue';
import Project from '../ui/Project.vue';
</script>
 