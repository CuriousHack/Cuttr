<script setup>
import { RouterLink, useRoute } from 'vue-router';
import logo from '@/assets/images/logo.svg';

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
};
</script>


<template>
  <nav class="bg-[#29D1D1] border-b border-green-500">
     <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div
          class="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
        >
          <!-- Logo -->
          <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
            <!-- <img class="h-10 w-auto" :src="logo" alt="Vue Jobs" /> -->
            <span class="block text-[#3A3053] text-4xl font-bold ml-2"
              >Cuttr</span
            >
          </RouterLink>
          <div class="md:ml-auto">
            <div class="flex space-x-2">
              <RouterLink
                to="/"
                :class="[
                  isActiveLink('/')
                    ? 'bg-[#3A3053]'
                    : 'hover:bg-[##66568f] hover:text-white',
                  'text-white',
                  'px-3',
                  'py-2',
                  'rounded-md',
                ]"
                >Home</RouterLink
              >
              <RouterLink
                to="/login"
                :class="[
                  isActiveLink('/login')
                    ? 'bg-[#3A3053]'
                    : 'hover:bg-gray-900 hover:text-white',
                  'text-white',
                  'px-3',
                  'py-2',
                  'rounded-md',
                ]"
                >Login</RouterLink
              >
              <RouterLink
                to="/register"
                :class="[
                  isActiveLink('/register')
                    ? 'bg-[#3A3053]'
                    : 'hover:bg-gray-900 hover:text-white',
                  'text-white',
                  'px-3',
                  'py-2',
                  'rounded-md',
                ]"
                >Register</RouterLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<!-- <template>
  <div class="w-10/12 md:flex hidden flex-row items-center justify-between py-8">
        <div class="flex flex-row gap-10 items-center justify-center">
            <img src="../assets/images/logo.svg" alt="">
            <div class="flex flex-row gap-8 items-center">
                <div class="pointer">Features</div>
                <div class="pointer">Pricing</div>
                <div class="pointer">Resources</div>
            </div>
        </div>
        <div class="flex flex-row gap-8 items-center justify-center">
            <div class="pointer">Login</div>
            <div class="font-semibold py-2 bg-[#29D1D1] text-white rounded-full px-6 transition-all hover:bg-[#29d1d1bb] pointer">Sign Up</div>
        </div>
    </div>
    <div class="w-10/12 md:hidden flex flex-col py-8 relative">
        <div class="w-full flex flex-row items-center justify-between">
            <img src="../assets/images/logo.svg" alt="">
            <img src="../assets/bars.svg" alt="" @click="toggleMenu">
        </div>

        <div v-if="isMenu"
            class=" w-full h-auto rounded-lg z-[1000] flex flex-col gap-4 bg-[#3A3053] text-white font-semibold text-base absolute top-20 p-6">
            <div>Features</div>
            <div>Pricing</div>
            <div>Resources</div>
            <hr />
            <div>Login</div>
            <div class="font-semibold py-2 bg-[#29D1D1] text-white rounded-full px-6">Sign Up</div>
        </div>
    </div>
</template> -->

<!-- <script>
export default {
    name: 'Navbar',
    data() {
        return {
            isMenu: false,
        };
    },
    methods: {
        toggleMenu() {
            this.isMenu = !this.isMenu;
        },
    },
};
</script> -->

<!-- <style scoped>
.pointer {
    cursor: pointer;
}
</style> -->