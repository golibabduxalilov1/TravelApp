<script>
import { onMounted } from "vue";

export default {
    setup() {
        onMounted(() => {
            const footerLinks = document.querySelectorAll(".footer-links a");

            footerLinks.forEach((link) => {
                link.addEventListener("click", function (event) {
                    event.preventDefault();

                    const target = document.querySelector(this.getAttribute("href"));
                    if (target) {
                        window.scrollTo({
                            top: target.offsetTop - 50,
                            behavior: "smooth",
                        });
                    }
                });
            });
        });
    },
}
</script>

<template>
    <!-- Footer Section -->
    <footer class="footer p-140">
        <div class="container">
            <div class="row">
                <!-- Logo & Contact Info -->
                <div class="col-md-4">
                    <div class="footer-brand">
                        <img src="../assets/allPages/footer_logo.png.webp" alt="Travelo Logo" class="footer-logo" />
                        <p>5th Flora, 700/D Kings Road, Green Lane, New York - 1782</p>
                        <p>+10 367 826 2567</p>
                        <p>contact@carpenter.com</p>
                        <div class="social-icons">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-pinterest"></i></a>
                            <a href="#"><i class="fab fa-youtube"></i></a>
                        </div>
                    </div>
                </div>

                <!-- Company Links -->
                <div class="col-md-2">
                    <h5>Company</h5>
                    <ul class="footer-links">
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Gallery</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <!-- Popular Destinations -->
                <div class="col-md-4">
                    <h5 class="align-content-center">Popular Destination</h5>
                    <div class="row">
                        <div class="col-6">
                            <ul class="footer-links">
                                <li><a href="#">Indonesia</a></li>
                                <li><a href="#">India</a></li>
                                <li><a href="#">Italy</a></li>
                                <li><a href="#">France</a></li>
                            </ul>
                        </div>
                        <div class="col-6">
                            <ul class="footer-links">
                                <li><a href="#">America</a></li>
                                <li><a href="#">Switzerland</a></li>
                                <li><a href="#">Canada</a></li>
                                <li><a href="#">England</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Instagram Gallery -->
                <div class="col-md-2">
                    <h5>Instagram</h5>
                    <div class="instagram-gallery">
                        <img src="../assets/homeImages/banner.png" alt="Instagram Image" />
                        <img src="../assets/homeImages/banner2.png" alt="Instagram Image" />
                        <img src="../assets/homeImages/banner3.png" alt="Instagram Image" />
                        <img src="../assets/homeImages/1.png" alt="Instagram Image" />
                        <img src="../assets/homeImages/2.png" alt="Instagram Image" />
                        <img src="../assets/homeImages/3.png" alt="Instagram Image" />
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<style scoped>
/* Footer Styling */
.footer {
    background: #0a1122;
    color: white;
}

.footer-brand {
    width: 80%;
}

.footer-logo {
    width: 150px;
    margin-bottom: 15px;
}

.footer p {
    font-size: 0.9rem;
    color: #bbb;
}

/* Social Media Icons */
.social-icons a {
    color: white;
    font-size: 18px;
    margin-right: 10px;
    transition: 0.3s;
}

.social-icons a:hover {
    color: #ff4d4d;
}

/* Footer Links */
.footer h5 {
    font-size: 1.1rem;
    margin-bottom: 15px;
    color: white;
}

.footer-links {
    list-style: none;
    padding: 0;
}

.footer-links li {
    margin-bottom: 8px;
}

.footer-links a {
    text-decoration: none;
    color: #bbb;
    transition: 0.3s;
}

.footer-links a:hover {
    color: #ff4a52;
}

/* Instagram Gallery */
.instagram-gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5px;
}

.instagram-gallery img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 5px;
    transition: transform 0.3s;
}

.instagram-gallery img:hover {
    transform: scale(1.1);
}
</style>