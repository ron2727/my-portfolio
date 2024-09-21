<template>
    <div class="wrapper-button flex"  
         :class="btnAlign ? alignments[btnAlign] : ''">
       <button type="submit" 
               class="flex justify-center w-20 py-1.5 md:py-2 text-xs md:text-sm bg-dark-secondary text-dark-primary"
               :disabled="processing">
         <slot v-if="!processing"/>
         <SpinnerIcon v-else class="size-5"/>
       </button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import SpinnerIcon from '../Icon/SpinnerIcon.vue';
defineProps({
    btnAlign: {
        type: String, 
        validator(value) { 
           return ['left', 'center', 'right'].includes(value)
        },
        default: 'right', 
    },
    processing: Boolean
})

const alignments = ref({
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
})
</script>
 