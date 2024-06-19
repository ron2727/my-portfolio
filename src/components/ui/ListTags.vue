<template>
    <div id="tags"> 
        <span v-for="tag in tags" class=" inline-block mt-2 mr-2 mb-1 px-3 py-1 font-bold bg-dark-secondary/20 text-dark-secondary text-[0.7rem]">
           {{tag}}
        </span>
    </div>
</template>

<script setup>
defineProps(['tags'])
</script> 
 