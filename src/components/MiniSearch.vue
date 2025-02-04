<script></script>
<template>
    <!-- Search Section -->
    <section class="search-section">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-3">
                    <h4>Where you want to go?</h4>
                </div>
                <div class="col-lg-9">
                    <form class="row g-3">
                        <div class="col-md-4">
                            <input type="text" class="form-control" placeholder="Where to go?" required />
                        </div>
                        <div class="col-md-3">
                            <input type="date" class="form-control" required />
                        </div>
                        <div class="col-md-3">
                            <select class="form-control">
                                <option>Travel Type</option>
                                <option>Adventure</option>
                                <option>Relaxation</option>
                                <option>Business</option>
                            </select>
                        </div>
                        <div class="col-md-2">
                            <button type="submit" class="btn btn-danger search-btn">
                                Search
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* Search Section */
.search-section {
    background: #040e27;
    color: white;
    padding: 50px 0;
}

.search-section .form-control {
    height: 50px;
}

.search-btn {
    padding: 13px 39px;
}
</style>
