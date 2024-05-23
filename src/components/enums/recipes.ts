import { type Recipe } from "@/types/Recipes"
import { ref } from "vue"

export const activeRecipes = ref<Recipe[]>([
    {
        imagePath: "https://images.pexels.com/photos/15514358/pexels-photo-15514358/free-photo-of-fried-potatoes-sauce-steak-and-fired-egg-on-tray.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Steak and Eggs",
        ingredients: ["Egg", "Beef", "Pepper"],
        isFavorite: false
    },
    {
        imagePath: "https://images.pexels.com/photos/4013723/pexels-photo-4013723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Perfect Fish Fillets",
        ingredients: ["Olive Oil", "Fish", "Pepper"],
        isFavorite: false
    },
    {
        imagePath: "https://images.pexels.com/photos/8056670/pexels-photo-8056670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Roasted Broccoli",
        ingredients: ["Broccoli", "Olive Oil"],
        isFavorite: false
    },
    {
        imagePath: "https://img.taste.com.au/u8wgTcNU/w643-h428-cfill-q90/taste/2016/11/chicken-schnitzel-with-garlic-mash-27749-1.jpeg",
        name: "Chicken escalope with meshed potatoes",
        ingredients: ["Potato", "Egg", "Chicken"],
        isFavorite: false
    },
    {
        imagePath: "https://images.pexels.com/photos/23359711/pexels-photo-23359711/free-photo-of-eggplant-with-cheese-in-box.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Roasted Eggplant Recipe",
        ingredients: ["Eggplant", "Olive Oil"],
        isFavorite: false
    },
    {
        imagePath: "https://images.pexels.com/photos/8146360/pexels-photo-8146360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Melon Juice",
        ingredients: ["Melon", "Lemon"],
        isFavorite: false
    },
    
    
])