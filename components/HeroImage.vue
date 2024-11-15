<template>
    <div class="bg-cover bg-center">
        <NuxtImg 
        class="rounded-md"
        :src="'https://commerceheadless.euwest01.umbraco.io/' + url"
        loading="lazy"
        :width="width"
        />
    </div>
</template>

<script setup lang="ts">

import { type Image, type Crop } from '@/lib/umbraco/types';

const props = defineProps<{
    url: Image["url"]
    width: Image["width"]
}>()


</script>

<style scoped>

</style>