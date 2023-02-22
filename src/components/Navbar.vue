<script setup></script>

<template>
  <header>
    <router-link to="/">
      <img src="../assets/lol-icon.png" width="50" height="50"
    /></router-link>

    <nav>
      <router-link to="/champions" class="links">Campeones</router-link>
      <router-link to="/summoner" class="links">Invocador</router-link>
    </nav>
  </header>
</template>

<style scoped>
header {
  @apply flex flex-row items-center flex-wrap py-5 px-6 bg-slate-600 drop-shadow-xl;
}

nav {
  @apply flex flex-wrap justify-center ml-6;
}

.links {
  @apply mr-6 hover:font-medium transition transform hover:translate-x-2 duration-500 hover:text-cyan-400 hover:drop-shadow-lg text-white;
}

img {
  @apply transition transform hover:-translate-y-1 duration-500 hover:drop-shadow-lg;
}
</style>
