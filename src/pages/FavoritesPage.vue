<template>
  <div class="favorites w-[100%] text-left h-[100vh]">
    <div class="w-[12vw] flex lg:hidden inline-block">
      <label
        id="drawer-button"
        for="my-drawer"
        class="drawer-button btn btn-primary my-2 lg:hidden block bg-accent border border-0 w-[10vw] flex items-center lg:text-md"
        ><span class="material-symbols-outlined">menu</span>
      </label>
    </div>
    <span class="text-4xl font-semibold"
      >A list of all your favorite recipes</span
    >
    <div class="divider my-[30px]"></div>
    <div
      class="container flex flex-wrap gap-3 overflow-y-auto h-[100%] pb-[20vh]"
    >
      <RecipeCard
        v-for="recipe of favoriteRecipes"
        :key="recipe"
        v-bind:recipe="recipe"
      />
      <span v-if="noFavoriteRecipes" class="text-lg"
        >Ooh... looks like you don't like any recipe...</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { activeRecipes } from "@/components/enums/recipes";
import RecipeCard from "@/components/RecipeCard.vue";
import { type Recipe } from "@/types/Recipes";

function checkFavorites(list: Recipe[]) {
  if (list.length) noFavoriteRecipes.value = false;
  else noFavoriteRecipes.value = true;
}

const favoriteRecipes = computed(() => {
  let favRecipes = [] as Recipe[];

  favRecipes = activeRecipes.value.filter(
    (recipe) => recipe.isFavorite === true
  );

  checkFavorites(favRecipes);

  return favRecipes;
});

const noFavoriteRecipes = ref(false);
</script>
