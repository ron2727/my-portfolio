<template>
    <div class="col group relative flex flex-col items-center justify-center p-4">
        <div class="wrapper group relative">
            <img ref="image1" alt="logo" class="w-20 lg:w-24 relative z-0 grayscale">
            <div class=" overflow-hidden absolute top-0 left-0 z-10 h-0 transition-all duration-500 group-hover:h-full">
                <img ref="image2" alt="logo">
            </div>
        </div>
        <h6 class=" w-min mt-3 lg:mt-2 font-medium text-default text-sm sm:text-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:text-dark-primary"><slot></slot></h6>
    </div>
</template>


<script setup>
import { onMounted, ref } from 'vue';
const props = defineProps(['image'])

const image1 = ref(null)
const image2 = ref(null)

onMounted(() => {
    const imagePath = `${window.location.href}src/assets/image/skills/${props.image}`;
    image1.value.src = imagePath 
    image2.value.src = imagePath 
})
</script>