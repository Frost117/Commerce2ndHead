<template lang="">
    <div class="menu-container">
        <div id="width-wrapper">
            <!-- Left -->
            <div id="left-menu">
                <div class="brand-container">
                    <p class="logo-text_main">BlackOps Store 🥷</p>
                    <p class="logo-text_slogan">Just restart it!</p>
                    <!-- <img class="logo" src="../assets/blackops-store.png" /> -->
                </div>
                <div class="nav-container">
                    <nav>
                        <ul>
                            <li class="nav-item"><NuxtLink to="/">Home</NuxtLink></li>
                            <li class="nav-item"><NuxtLink to="/products">Products</NuxtLink></li>
                            <li class="nav-item"><NuxtLink to="/contact-us">Contact us</NuxtLink></li>
                            <li class="nav-item"><NuxtLink to="/terms-and-conditions">Terms &amp; conditions</NuxtLink></li>
                            <li class="nav-item"><NuxtLink to="/about-us">About us</NuxtLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <!-- Right -->
            <div id="right-menu">
                <div class="search-container">
                    <p>🔎</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="css">
    a {
        color: #0c2154;
        text-decoration: none;
        font-size: 22px;
        font-weight: 500;
    }

    ul {
        list-style: none;
        margin: 0
    }

    #width-wrapper {
        width: 75%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }

    #left-menu {
        display: flex;
        align-items: center;
    }

    .menu-container {
        background-color:white;
        color: #0c2154;
        box-shadow: 1px 1px 1px black;
        padding: 10px 0;
    }

    .brand-container {
        max-width: 100%;
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
    }

    .nav-item {
        display: inline-block;
        margin-right: 12px;
    }
    
    .logo {
        max-width: 100%;
        height: 145px;
    }

    .logo-text_main {
        margin-bottom: 0;
        margin-top: 0;
        font-size: 20px;
    }

    .logo-text_slogan {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 14px;
        font-style: italic;
    }
    
</style>