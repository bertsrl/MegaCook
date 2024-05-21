import { type Ingredient } from "@/types/Ingredient";
import { ref } from "vue"

export const ingredients = ref<Ingredient[]>([
    {
      name: "Pepper",
      emoji: "🌶️",
    },
    {
      name: "Olive Oil",
      emoji: "🫒",
    },
    {
      name: "Egg",
      emoji: "🥚",
    },
    {
      name: "Chicken",
      emoji: "🐔",
    },
    {
      name: "Pork",
      emoji: "🐷",
    },
    {
      name: "Beef",
      emoji: "🐮",
    },
    {
      name: "Mushroom",
      emoji: "🍄",
    },
    {
      name: "Broccoli",
      emoji: "🥦",
    },
    {
      name: "Eggplant",
      emoji: "🍆",
    },
    {
      name: "Potato",
      emoji: "🥔",
    },
    {
      name: "Carrot",
      emoji: "🥕",
    },
    {
      name: "Melon",
      emoji: "🍉",
    },
    {
      name: "Fish",
      emoji: "🐟",
    },
  ]);