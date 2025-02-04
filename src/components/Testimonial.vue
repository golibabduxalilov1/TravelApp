<script>
import { onMounted, ref } from "vue";

export default {
    setup() {
        const carousel = ref(null);

        onMounted(() => {
            carousel.value = new bootstrap.Carousel(document.getElementById("testimonialCarousel"), {
                interval: 5000,
                ride: "carousel",
            });
        });

        return { carousel };
    },
}
</script>

<template>
    <!-- Testimonial Section -->
    <section class="testimonial-section p-140">
        <div class="container text-center">
            <div id="testimonialCarousel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <!-- Testimonial 1 -->
                    <div class="carousel-item active">
                        <div class="testimonial">
                            <div class="testimonial-img-container">
                                <img src="../assets/homeImages/author.png.webp" class="testimonial-img"
                                    alt="User Image" />
                                <span class="quote-icon">❝</span>
                            </div>
                            <p>
                                "Working in conjunction with humanitarian aid agencies, we
                                have supported programmes to help alleviate human suffering."
                            </p>
                            <h6>- Tom Mouse</h6>
                        </div>
                    </div>

                    <!-- Testimonial 2 -->
                    <div class="carousel-item">
                        <div class="testimonial">
                            <div class="testimonial-img-container">
                                <img src="../assets/homeImages/author.png.webp" class="testimonial-img"
                                    alt="User Image" />
                                <span class="quote-icon">❝</span>
                            </div>
                            <p>
                                "This travel agency provided us with an outstanding
                                experience. Everything was planned to perfection!"
                            </p>
                            <h6>- Sarah Johnson</h6>
                        </div>
                    </div>

                    <!-- Testimonial 3 -->
                    <div class="carousel-item mb-3">
                        <div class="testimonial">
                            <div class="testimonial-img-container">
                                <img src="../assets/homeImages/author.png.webp" class="testimonial-img"
                                    alt="User Image" />
                                <span class="quote-icon">❝</span>
                            </div>
                            <p>
                                "The guides were extremely professional, and the destinations
                                were breathtaking. Highly recommended!"
                            </p>
                            <h6>- Michael Brown</h6>
                        </div>
                    </div>
                </div>

                <!-- Carousel Indicators -->
                <div>
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="0"
                            class=""></button>
                        <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="2"></button>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<style scoped>
/* Testimonial Section */
.testimonial-section {
    padding: 60px 0;
    background: #406494;
}

/* Testimonial Box */
.testimonial {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
}

/* Image Container with Quote Icon */
.testimonial-img-container {
    position: relative;
    display: inline-block;
}

.testimonial-img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
}

.quote-icon {
    position: absolute;
    bottom: 0;
    right: -5px;
    background: #17a2b8;
    color: white;
    border-radius: 50%;
    padding: 5px 10px;
    font-size: 18px;
    font-weight: bold;
}

/* Testimonial Section */
.testimonial-section {
    padding: 60px 0;
    background: #ebf2fa;
}

/* Testimonial Box */
.testimonial {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
}

/* Image Container with Quote Icon */
.testimonial-img-container {
    position: relative;
    display: inline-block;
}

.testimonial-img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
}

.quote-icon {
    position: absolute;
    bottom: 0;
    right: -5px;
    background: #17a2b8;
    color: white;
    border-radius: 50%;
    padding: 5px 10px;
    font-size: 18px;
    font-weight: bold;
}

/* Testimonial Text */
.testimonial p {
    font-size: 1.2rem;
    color: #333;
    font-style: italic;
    margin-bottom: 10px;
}

.testimonial h6 {
    font-size: 1rem;
    color: #777;
    font-weight: bold;
}

.carousel-indicators {
    all: unset;
}

/* Carousel Indicators */
.carousel-indicators button {
    width: 12px;
    height: 12px;
    background: #aab1b7;
    display: inline-block;
    border-radius: 50%;
    margin: 0 5px;
    transition: 0.3s;
}

.carousel-indicators .active {
    background-color: #ff4d4d;
}

/* Recent Trips Section */
.recent-trips {
    background: #ffffff;
}

.recent-trips h2 {
    font-size: 2.2rem;
    font-weight: 400;
    margin-bottom: 60px;
}
</style>