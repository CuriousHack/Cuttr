<script setup>
import Hero from '@/components/Hero.vue';
import HomeCards from '@/components/HomeCards.vue';
import JobListings from '@/components/Cta.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <Hero />
  <HomeCards />
  <JobListings :limit="3" :showButton="true" />
  <Footer />
</template>

<style scoped>
.inputSection {
  background-image: url(../assets/images/bg-shorten-desktop.svg);
  background-color: #3A3053;
  background-repeat: no-repeat;
  background-size: cover;
}

.boostSection {
  background-image: url(../assets/images/bg-boost-desktop.svg);
  background-color: #3A3053;
  background-repeat: no-repeat;
  background-size: cover;
}

@media screen and (max-width: 786px) {
   .inputSection {
      background-image: url(../assets/images/bg-shorten-mobile.svg);
   }

   .boostSection {
      background-image: url(../assets/images/bg-boost-mobile.svg);
   }
}
</style>