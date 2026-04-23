import type { StateCreator } from "zustand"
import { getApiDrink, getCategories, getRecipe } from "../services/RecipesService"
import type { ApiRecipe, Category,Recipe } from "../types"

export type RecipesSliceType = {

    categories : Category,
    recipes: ApiRecipe,
    fetchCategories: () => Promise<void>,
    fetchRecipes: (searchFilter:Recipe) => Promise<void>,
    selectedRecipe: (id: String) => Promise<void>

}

export const createRecipeSlice : StateCreator<RecipesSliceType> = (set) => ({

    categories:{
        drinks:[]
    },
    recipes:{
        drinks:[]
    },
    fetchCategories : async ()=>{
        const setCategories = await getCategories();

        set({

            categories: setCategories

        })

    },
    
    fetchRecipes : async (searchFilter:Recipe)=>{

        const setRecipes = await getRecipe(searchFilter);

        set({

            recipes: setRecipes

        })

    },

    selectedRecipe : async (id: String)=>{

        console.log('Desde zustand ',id)

        await getApiDrink(id);

    }

})