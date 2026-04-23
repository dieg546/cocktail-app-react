import axios from "axios"
import { CategoriesApiResponseSchema, getRecipeSchema } from "../utils/recipes-schema"
import type { Recipe } from "../types"

export async function getCategories() {
    
    
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'

    const {data} = await axios(url)
    
    const result = CategoriesApiResponseSchema.safeParse(data)

    if(result.success){
        return result.data
    }

}

export async function getRecipe(searchFilter:Recipe) {
    
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${searchFilter.category}&i=${searchFilter.ingredient}`

    const {data} = await axios(url);

    const result = getRecipeSchema.safeParse(data);

    console.log(result);

}