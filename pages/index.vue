<template>
    <main>
        <NuxtLayout>
            <Header />
            <main>
                <h1>Welcome to the BlackOps Commerce Store!</h1>
                <h3>Your supplier for Umbraco Swag and other goods!</h3>
                <p>{{ count }}</p>
                <button @click="increment()">Click me please</button>
            </main>
            <NuxtPage />
        </NuxtLayout>
    </main>
</template>

<style>
    body {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        
    }
    main {
        height: 100vh;
        background-image: linear-gradient(to right top, #a40cf5, #6e2dd2, #4031ab, #1d2b80, #0c2154);
    }

    main > h1, h3 {
        text-align: center;
        color: white;
        /* text-shadow: 2px 3px 0px #898999; */
        font-family: 'Roboto', sans-serif;
    }

</style>

<script setup lang="ts">
import { ref } from 'vue';

const count = ref(1)

function increment() {
    return count.value++
}

</script>