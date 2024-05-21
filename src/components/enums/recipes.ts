import { type Recipe } from "@/types/Recipes"
import { ref } from "vue"

export const activeRecipes = ref<Recipe[]>([
    {
        imagePath: "https://i2.supercook.com/a/e/1/d/ae1d16369260dc3168cf618338052a42-0.jpg",
        name: "Steak and Eggs",
        ingredients: ["Egg", "Beef", "Pepper"]
    },
    {
        imagePath: "https://i2.supercook.com/c/0/8/c/c08c4d631e7fc6cbfe5c916e67939ad9-0.jpg",
        name: "Perfect Fish Fillets",
        ingredients: ["Olive Oil", "Fish", "Pepper"]
    },
])