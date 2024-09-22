<template>
    <div v-if="type === 'success' || type === 'error'" 
         :class="{
            'bg-green-600': type === 'success',
            'bg-red-600 ': type === 'error',
         }"
         class=" fixed bottom-0 right-0 z-50 flex mb-5 mr-5 p-5 text-white border">
      <ExclametionCircle v-if="type === 'error'" class=" size-6 mr-2"/>
      <CheckCirleIcon v-if="type === 'success'" class=" size-6 mr-2"/>
       {{ message }}  
      <div ref="timer" 
           id="timer"
           :class="{
            'bg-green-200': type === 'success',
            'bg-red-200 ': type === 'error',
           }" 
           class=" absolute bottom-0 left-0 h-1"></div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import CheckCirleIcon from './Icon/CheckCirleIcon.vue'; 
import ExclametionCircle from './Icon/ExclametionCircle.vue';

const props = defineProps({
    message: String,
    type: {
        type: String,
        default: 'success'
    },
    countDown: {
        type: Number,
        default: 5000
    }
})
const emits = defineEmits(['closeAlert'])
const timer = ref(null);

onMounted(() => { 
   timer.value.style.animationName = 'timer';
   timer.value.style.animationDuration = `${props.countDown}ms`;

   setTimeout(() => {
       emits('closeAlert');
   }, props.countDown)
})
</script>

<style> 

 @keyframes timer {
    from{
        width: 100%;
    }
    to{
        width: 0px;
    }
 }
</style>
 