<template>
    <section>
        <div class="main-wrapper max-w-5xl m-auto md:mb-40 py-20 px-6 md:px-10 xl:px-0">
            <div class="main-wrapper">
                <h1 class="text-2xl md:text-3xl lg:text-5xl font-bold text-dark-secondary"> 
                  <slot name="section"></slot>
                </h1> 
                <slot name="content"></slot>
            </div>
        </div>
    </section>
</template>
 
 