import { Ingredient } from "./Ingredient"

export type Recipe = {
    imagePath: string,
    name: string,
    ingredients: string[],
    isFavorite: boolean
}