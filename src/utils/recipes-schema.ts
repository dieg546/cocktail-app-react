import {z} from 'zod'

export const CategoriesApiResponseSchema = z.object({
    
    drinks: z.array(
        z.object({
            strCategory : z.string()
        })
    )

})

export const RecipesSchema = z.object({ //BUSCAR

    ingredient: z.string(),
    category: z.string()

})

export const getRecipeSchema = z.object({

    drinks: z.array(
        z.object({
            strDrink: z.string(),
            strDrinkThumb: z.string(),
            idDrink: z.string()
        })
    )

})

export const unitRecipeSchema = z.object({
    strDrink: z.string(),
    strDrinkThumb: z.string(),
    idDrink: z.string()
})


export const ApiDrinkSchema = z.object({

    drinks: z.array(

        z.object({
            idDrink: z.string(),
            strDrink: z.string(),
            strCategory: z.string(),
            strDrinkThumb: z.string(),
        })

    )

})


