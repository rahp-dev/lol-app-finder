<script setup>
import { ref } from "vue";
import axios from "axios";

const searchSummoner = ref("");
const gameList = ref("");

function searchPlayer(e) {
  axios
    .get("http://localhost:4000/playeds")
    .then(function (response) {
      gameList(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

console.log(gameList());
</script>

<template>
  <section class="flex items-center justify-center flex-col py-8">
    <div class="flex flex-col">
      <label class="text-center leading-8 text-lg mb-3 text-gray-600">
        Encuentra a tu Invocador
      </label>
      <input v-model="searchSummoner" />
      <button @click="(e) => searchPlayer(e)">Buscar</button>
    </div>
  </section>
</template>

<style scoped>
input {
  @apply bg-white rounded border border-gray-300 focus:border-slate-500 focus:ring-2 focus:ring-slate-200 text-base outline-none text-gray-700 px-4 leading-8 transition-colors duration-200 ease-in-out placeholder:italic placeholder:text-slate-400;
}
button {
  @apply bg-slate-500 rounded hover:bg-slate-700 transition-colors duration-300 text-gray-100 font-medium py-1 mt-4;
}
</style>
