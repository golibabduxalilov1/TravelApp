<script setup></script>

<template>
    <!-- Newsletter Section -->
    <section class="newsletter">
        <div class="container">
            <div class="row justify-content-center text-center">
                <div class="col-md-8">
                    <h2>Subscribe Our Newsletter</h2>
                    <p>
                        Subscribe to our newsletter to get offers and updates about new
                        places to discover.
                    </p>
                    <form id="subscribeForm" class="d-flex">
                        <input type="email" id="email" class="form-control" placeholder="Your email" required />
                        <button type="submit" class="btn btn-danger">Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    </section>


</template>

<style scoped>
/* Newsletter Section */
.newsletter {
    background: url("../assets/homeImages/newsletter.png") no-repeat center center/cover;
    padding: 60px 0;
    color: white;
    position: relative;
}

.newsletter::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
}

.newsletter .container {
    position: relative;
    z-index: 1;
}

.newsletter h2 {
    font-size: 2rem;
    margin-bottom: 10px;
}

.newsletter p {
    font-size: 1rem;
    margin-bottom: 20px;
    color: #ddd;
}

.newsletter form {
    max-width: 500px;
    margin: auto;
}

.newsletter .form-control {
    border-radius: 5px 0 0 5px;
    height: 50px;
}

.newsletter .btn {
    border-radius: 0 5px 5px 0;
    height: 50px;
}
</style>