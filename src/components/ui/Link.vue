<template>
    <div class="link-wrapper w-full flex space-x-2">
        <span class=" text-sm md:text-lg font-semibold text-default dark:text-dark-default">{{ label }}:</span>
        <div class="wrapper group relative">
            <a :href="link"
                target="_blank"
                class="link relative z-10 text-default text-sm md:text-lg dark:text-dark-default">{{ value }}</a>
            <div
                class=" absolute bottom-0 left-0 z-0 w-full h-0 transition-all duration-200 group-hover:h-1 bg-dark-secondary">
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    label: String,
    value: String,
    link: String
})
</script>