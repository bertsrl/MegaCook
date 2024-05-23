<template>
  <div class="card w-[45%] lg:w-[24%] bg-base-100 shadow-xl">
    <button
      class="btn btn-circle absolute top-0 right-0 m-5 hover:bg-red-100"
      :class="props.recipe.isFavorite ? 'bg-red-100' : ''"
      @click="addRecipeToFavorites(props.recipe)"
    >
      <span
        class="material-symbols-outlined"
        :style="`font-variation-settings: 'FILL' ${
          props.recipe.isFavorite ? '1' : '0'
        }, 'wght' 400, 'GRAD' 0, 'opsz' 24; color: ${
          props.recipe.isFavorite ? 'red' : ''
        }`"
      >
        favorite
      </span>
    </button>
    <figure>
      <img :src="props.recipe.imagePath" :alt="props.recipe.name" />
    </figure>
    <div class="card-body">
      <h2 class="card-title text-start">
        {{ props.recipe.name }}
      </h2>
      <p class="text-start">If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions justify-start">
        <div
          v-for="ingredient of props.recipe.ingredients"
          :key="ingredient"
          class="badge badge-outline"
        >
          {{ ingredient }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Recipe } from "@/types/Recipes";
import { defineProps, defineEmits, computed, watch } from "vue";
import { filteredRecipes } from "./common";
import { activeRecipes } from "./enums/recipes";

const emit = defineEmits(["update:recipe"]);

const recipeUpdated = computed<Recipe>({
  set: (val) => emit("update:recipe", val),
  get: () => props.recipe,
});

const props = defineProps({
  recipe: Recipe,
});

function addRecipeToFavorites(recipe: Recipe) {
  recipeUpdated.value.isFavorite = recipe.isFavorite ? false : true;
}

watch(activeRecipes, (newVal) => {
  if (newVal) {
    newVal.forEach((updatedRecipe) => {
      const index = filteredRecipes.value.findIndex(
        (recipe) => recipe.name === updatedRecipe.name
      );
      if (index !== -1) {
        filteredRecipes.value[index] = updatedRecipe;
      }
    });
  }
});
</script>
