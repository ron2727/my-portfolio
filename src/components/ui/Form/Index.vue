<template>
    <form @submit="$emit('submit-form', $event)"
          :name="name"
          :method="method"
          netlify
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
 