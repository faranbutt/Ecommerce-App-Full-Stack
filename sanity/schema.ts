import { type SchemaTypeDefinition } from 'sanity'
import { products } from './product';
import { category } from './categroy';
import { hero } from './hero';
import { prod } from './prod';
import { describe } from './describe';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products,category,hero,prod,describe],
}
