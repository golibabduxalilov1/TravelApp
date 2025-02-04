<script setup>
import MiniSearch from '@/components/MiniSearch.vue';
import NewsSubscribe from '@/components/NewsSubscribe.vue';
import PopDestination from '@/components/PopDestination.vue';
import PopPlaces from '@/components/PopPlaces.vue';
import RecentTrips from '@/components/RecentTrips.vue';
import Testimonial from '@/components/Testimonial.vue';
import TravelServices from '@/components/TravelServices.vue';
import VideoModal from '@/components/VideoModal.vue';
</script>

<template>

    <!-- Hero Section -->
    <header class="hero">
        <div class="hero-content text-center">
            <h1 class="noth-font big-fsize">Indonesia</h1>
            <p>Pixel perfect design with awesome contents</p>
            <a href="#" class="btn hov-red">Explore Now</a>
        </div>
    </header>
    <MiniSearch />
    <PopDestination />
    <NewsSubscribe />
    <PopPlaces />
    <VideoModal />
    <TravelServices />
    <Testimonial />
    <RecentTrips />

</template>

<style>
.hero {
    background: url("../assets/homeImages/banner2.png") no-repeat center center/cover;
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    position: relative;
}

.hero::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
}

.hero-content {
    position: relative;
    z-index: 1;
}

.hero h1 {
    font-size: 4rem;
    font-weight: bold;
}

.hero p {
    font-size: 1.2rem;
}

.hero-content a {
    color: #fff;
    background: #1ec6b6;
    padding: 18px 41px;
    transition: 0.3s;
}
</style>