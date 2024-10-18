<template>            
        <NuxtLayout>
            <main class="flex container mx-auto pt-9">
                <NuxtLoadingIndicator/>
                <NuxtPage/>
            </main>
        </NuxtLayout>
</template>

<script setup lang="ts">

const customerToken = useCookie('customerToken');

if (!customerToken.value) {
  customerToken.value = "cust_" + useGuid();
}

</script>