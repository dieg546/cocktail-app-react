import {z} from 'zod'

import { CategoriesApiResponseSchema, RecipesSchema } from '../utils/recipes-schema'

export type Category=z.infer<typeof CategoriesApiResponseSchema>;

export type Recipe = z.infer<typeof RecipesSchema>;