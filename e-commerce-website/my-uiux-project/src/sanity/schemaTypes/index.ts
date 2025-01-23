import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import { orderType } from './orderType'
import { salesType } from './salestype'
import { productType } from './products'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType,productType, categoryType, orderType, salesType],
}
