<template>
    <div class="links">
        <button @click="$emit('active', text)"
                type="button"
                :class="[active === text ? ActiveColorClass : inActiveColorClass]"
                class="link 
                       block
                       w-max 
                       md:w-full 
                       p-3 
                       text-start  
                       text-xs
                       md:text-sm 
                       font-semibold
                       border-b-2
                       md:border-l-2  
                       md:border-b-0
                       transition-colors 
                       duration-300  
                       hover:border-b-dark-secondary 
                       md:hover:border-l-dark-secondary 
                       hover:bg-dark-secondary/10 
                       hover:text-dark-secondary">
            <slot/>
            {{ text }}
        </button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

 
defineProps({
    text: String,
    active: String
})

const inActiveColorClass = ref('border-b-dark-default/40 md:border-l-dark-default/40 text-default dark:text-dark-primary');
const ActiveColorClass = ref('border-b-dark-secondary md:border-l-dark-secondary bg-dark-secondary/10 text-dark-secondary');
</script>