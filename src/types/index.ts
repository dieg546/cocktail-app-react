import {z} from 'zod'

import { ApiDrinkSchema, CategoriesApiResponseSchema, RecipesSchema, getRecipeSchema, unitRecipeSchema } from '../utils/recipes-schema'

export type Category=z.infer<typeof CategoriesApiResponseSchema>;

export type Recipe = z.infer<typeof RecipesSchema>;

export type ApiRecipe = z.infer<typeof getRecipeSchema>;

export type unitRecipe = z.infer<typeof unitRecipeSchema>;

export type Drink = z.infer<typeof ApiDrinkSchema>['drinks'][0];