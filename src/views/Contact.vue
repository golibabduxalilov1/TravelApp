<script setup></script>

<template>
  <!-- Hero Section -->
  <header class="hero">
    <div class="hero-content text-center">
      <h1 class="noth-font">Contact</h1>
      <p>Pixel perfect design with awesome contents</p>
    </div>
  </header>
</template>

<style scoped>
/* Hero Section */
.hero {
  background: url("../assets/contact/bradcam4.png") no-repeat center
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
</style>
