<template> 
    <SectionLayout id="about">
        <template #section>About me</template>
        <template #content>
            <div class="grid grid-cols-1 md:grid-cols-2">
                <div class="column-1">
                    <div id="description" class="mt-4 space-y-2 text-sm md:text-lg font-medium text-default dark:text-dark-default">
                        <p>
                            I'm a recent graduate from the University of Rizal System, Binangonan Campus. With a
                            passion for both front-end and back-end development, I thrive on building
                            dynamic, functional and user-friendly websites. My journey in web development is driven by a love for
                            continuous learning and improvement.
                        </p>
                        <p>
                            I enjoy tackling new challenges and am always eager to expand my skill set. Whether it's
                            mastering a new technology or refining my existing abilities, I'm committed to personal and
                            professional growth. I am particularly enthusiastic about collaborating with experienced
                            professionals, as I believe that learning from others is an invaluable part of my
                            development process.
                        </p>
                    </div>
                </div>
                <div class=" flex justify-center pt-10">
                   <Photos/>
                </div>
            </div>
        </template>
    </SectionLayout>
</template>

<script setup>
import Photos from '../ui/Photos.vue';
import SectionLayout from '../layouts/SectionLayout.vue';
</script> 
 