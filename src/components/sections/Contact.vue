<template>
    <section id="contact">
        <Alert v-if="alertType == 'success'" @close-alert="alertType = null" :type="alertType" message="Message sent successfully!" :count-down="8000"/>
        <Alert v-if="alertType == 'error'" @close-alert="alertType = null" :type="alertType" message="Message not sent." :count-down="8000"/>
        <div class=" max-w-xl mx-auto pt-40 pb-60 space-y-5 flex flex-col items-center">
            <h1 class=" text-dark-secondary text-2xl md:text-5xl font-bold">Get in touch</h1>
            <p class=" px-4 text-sm text-center md:text-lg text-default dark:text-dark-default">I'm a recent graduate
                eager to connect and explore new opportunities.</p> 
            <div class="wrapper-form px-4 md:px-0 max-md:max-w-96 w-full">
                <Form @submit-form="handleSubmit" name="contact">   
                    <input ref="botField" type="hidden" name="bot-field">
                    <Input v-model="formData.name" label="Name" name="name" :error="formErrors.name" />
                    <Input v-model="formData.email" label="Email" name="email" :error="formErrors.email" />
                    <TextArea v-model="formData.message" label="Message" name="message" :error="formErrors.message" />
                    <Button btnAlign="right" :processing="isSubmitting">Submit</Button>
                </Form> 
            </div>
            <div class="wrapper-socials w-full pt-20 px-4 md:px-0">
                <div class=" w-full flex items-center space-x-5 md:space-x-10">
                    <div class=" flex-1 size-1 bg-defaultSecondary dark:bg-dark-primary"></div>
                    <h6 class=" text-2xl md:text-5xl font-semibold text-default dark:text-dark-primary">OR</h6>
                    <div class=" flex-1 size-1 bg-defaultSecondary dark:bg-dark-primary"></div>
                </div>
                <p class=" mb-10 mt-4 text-sm text-center md:text-lg text-default dark:text-dark-default">Contact me on my socials.</p>
                <Link label="Email" value="johnronbuere0627@gmail.com" link="mailto:johnronbuere0627@gmail.com" />
                <Link label="LinkedIn" value="John Ron Buere" link="https://www.linkedin.com/in/john-ron-buere-b27242316/" />
                <Link label="GitHub" value="ron2727" link="https://github.com/ron2727" />
            </div>
        </div>
    </section>
</template>
 
<script setup> 
import Form from '../ui/Form/Index.vue';
import Input from '../ui/Form/Input.vue';
import TextArea from '../ui/Form/TextArea.vue';
import Button from '../ui/Form/Button.vue';
import Link from '../ui/Link.vue';
import { ref } from 'vue';
import axios from 'axios';
import Alert from '../ui/Alert.vue';

const isSubmitting = ref(false);
const alertType = ref(null);
const formData = ref({
    name: '',
    email: '',
    message: '', 
});

const formErrors = ref({
    name: '',
    email: '',
    message: ''
});

const formErrRules = ref({
    name: ['letter', 'required'],
    email: ['email', 'required'],
    message: ['required', 'max:1500']
});

const formErrMessages = ref({
    required: (field) => `The ${field} is required`,
    letter: (field) => `The ${field} should contain letters only`,
    email: (field) => `The ${field} is invalid`,
    max: (field, len) => `The ${field} should be less than or equal to ${len} characters`,
});

const formErrorsValidator = ref({
    required: (value) => {
        const trimmed = value.trim();

        return trimmed === '' || trimmed == null ? true : false;
    },
    letter: (value) => !(/^[A-Za-z\s]+$/).test(value),
    email: (value) => !(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(value),
    max: (value, len) => value.trim().length > len,
});
 

const handleSubmit = async () => {  
    const WEB3FORMS_ACCESS_KEY = "83f0fe4f-fc48-4300-bad7-37d8359988c4";  
    formData.value.access_key = WEB3FORMS_ACCESS_KEY; 
    if (!isFormHasError()) { 
        isSubmitting.value = true;
        try { 
            await axios.post(
                "https://api.web3forms.com/submit",
                JSON.stringify(formData.value),
                {
                   headers: {
                       "Content-Type": "application/json",
                        Accept: "application/json",
                   }
                }
            );
            alertType.value = 'success';
            clearForm();
        } catch (error) {
            console.log(error);
            
            alertType.value = 'error';;
        } 
        isSubmitting.value = false;
    }

    delete formData.value.access_key;
}

const isFormHasError = () => {  
    clearError();
    for (const field in formErrRules.value) { 
        for (let i = 0; i < formErrRules.value[field].length; i++) { 
            let rule = formErrRules.value[field][i];
            const ruleSplit = rule.split(':');
            let invalid = null;
            if (ruleSplit.length === 1) {
                invalid = formErrorsValidator.value[rule](formData.value[field]); 
                if (invalid) {
                    formErrors.value[field] = formErrMessages.value[rule](field);
                }
            } else {
                invalid = formErrorsValidator.value[ruleSplit[0]](formData.value[field], ruleSplit[1]);
                if (invalid) {
                    formErrors.value[field] = formErrMessages.value[ruleSplit[0]](field, ruleSplit[1]);
                }
            }
        } 
    } 

    for (const field in formErrors.value) { 
      if (formErrors.value[field]) {
        return true;
      }
    }
    

    return false;
}

const clearError = () => { 
    for (const key in formErrors.value) { 
        formErrors.value[key] = '';
    }
} 

const clearForm = () => { 
    for (const key in formData.value) { 
        formData.value[key] = '';
    }
} 
  
</script>