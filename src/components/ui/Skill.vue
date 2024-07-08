<template>
    <div class="col group relative flex flex-col items-center justify-center p-4">
        <div class="wrapper group relative">
            <img :src="imgSrc()"  alt="logo" class="w-20 lg:w-24 relative z-0 grayscale">
            <div class=" overflow-hidden absolute top-0 left-0 z-10 h-0 transition-all duration-500 group-hover:h-full">
                <img :src="imgSrc()" alt="logo">
            </div>
        </div>
        <h6 class=" w-min mt-3 lg:mt-2 font-medium text-default text-sm sm:text-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:text-dark-primary"><slot></slot></h6>
    </div>
</template>


<script setup> 
const props = defineProps(['image']) 

const imgSrc = () => `/images/skills/${props.image}`;
</script>