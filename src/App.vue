<template>
  <div class="drawer lg:drawer-open w-full overflow-y-hidden">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div
      class="drawer-content flex gap-5 m-[2vw] lg:h-0"
      :class="path === '/statistics' ? 'h-[120vh]' : 'h-[100vh]'"
    >
      <router-view />
    </div>
    <div class="drawer-side" style="overflow-y: hidden">
      <label
        for="my-drawer"
        aria-label="close sidebar"
        class="drawer-overlay"
      ></label>
      <div class="z-[999] flex items-center justify-center bg-base-200 py-5">
        <img src="/logo.png" width="300" alt="" id="logo" />
      </div>
      <ul
        class="menu p-4 w-80 h-full bg-base-200 text-base-content block pt-[10vh] lg:pt-5 pt-[15vh]"
      >
        <!-- Sidebar content here -->
        <li><a @click="goToPage('/')">Search for recipe</a></li>
        <li><a @click="goToPage('/favorites')">Favorites</a></li>
        <li><a @click="goToPage('/statistics')">Statistics</a></li>
        <div class="text-left m-5 text-md">by Bertalan Andrei @be.r.ty</div>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from "./router";
import { ref } from "vue";
function goToPage(url: string) {
  router.push(url);
  document.getElementById("drawer-button").click();
}

const path = ref(window.location.pathname);
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

body {
  height: 100%;
}
</style>
