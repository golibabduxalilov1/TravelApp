<script>
import MiniSearch from "@/components/MiniSearch.vue";
import NewsSubscribe from "@/components/NewsSubscribe.vue";
import RecentTrips from "@/components/RecentTrips.vue";

export default {
  components: {
    MiniSearch,
    NewsSubscribe,
    RecentTrips,
  },
  data() {
    return {
      selectedCountry: "",
      selectedTravelType: "",
      priceRange: 75,
      countries: ["United States", "France", "Italy", "Spain"],
      travelTypes: ["Adventure", "Beach", "City", "Mountain"],
      places: [
        {
          id: 1,
          name: "California",
          location: "United States",
          price: 500,
          image: "https://preview.colorlib.com/theme/travelo/img/place/1.png",
        },
        {
          id: 2,
          name: "Korola Megna",
          location: "United States",
          price: 500,
          image: "https://preview.colorlib.com/theme/travelo/img/place/2.png",
        },
        {
          id: 3,
          name: "London",
          location: "United States",
          price: 500,
          image: "https://preview.colorlib.com/theme/travelo/img/place/3.png",
        },
        {
          id: 4,
          name: "Miami Beach",
          location: "United States",
          price: 500,
          image: "https://preview.colorlib.com/theme/travelo/img/place/4.png",
        },
        {
          id: 5,
          name: "Saintmartine Iceland",
          location: "United States",
          price: 500,
          image: "https://preview.colorlib.com/theme/travelo/img/place/5.png",
        },
      ],
    };
  },
  computed: {
    filteredPlaces() {
      return this.places.filter((place) => place.price >= this.priceRange);
    },
  },
  methods: {
    resetFilters() {
      this.selectedCountry = "";
      this.selectedTravelType = "";
      this.priceRange = 75;
    },
  },
};
</script>

<template>
  <header class="hero">
    <div class="hero-content text-center">
      <h1 class="noth-font">Destinations</h1>
      <p>Pixel perfect design with awesome contents</p>
    </div>
  </header>
  <MiniSearch />
  <div class="container mt-4 p-140">
    <div class="row">
      <div class="col-lg-3">
        <div class="card p-3 mb-4">
          <h5>Filter Result</h5>
          <select class="form-select mb-2" v-model="selectedCountry">
            <option value="">Country</option>
            <option v-for="country in countries" :key="country">
              {{ country }}
            </option>
          </select>
          <select class="form-select mb-2" v-model="selectedTravelType">
            <option value="">Travel type</option>
            <option v-for="type in travelTypes" :key="type">{{ type }}</option>
          </select>
          <label>Price range</label>
          <input
            type="range"
            class="form-range"
            min="75"
            max="300"
            v-model="priceRange"
          />
          <p>${{ priceRange }} - $300</p>
          <button class="btn btn-danger w-100" @click="resetFilters">
            Reset
          </button>
        </div>
      </div>
      <div class="col-lg-9">
        <div class="row">
          <div
            class="col-md-4 mb-4"
            v-for="place in filteredPlaces"
            :key="place.id"
          >
            <div class="destination-card">
              <img src="../assets/boxes/1.png" alt="Saintmartine Iceland" />
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
                    (20 Reviews)
                  </span>
                  <span><i class="bi bi-stopwatch me-1"></i> 5 Days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-4">
          <button class="btn hov-green m-place">More Places</button>
        </div>
      </div>
    </div>
  </div>

  <NewsSubscribe />
  <RecentTrips />
</template>

<style scoped>
.hero {
  background: url("../assets/homeImages/banner.png") no-repeat center
    center/cover;
  padding: 175px 0;
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
  font-size: 5rem;
}

.hero p {
  font-size: 1.2rem;
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
  transition: 0.3s !important;
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
