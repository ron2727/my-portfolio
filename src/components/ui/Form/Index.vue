<template>
    <form @submit.prevent="$emit('submit-form')"
          :name="name"
          :method="method"
          data-netlify="true"
          data-netlify-honeypot="bot-field" 
          class=" w-full space-y-1 md:space-y-4">    
          <slot/>
    </form>
</template>

<script setup>
defineProps({
    name: String,
    method: {
        type: String,
        default: 'POST'
    },
})
</script>
 