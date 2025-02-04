<script setup></script>
<template>
    <!-- Popular Destinations Section -->
    <section class="popular-destinations p-140">
        <div class="container">
            <h2 class="text-center">Popular Destination</h2>
            <p class="text-center">
                Suffered alteration in some form, by injected humour or good day
                randomized booth anim 8-bit hella wolf moon beard words.
            </p>
            <div class="row">
                <!-- Destination Cards -->
                <div class="col-md-4">
                    <div class="destination-card overlay">
                        <img src="../assets/homeImages/1.png" alt="Italy" />
                        <div class="overlay">
                            <h5>Italy</h5>
                            <span class="badge">07 Places</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="destination-card">
                        <img src="../assets/homeImages/2.png" alt="Brazil" />
                        <div class="overlay">
                            <h5>Brazil</h5>
                            <span class="badge">03 Places</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="destination-card">
                        <img src="../assets/homeImages/3.png" alt="America" />
                        <div class="overlay">
                            <h5>America</h5>
                            <span class="badge">10 Places</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="destination-card">
                        <img src="../assets/homeImages/4.png" alt="Nepal" />
                        <div class="overlay">
                            <h5>Nepal</h5>
                            <span class="badge">02 Places</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="destination-card">
                        <img src="../assets/homeImages/5.png" alt="Maldives" />
                        <div class="overlay">
                            <h5>Maldives</h5>
                            <span class="badge">02 Places</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="destination-card">
                        <img src="../assets/homeImages/6.png" alt="Indonesia" />
                        <div class="overlay">
                            <h5>Indonesia</h5>
                            <span class="badge">05 Places</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap");

/* Popular Destinations */
.popular-destinations {
    font-family: "Rubik", sans-serif;
    font-weight: normal;
}

.popular-destinations h2 {
    font-family: "Rubik", sans-serif;

    font-size: 2.5rem;
    margin-bottom: 10px;
}

.popular-destinations p {
    font-size: 1rem;
    color: #666;
    max-width: 600px;
    margin: 0 auto 40px;
}

.destination-card {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    margin-bottom: 30px;
    transition: transform 0.3s ease-in-out;
}

.destination-card img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 10px;
}

.destination-card .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    padding: 10px;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: background 0.3s;
}

.destination-card h5 {
    margin: 0;
    font-size: 1.2rem;
}

.destination-card .badge {
    background-color: #17a2b8;
    padding: 5px 10px;
    border-radius: 20px;
    font-size: 0.9rem;
}

.destination-card:hover {
    transform: scale(1.05);
}
</style>