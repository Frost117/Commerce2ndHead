<template>            
        <NuxtLayout>
            <main class="flex container mx-auto pt-9">
                <NuxtPage/>
            </main>
        </NuxtLayout>
</template>

<script setup lang="ts">

const customerToken = useCookie('customerToken');

if (!customerToken.value) {
  const newGuid = useGuid();
customerToken.value = "cust_" + newGuid();
}



</script>