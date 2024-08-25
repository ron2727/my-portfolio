<template>
    <div class="content-wrapper mt-20">
        <div class=" space-y-3 md:space-y-7 text-default">
            <img :src="imgSrc()" alt="portal" class=" w-full object-contain">
            <div class="wrapper block sm:flex items-center justify-between">
                <h6 class=" text-lg md:text-2xl font-bold dark:text-dark-primary">Church Web Portal</h6>
                <div class="button-links space-x-3 mt-3 sm:mt-0">
                    <a :href="demoLink" target="_blank"
                        class=" inline-block px-4 border border-dark-secondary text-dark-secondary text-xs lg:text-sm text-center font-medium py-2 lg:py-3 transition-colors duration-200 hover:text-white hover:border-dark-secondary hover:bg-dark-secondary dark:text-dark-secondary dark:border-dark-secondary">
                        Demo</a>
                    <a :href="githubLink" target="_blank"
                        class=" inline-block px-4 border border-dark-secondary text-dark-secondary text-xs lg:text-sm text-center font-medium py-2 lg:py-3 transition-colors duration-200 hover:text-white hover:border-dark-secondary hover:bg-dark-secondary dark:text-dark-secondary dark:border-dark-secondary">Code</a>
                </div>
            </div>
            <p class=" text-sm md:text-base dark:text-dark-default">
                <slot name="description"></slot>
            </p>
        </div>
        <ListTags :tags="tags" />
    </div>
</template>

<script setup>
import ListTags from './ListTags.vue';

const props = defineProps(['image', 'demoLink', 'githubLink', 'tags']);

const imgSrc = () => `/images/projects/${props.image}`;
</script>
 