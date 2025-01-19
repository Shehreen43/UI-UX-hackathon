import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import products from './products'
import categories from './categories'
import { orderType } from './orderType'
import { salesType } from './salestype'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType,products, categories, orderType, salesType],
}
