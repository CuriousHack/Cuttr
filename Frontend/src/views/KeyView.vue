<template>
  <section class="text-center flex flex-col justify-center items-center h-96">
    <i class="pi pi-exclamation-triangle text-yellow-500 text-7xl mb-5"></i>
    <h1 class="text-6xl font-bold mb-4" v-if="error">{{ error}}</h1>
    <h1 class="text-6xl font-bold mb-4" v-else>Redirecting</h1>
  </section>
</template>

<script>
import { useRoute, useRouter } from 'vue-router';

export default {
  name: 'RedirectLink',
  data() {
    return {
      error: null
    };
  },
  async created() {
    const route = useRoute();
    const router = useRouter();
    const key = route.params.key;
    const baseURL = import.meta.env.VITE_APP_BASE_URL

    try {
      const response = await fetch(`${baseURL}/cut/${key}`);

      if (response.ok) {
        const returnedData = await response.json();
        window.location.href = returnedData.data.long_url;
      } else if (response.status === 404) {
        // Navigate to the 404 NotFoundView route
        router.push({ name: 'Link-not-found' });
      } else {
        this.error = 'An error occurred while redirecting';
      }
    } catch (err) {
      this.error = 'An error occurred while redirecting';
    }
  }
};
</script>
