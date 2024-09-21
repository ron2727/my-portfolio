<template>
    <div class="wrapper-input space-y-1">
        <label :for="name" class="text-default text-xs md:text-base dark:text-gray-200">{{  label  }} <span class=" text-red-600">*</span></label>
        <input :id="name"
               :name="name"
               :value="modelValue"
               @input="$emit('update:modelValue', $event.target.value)"
               type="text" 
               :class="!error ? 'border-gray-300 dark:border-dark-default focus:ring-dark-secondary' : 'border-red-600 focus:ring-red-600'"
               class="w-full px-2 py-1 border outline-none text-xs md:text-base text-default dark:text-gray-200 dark:bg-dark-bodySecondary focus:ring-1  md:focus:ring-2">
        <small v-if="error" class=" text-red-600 text-xs md:text-base">{{ error }}</small>
    </div>
</template>

<script setup>
defineProps({
    label: String,
    name: String,
    error: String,
    modelValue: String,
})
defineEmits(['update:modelValue'])
</script>
 