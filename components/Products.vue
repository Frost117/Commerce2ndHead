<template>
    <div>
        {{ name }}
    </div>
</template>

<script setup lang="ts">

defineProps({
    name:{
        type: String,
        required: true
    }
})

</script>

<style scoped>

</style>