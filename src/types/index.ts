import {z} from 'zod'

import { CategoriesApiResponseSchema } from '../utils/recipes-schema'

export type Category=z.infer<typeof CategoriesApiResponseSchema>;