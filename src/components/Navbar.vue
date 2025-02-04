<template>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div class="container">
            <router-link class="navbar-brand" to="#"><img src="../assets/allPages/logo.png.webp" alt="Travelo"
                    class="logo" />
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><router-link class="nav-link" to="/">Home</router-link></li>
                    <li class="nav-item"><router-link class="nav-link" to="/about">About</router-link></li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Destination</router-link>
                    </li>
                    <li class="nav-item"><router-link class="nav-link" to="/blog">Blog</router-link></li>
                    <li class="nav-item"><router-link class="nav-link" to="/contact">Contact</router-link></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
/* Navbar */
.navbar {
    padding: 30px 20px;
}

.nav-link {
    color: #040e27;
}
</style>