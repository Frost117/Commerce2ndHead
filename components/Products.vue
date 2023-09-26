<template>
    <div class="">
        {{ Name }}
    </div>
</template>

<script setup lang="ts">

defineProps({
    Name:{
        type: String,
        required: true
    },
    Properties:{
        type: Object,
    }
})

</script>

<style scoped>

</style>