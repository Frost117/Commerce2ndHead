<template>
    <div>
        {{ Name }}
    </div>
</template>

<script setup lang="ts">

defineProps({
    Name:{
        type: String,
        required: true
    }
})

</script>

<style scoped>

</style>