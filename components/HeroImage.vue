<template>
    <div class="bg-cover bg-center">
        <img 
        class="rounded-md"
        :src="'https://commerceheadless.euwest01.umbraco.io/' + url" 
        loading="lazy"
        />
    </div>
</template>

<script setup lang="ts">

import { type Image } from '@/lib/umbraco/types';

const props = defineProps<{
    url: Image["Url"],
}>()


</script>

<style scoped>

</style>