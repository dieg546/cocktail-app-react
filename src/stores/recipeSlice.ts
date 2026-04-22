import type { StateCreator } from "zustand"
import { getCategories } from "../services/RecipesService"
import type { Category } from "../types"

export type RecipesSliceType = {

    categories : Category,
    fetchCategories: () => Promise<void>

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

    }   

})