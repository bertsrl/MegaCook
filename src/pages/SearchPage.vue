<style></style>
<template>
  <div class="search-bar w-[100%] block flex gap-2">
    <div class="w-[12vw] flex lg:hidden block">
      <label
        id="drawer-button"
        for="my-drawer"
        class="drawer-button btn btn-primary lg:hidden block bg-accent border border-0 w-[12vw] flex items-center lg:text-md"
        ><span class="material-symbols-outlined">menu</span>
      </label>
    </div>
    <div class="flex flex-wrap gap-3 h-[5vh]">
      <label class="input input-bordered flex items-center gap-2 w-[100%]">
        <input
          v-model="searchTerm"
          type="text"
          class="grow"
          placeholder="Search"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          class="w-4 h-4 opacity-70"
        >
          <path
            fill-rule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clip-rule="evenodd"
          />
        </svg>
      </label>
      <div class="w-[100%] flex flex-wrap gap-3 mb-5">
        <button
          id="ingredient__chip"
          class="btn min-h-[2rem] h-[2rem] border font-semibold hover:bg-accent"
          :class="
            ingrd.isSelected ? 'border-2 bg-accent' : 'border-0 bg-slate-200'
          "
          v-for="ingrd of ingredients"
          :key="ingrd.name"
          @click="
            () => {
              ingrd.isSelected = ingrd.isSelected ? false : true;

              ingredients = selectIngredient(ingrd);
            }
          "
        >
          {{ ingrd.emoji }}
          {{ ingrd.name }}
        </button>
      </div>
      <div class="h-[75vh]">
        <div
          class="container flex flex-wrap gap-3 overflow-y-auto h-[100%] pb-[5vh]"
        >
          <span v-if="noRecipeFlag"
            >Sorry, no recipes added with this ingredient</span
          >
          <RecipeCard
            v-for="recipe of filteredRecipes"
            :key="recipe.name"
            v-bind:recipe="recipe"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { type Ingredient } from "@/types/Ingredient";
import { ingredients } from "@/components/enums/ingredients";
import { activeRecipes } from "@/components/enums/recipes";
import { filteredRecipes } from "@/components/common";
import RecipeCard from "@/components/RecipeCard.vue";

const noRecipeFlag = ref(false);
const searchTerm = ref("");

function filterByIngredient(newVal: Ingredient[]) {
  const selectedIngredients = newVal
    .filter((ingredient) => ingredient.isSelected)
    .map((ingredient) => ingredient.name);

  console.log(selectedIngredients);
  // Filter recipes that contain any of the selected ingredients
  if (selectedIngredients.length) {
    filteredRecipes.value = activeRecipes.value.filter((recipe) =>
      recipe.ingredients.some((ingredient) =>
        selectedIngredients.includes(ingredient)
      )
    );

    if (!filteredRecipes.value.length) noRecipeFlag.value = true;
    else noRecipeFlag.value = false;
  } else filteredRecipes.value = activeRecipes.value;
}

onMounted(() => {
  filteredRecipes.value = activeRecipes.value;
});

watch(searchTerm, (newVal) => {
  console.log(newVal);

  if (newVal !== "") {
    filteredRecipes.value = filteredRecipes.value.filter((recipe) => {
      return (
        recipe.name.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
        recipe.ingredients.some((ingredient) =>
          ingredient.toLowerCase().includes(searchTerm.value.toLowerCase())
        )
      );
    });
  } else {
    filterByIngredient(ingredients.value);
  }
});

watch(ingredients, (newVal) => {
  if (newVal) {
    // Get the names of selected ingredients
    filterByIngredient(newVal);
  }
});

function selectIngredient(ing: Ingredient): Ingredient[] {
  // Filter out the ingredient to move
  const filteredIngredients = ingredients.value.filter(
    (ingredient) => ingredient.name !== ing.name
  );

  // Return a new array with the ingredient at the front
  return [ing, ...filteredIngredients];
}
</script>
