<script>
import { onMounted } from "vue";

export default {
    setup() {
        onMounted(() => {
            const tripTitles = document.querySelectorAll(".trip-title");

            // Highlight the second trip title (index 1)
            if (tripTitles.length > 1) {
                tripTitles[1].classList.add("highlight");
            }
        });
    },
}
</script>

<template>
    <!-- Recent Trips Section -->
    <section class="recent-trips p-140">
        <div class="container text-center">
            <h2 class="mb-5">Recent Trips</h2>
            <div class="row mt-4">
                <!-- Trip Card 1 -->
                <div class="col-lg-4 col-md-6">
                    <div class="trip-card">
                        <img src="../assets/recently/1.png.webp" alt="Trip 1" />
                        <div class="trip-info">
                            <span class="trip-date">Oct 12, 2019</span>
                            <h5 class="trip-title">
                                Journeys Are Best Measured In New Friends
                            </h5>
                        </div>
                    </div>
                </div>

                <!-- Trip Card 2 -->
                <div class="col-lg-4 col-md-6">
                    <div class="trip-card">
                        <img src="../assets/recently/2.png.webp" alt="Trip 2" />
                        <div class="trip-info">
                            <span class="trip-date">Oct 12, 2019</span>
                            <h5 class="trip-title highlight">
                                Journeys Are Best Measured In New Friends
                            </h5>
                        </div>
                    </div>
                </div>

                <!-- Trip Card 3 -->
                <div class="col-lg-4 col-md-6">
                    <div class="trip-card">
                        <img src="../assets/recently/3.png.webp" alt="Trip 3" />
                        <div class="trip-info">
                            <span class="trip-date">Oct 12, 2019</span>
                            <h5 class="trip-title">
                                Journeys Are Best Measured In New Friends
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<style scoped>
/* Trip Card Styling */
.trip-card {
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    text-align: left;
    transition: transform 0.3s ease-in-out;
}

.trip-card img {
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
}

.trip-info {
    padding: 15px;
}

.trip-date {
    font-size: 0.9rem;
    color: #888;
}

.trip-title {
    margin-top: 10px;
    font-size: 22px;
    color: #222;
    transition: color 0.3s ease-in-out;
}

.trip-card:hover .trip-title {
    color: #ff4a52;
}

/* Highlighted Text for the Middle Card */

/* Hover Effect */
.trip-card:hover {
    transform: translateY(-5px);
}
</style>