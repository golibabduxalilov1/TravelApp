<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

</script>

<template>
  <Navbar />
  <router-view></router-view>
  <Footer />
</template>

<style>
/* Import fonts */
@import url("https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do&display=swap");
/* Poppins Font */
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap");
/* Rubik Font */
@import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap");

body {
  font-family: "Rubik", serif;
  font-weight: 400;
  font-style: normal;
}

.noth-font {
  font-family: "Nothing You Could Do", sans-serif;
  font-weight: 400;
}

.big-fsize {
  font-size: 150px !important;
}

.p-140 {
  padding: 140px 0 120px 0;
}

.start-color {
  color: #fdb163;
}

.m-place {
  color: #fff;
  background: #ff4a52;
  padding: 13px 39px;
  transition: 0.3s;
}

.hov-red:hover {
  color: #fff;
  background: #ff4a52 !important;
}

.hov-green:hover {
  color: #fff;
  background: #1ec6b6 !important;
}
</style>
