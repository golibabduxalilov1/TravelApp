<template>
  <div class="pop-places">
    <div class="container p-140">
      <h2 class="text-center">Popular Places</h2>
      <p class="text-center">
        Suffered alteration in some form, by injected humour or good day
        randomised booth anim 8-bit hella wolf moon beard words.
      </p>
      <div class="row">
        <div
          class="col-lg-4 col-md-6"
          v-for="(destination, index) in destinations"
          :key="index"
        >
          <div class="single_destination">
            <div class="article-card">
              <div class="overlay"></div>
              <div class="content">
                <div class="d-flex align-items-center">
                  <h5 class="text-white me-2">
                    {{ destination.country }}
                  </h5>
                  <span class="badge mb-2"
                    >{{ destination.places }} Places</span
                  >
                </div>
              </div>
              <img :src="destination.image" :alt="destination.country" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TravelCardGrid",
  data() {
    return {
      destinations: [
        {
          country: "Italy",
          places: 7,
          image:
            "https://preview.colorlib.com/theme/travelo/img/destination/1.png",
        },
        {
          country: "Brazil",
          places: 3,
          image:
            "https://preview.colorlib.com/theme/travelo/img/destination/2.png",
        },
        {
          country: "America",
          places: 10,
          image:
            "https://preview.colorlib.com/theme/travelo/img/destination/3.png",
        },
        {
          country: "Nepal",
          places: 2,
          image:
            "https://preview.colorlib.com/theme/travelo/img/destination/4.png",
        },
        {
          country: "Maldives",
          places: 2,
          image:
            "https://preview.colorlib.com/theme/travelo/img/destination/5.png",
        },
        {
          country: "Indonesia",
          places: 5,
          image:
            "https://preview.colorlib.com/theme/travelo/img/destination/6.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
.pop-places h2 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.pop-places p {
  font-size: 1rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto 40px;
}

.article-card {
  margin-bottom: 30px;
  border-radius: 5px;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  transition: all 300ms;
}

.article-card:hover {
  transform: translateY(-10px);
}

.article-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.article-card .content {
  box-sizing: border-box;
  width: 100%;
  position: absolute;
  padding: 10px 20px;
  height: auto;
  bottom: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.6));
}

.article-card {
  position: relative;
}

/* Qoraytirish qatlami */
.article-card .overlay {
  transition: all 0.3s;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(4, 14, 39, 0) 0%,
    rgba(4, 14, 39, 0.7) 100%
  );
}

.badge {
  display: inline-block;
  background: #1ec6b6;
  font-size: 12px;
  border-radius: 30px;
  font-weight: 400;
  padding: 0px 12px;
  height: 25px;
  line-height: 25px;
  color: #fff;
  margin-left: 10px;
  transition: 0.3s;
}
</style>
