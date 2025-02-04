<script>
export default {
    data() {
        return {
            destination: "",
        };
    },
    methods: {
        handleSubmit() {
            alert("Searching for destinations!");
        },
    },
};
</script>

<template>
    <!-- Popular Places Section -->
    <section class="destinations p-140">
        <div class="container">
            <h2 class="text-center">Popular Places</h2>
            <p class="text-center">
                Suffered alteration in some form, by injected humour or good day
                randomised booth anim 8-bit hella wolf moon beard words.
            </p>
            <div class="row">
                <!-- Destination Cards -->
                <div class="col-md-4">
                    <div class="destination-card">
                        <img src="../assets/homeImages/1.png" alt="Saintmartine Iceland" />
                        <div class="price-tag">$500</div>
                        <div class="info">
                            <h5>Saintmartine Iceland</h5>
                            <p>United States of America</p>
                            <div class="reviews d-flex justify-content-between">
                                <span>
                                    <i class="bi bi-star-fill start-color"></i>
                                    <i class="bi bi-star-fill start-color"></i>
                                    <i class="bi bi-star-fill start-color"></i>
                                    <i class="bi bi-star-fill start-color"></i>
                                    <i class="bi bi-star-fill start-color"></i>
                                    (20 Reviews) </span>
                                <span><i class="bi bi-stopwatch me-1"></i> 5 Days</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="destination-card">
                        <img src="../assets/homeImages/2.png" alt="Saintmartine Iceland" />
                        <div class="price-tag">$500</div>
                        <div class="info">
                            <h5>Saintmartine Iceland</h5>
                            <p>United States of America</p>
                            <div class="reviews d-flex justify-content-between">
                                <span>
                                    <i class="bi bi-star-fill start-color"></i>
                                    <i class="bi bi-star-fill start-color"></i>
                                    <i class="bi bi-star-fill start-color"></i>
                                    <i class="bi bi-star-fill start-color"></i>
                                    <i class="bi bi-star-fill start-color"></i>
                                    (20 Reviews) </span>
                                <span><i class="bi bi-stopwatch me-1"></i> 5 Days</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="destination-card">
                        <img src="../assets/homeImages/3.png" alt="Saintmartine Iceland" />
                        <div class="price-tag">$500</div>
                        <div class="info">
                            <h5>Saintmartine Iceland</h5>
                            <p>United States of America</p>
                            <div class="reviews d-flex justify-content-between">
                                <span>
                                    <i class="bi bi-star-fill start-color"></i>
                                    <i class="bi bi-star-fill start-color"></i>
                                    <i class="bi bi-star-fill start-color"></i>
                                    <i class="bi bi-star-fill start-color"></i>
                                    <i class="bi bi-star-fill start-color"></i>
                                    (20 Reviews) </span>
                                <span><i class="bi bi-stopwatch me-1"></i> 5 Days</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="destination-card">
                        <img src="../assets/homeImages/4.png" alt="Saintmartine Iceland" />
                        <div class="price-tag">$500</div>
                        <div class="info">
                            <h5>Saintmartine Iceland</h5>
                            <p>United States of America</p>
                            <div class="reviews d-flex justify-content-between">
                                <span>
                                    <i class="bi bi-star-fill start-color"></i>
                                    <i class="bi bi-star-fill start-color"></i>
                                    <i class="bi bi-star-fill start-color"></i>
                                    <i class="bi bi-star-fill start-color"></i>
                                    <i class="bi bi-star-fill start-color"></i>
                                    (20 Reviews) </span>
                                <span><i class="bi bi-stopwatch me-1"></i> 5 Days</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="destination-card">
                        <img src="../assets/homeImages/5.png" alt="Saintmartine Iceland" />
                        <div class="price-tag">$500</div>
                        <div class="info">
                            <h5>Saintmartine Iceland</h5>
                            <p>United States of America</p>
                            <div class="reviews d-flex justify-content-between">
                                <span>
                                    <i class="bi bi-star-fill start-color"></i>
                                    <i class="bi bi-star-fill start-color"></i>
                                    <i class="bi bi-star-fill start-color"></i>
                                    <i class="bi bi-star-fill start-color"></i>
                                    <i class="bi bi-star-fill start-color"></i>
                                    (20 Reviews) </span>
                                <span><i class="bi bi-stopwatch me-1"></i> 5 Days</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="destination-card">
                        <img src="../assets/homeImages/6.png" alt="Saintmartine Iceland" />
                        <div class="price-tag">$500</div>
                        <div class="info">
                            <h5>Saintmartine Iceland</h5>
                            <p>United States of America</p>
                            <div class="reviews d-flex justify-content-between">
                                <span>
                                    <i class="bi bi-star-fill start-color"></i>
                                    <i class="bi bi-star-fill start-color"></i>
                                    <i class="bi bi-star-fill start-color"></i>
                                    <i class="bi bi-star-fill start-color"></i>
                                    <i class="bi bi-star-fill start-color"></i>
                                    (20 Reviews) </span>
                                <span><i class="bi bi-stopwatch me-1"></i> 5 Days</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <!-- More Places Button -->
            <div class="text-center mt-4">
                <button class="btn hov-green m-place">More Places</button>
            </div>
        </div>
    </section>



</template>

<style scoped>
/* Destinations Section */
.destinations {
    background: #f8f9fa;
}

.destinations h2 {
    font-size: 2.5rem;
    margin-bottom: 10px;
}

.destinations p {
    font-size: 1rem;
    color: #666;
    max-width: 600px;
    margin: 0 auto 40px;
}

/* Destination Card */
.destination-card {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    margin-bottom: 30px;
    transition: transform 0.3s ease-in-out;
    background: white;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.destination-card:hover .destination-card h2 {
    font-size: 2.5rem;
    margin-bottom: 10px;
}

.destination-card p {
    font-size: 1rem;
    color: #666;
    max-width: 600px;
    margin: 0 auto 40px;
}

.destination-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
}

.destination-card .price-tag {
    position: absolute;
    top: 10px;
    left: 10px;
    background: #17a2b8;
    color: white;
    padding: 5px 10px;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: bold;
}

.destination-card:hover .price-tag {
    background: #ff4a52;
    transition: transform 0.3s ease-in-out;
}

.destination-card:hover .info h5 {
    color: #ff4a52;
    transition: transform 0.3s ease-in-out;
}

.destination-card .info {
    padding: 15px;
}

.destination-card h3 {
    font-size: 22px;
    font-weight: 400;
}

.destination-card p {
    color: #777;
    margin: 5px 0;
}

.destination-card .reviews {
    font-size: 14px;
    color: #555;
}
</style>