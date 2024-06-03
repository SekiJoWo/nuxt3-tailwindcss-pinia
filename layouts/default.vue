<template>
    <div>
        <p>Some default layout content shared across all pages</p>
        <slot />
    </div>
</template>

<!-- other -->
<!-- 
<script setup lang="ts">
    definePageMeta({
        layout: 'custom'
    })
</script> 
-->

<!-- pages -->

<!-- 
<script setup lang="ts">
    const layout = 'custom';
</script>

<template>
    <NuxtLayout :name="layout">
        <NuxtPage />
    </NuxtLayout>
</template> 
-->
