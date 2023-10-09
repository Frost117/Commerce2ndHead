<template>
    <div>
        <img v-bind:src="'https://commerceheadless.euwest01.umbraco.io/' + Url" loading="lazy">
    </div>
</template>

<script setup lang="ts">


const props = defineProps<{
    Url: string
}>()

</script>

<style scoped>

</style>