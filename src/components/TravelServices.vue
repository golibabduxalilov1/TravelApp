<script setup></script>

<template>
    <!-- Travel Services Section -->
    <section class="travel-services p-140">
        <div class="container">
            <div class="row text-center">
                <div class="col-md-4">
                    <div class="service-box">
                        <img src="../assets/icons/1.svg" alt="Journey Icon" />
                        <h3>Comfortable Journey</h3>
                        <p>
                            A wonderful serenity has taken to the possession of my entire
                            soul.
                        </p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="service-box">
                        <img src="../assets/icons/2.svg" alt="Hotel Icon" />
                        <h3>Luxuries Hotel</h3>
                        <p>
                            A wonderful serenity has taken to the possession of my entire
                            soul.
                        </p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="service-box">
                        <img src="../assets/icons/3.svg" alt="Travel Guide Icon" />
                        <h3>Travel Guide</h3>
                        <p>
                            A wonderful serenity has taken to the possession of my entire
                            soul.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<style scoped>
/* Travel Services Section */
.travel-services {
    background: #f8f9fa;
}

.service-box {
    text-align: center;
    padding: 20px;
}

.service-box img {
    width: 60px;
    margin-bottom: 15px;
    transition: transform 0.3s ease-in-out;
}

.service-box h3 {
    font-size: 22px;
    font-weight: 400;
    color: #040e27;
    margin-bottom: 10px;
    margin-top: 41px;
}

.service-box p {
    color: #555;
    font-size: 1rem;
    max-width: 300px;
    margin: 0 auto;
}

/* Hover Effect */
.service-box:hover img {
    transform: scale(1.1);
}
</style>