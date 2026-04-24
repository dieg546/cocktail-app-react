import type { StateCreator } from "zustand"
import { getApiDrink, getCategories, getRecipe } from "../services/RecipesService"
import type { ApiRecipe, Category,Drink,Recipe } from "../types"

export type RecipesSliceType = {

    categories : Category,
    recipes: ApiRecipe,
    drink: Drink,
    modal: boolean,
    fetchCategories: () => Promise<void>,
    fetchRecipes: (searchFilter:Recipe) => Promise<void>,
    selectedRecipe: (id: String) => Promise<void>,
    closeModal: () => void

}

export const createRecipeSlice : StateCreator<RecipesSliceType> = (set) => ({

    categories:{
        drinks:[]
    },
    recipes:{
        drinks:[]
    },
    drink:{} as Drink,
    modal: false,
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

        const setDrink = await getApiDrink(id);

        set({
            drink: setDrink?.drinks[0],
            modal: true
        })

    },

    closeModal:()=>{

        set({
            modal:false,
            drink: {} as Drink
        })

    }

})