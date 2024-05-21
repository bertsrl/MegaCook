<template>
  <div class="drawer lg:drawer-open w-full">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex gap-5 m-[2vw]">
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
      <div class="bg-neutral-content w-full h-[1px] block"></div>
      <ul
        class="menu p-4 w-80 min-h-full bg-base-200 text-base-content block pt-[10vh] lg:pt-5 pt-[15vh]"
      >
        <!-- Sidebar content here -->
        <li><a @click="router.push('/')">Search for recipe</a></li>
        <li><a @click="router.push('/favorites')">Favorites</a></li>
        <li><a @click="router.push('/statistics')">Statistics</a></li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from "./router";
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
</style>
