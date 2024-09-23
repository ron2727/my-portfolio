<template>
    <div class="links">
        <button @click="$emit('active', text)"
                type="button"
                :class="[active === text ? ActiveColorClass : inActiveColorClass]"
                class="link 
                       block 
                       w-full 
                       p-3 
                       text-start  
                       text-sm 
                       font-semibold
                       border-l-2  
                       transition-colors 
                       duration-300  
                       hover:border-l-dark-secondary 
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

const inActiveColorClass = ref('border-l-dark-default/40 text-default dark:text-dark-primary');
const ActiveColorClass = ref('border-l-dark-secondary bg-dark-secondary/10 text-dark-secondary');
</script>