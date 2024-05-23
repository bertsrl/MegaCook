<template>
  <div class="flex flex-row flex-wrap">
    <span class="text-4xl font-semibold w-[100%] text-left hidden lg:block"
      >Statistics</span
    >
    <div class="w-[12vw] flex lg:hidden inline-block">
      <label
        id="drawer-button"
        for="my-drawer"
        class="drawer-button btn btn-primary my-2 lg:hidden block bg-accent border border-0 w-[10vw] flex items-center lg:text-md"
        ><span class="material-symbols-outlined">menu</span>
      </label>
    </div>
    <div class="flex lg:flex-row flex-col w-96 mb-[10vh]">
      <span class="text-4xl font-semibold w-[100%] text-left block lg:hidden"
        >Statistics</span
      >
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">Ingredients spread usage</h2>
          <Doughnut :data="chartData" />
        </div>
      </div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">Favorite recipes</h2>
          <Doughnut :data="favoriteData" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
/* eslint-disable */
import { ref, reactive, onBeforeMount } from "vue";
import { Doughnut, Bar } from "vue-chartjs";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { ingredients } from "@/components/enums/ingredients";
import { activeRecipes } from "@/components/enums/recipes";

const chartProperties = {
  labels: [] as string[],
  data: [] as number[],
  backgroundColor: [] as string[],
};

const chartData = reactive({
  labels: chartProperties.labels,
  datasets: [
    {
      label: "Used: ",
      data: chartProperties.data,
      backgroundColor: chartProperties.backgroundColor,
    },
  ],
});

const favoriteData = reactive({
  labels: ["Favorites", "Other"],
  datasets: [
    {
      data: [],
      backgroundColor: ["red", "grey"],
    },
  ],
});

ChartJS.register(ArcElement, Tooltip, Legend);

function calculateIngredientCounts(recipes: Recipe[]): {
  [key: string]: number;
} {
  const ingredientCounts: { [key: string]: number } = {};

  recipes.value.forEach((recipe) => {
    recipe.ingredients.forEach((ingredient) => {
      console.log(ingredient, " ", ingredientCounts);
      if (ingredientCounts[ingredient]) {
        ingredientCounts[ingredient]++;
      } else {
        ingredientCounts[ingredient] = 1;
      }
    });
  });

  return ingredientCounts;
}

function getFavoriteRecipes() {
  const favCount = activeRecipes.value
    .filter((recipe) => recipe.isFavorite)
    .map((recipe) => recipe.name).length;

  console.log(favCount);

  favoriteData.datasets[0].data = [
    favCount,
    activeRecipes.value.length - favCount,
  ];

  console.log(favoriteData);
}

function getRandomHexColor(): string {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

onBeforeMount(() => {
  const ingredientCounts = calculateIngredientCounts(activeRecipes);

  chartData.labels = Object.keys(ingredientCounts).map((ing) => {
    return ing;
  });

  chartData.datasets[0].data = Object.entries(ingredientCounts).map(
    ([ingredient, count]) => {
      return count;
    }
  );

  chartData.datasets[0].backgroundColor = chartData.datasets[0].data.map(() => {
    return getRandomHexColor();
  });

  getFavoriteRecipes();
});
</script>
<style lang=""></style>
