import { type Recipe } from "@/types/Recipes"
import { ref } from "vue"

export const activeRecipes = ref<Recipe[]>([
    {
        imagePath: "https://i2.supercook.com/a/e/1/d/ae1d16369260dc3168cf618338052a42-0.jpg",
        name: "Steak and Eggs",
        ingredients: ["Egg", "Beef", "Pepper"],
        isFavorite: false
    },
    {
        imagePath: "https://i2.supercook.com/c/0/8/c/c08c4d631e7fc6cbfe5c916e67939ad9-0.jpg",
        name: "Perfect Fish Fillets",
        ingredients: ["Olive Oil", "Fish", "Pepper"],
        isFavorite: false
    },
    {
        imagePath: "https://i2.supercook.com/9/0/3/2/9032b1532c82eb0411a20e1f85ec8375-0.jpg",
        name: "Roasted Broccoli",
        ingredients: ["Broccoli", "Olive Oil"],
        isFavorite: false
    },
    {
        imagePath: "https://i2.supercook.com/a/6/2/2/a622a52d4626652dd9bce041b0f8a74e-0.jpg",
        name: "Chicken escalope with meshed potatoes",
        ingredients: ["Potato", "Egg", "Chicken"],
        isFavorite: false
    },
    {
        imagePath: "https://i2.supercook.com/6/4/7/4/64746cac42b2b1a17be5e101ec8d8cbc-0.jpg",
        name: "Roasted Eggplant Recipe",
        ingredients: ["Eggplant", "Olive Oil"],
        isFavorite: false
    },
    {
        imagePath: "https://i2.supercook.com/0/3/9/c/039c310a60edb662c429be47d44f6617-0.jpg",
        name: "Melon Juice",
        ingredients: ["Melon", "Lemon"],
        isFavorite: false
    },
    
    
])