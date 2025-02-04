<template>

    <!-- Hero Section -->
    <header class="hero">
        <div class="hero-content text-center">
            <h1 class="noth-font ">About Us</h1>
            <p>Pixel perfect design with awesome contents</p>
        </div>
    </header>

    <!-- Our Story Section -->
    <section class="our-story p-140">

        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="story_heading">
                        <h3>Our Story</h3>
                    </div>
                    <div class="row">
                        <div class="col-lg-11 offset-lg-1">
                            <div class="story_info">
                                <div class="row">
                                    <div class="col-lg-9">
                                        <p>Consulting represents success at realizing the company is going in the wrong
                                            direction. The only time the company fails is when it is not possible to do
                                            a turnaround anymore. We help companies pivot into more profitable
                                            directions where they can expand and grow. It is inevitable that companies
                                            will end up making a few mistakes; we help them correct these mistakes.</p>
                                        <p>Consulting represents success at realizing the company is going in the wrong
                                            direction. The only time the company fails is when it is not possible to do
                                            a turnaround anymore. We help companies pivot into more profitable
                                            directions where they can expand and grow. It is inevitable that companies
                                            will end up making a few mistakes; we help them correct these mistakes.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="story_thumb">
                                <div class="row">
                                    <div class="col-lg-5 col-md-6">
                                        <div class="thumb padd_1">
                                            <img src="../assets/aboutImages/1.png" alt="">
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6">
                                        <div class="thumb">
                                            <img src="../assets/aboutImages/2.png" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="counter_wrap">
                                <div class="row">
                                    <div class="col-lg-4 col-md-4">
                                        <div class="single_counter text-center">
                                            <h3 class="counter">378</h3>
                                            <p>Tour has done successfully</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-4">
                                        <div class="single_counter text-center">
                                            <h3 class="counter">30</h3>
                                            <p>Yearly tour arrange</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-4">
                                        <div class="single_counter text-center">
                                            <h3 class="counter">2263</h3>
                                            <p>Happy Clients</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<style scoped>

/* Hero Section */
.hero {
  background: url("../assets/aboutImages/bradcam3.png") no-repeat center center/cover;
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

/* Our Story Section */
.story_heading h3 {
  font-size: 38px;
  font-weight: 400;
  color: #040e27;
  margin-bottom: 60px;
}

.story_info {
  margin-bottom: 52px;
}

.story_info p {
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: #7a838b;
  margin-bottom: 0px;
  font-family: "Rubik", sans-serif;
}

.story_thumb {
  margin-bottom: 60px;
}

.about_story .story_thumb .thumb.padd_1 {
  padding-right: 58px;
}

.about_story .story_thumb .thumb img {
  width: 100%;
}

.counter_wrap .single_counter {
  margin-bottom: 30px;
}

.counter_wrap .single_counter h3 {
  color: #ff4a52;
  font-weight: 400;
  font-size: 60px;
  margin-bottom: 17px;
}

.counter_wrap .single_counter p {
  color: #7a838b;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 0;
  line-height: 28px;
}

</style>