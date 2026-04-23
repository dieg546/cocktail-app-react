import type { StateCreator } from "zustand"
import { getCategories, getRecipe } from "../services/RecipesService"
import type { Category,Recipe } from "../types"

export type RecipesSliceType = {

    categories : Category,
    fetchCategories: () => Promise<void>,
    fetchRecipes: (searchFilter:Recipe) => Promise<void>

}

export const createRecipeSlice : StateCreator<RecipesSliceType> = (set) => ({

    categories:{
        drinks:[]
    },
    fetchCategories : async ()=>{
        const setCategories = await getCategories();

        set({

            categories: setCategories

        })

    },
    
    fetchRecipes : async (searchFilter:Recipe)=>{

        await getRecipe(searchFilter);

    }

})