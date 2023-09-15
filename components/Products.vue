<template>
    <div>
        {{ id }}
        {{ name }}
    </div>
</template>

<script setup lang="ts">

defineProps({
    id:{
        type: String,
    },
    name:{
        type: String,
    }
})

</script>

<style scoped>

</style>