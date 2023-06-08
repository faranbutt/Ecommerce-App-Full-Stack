import { type SchemaTypeDefinition } from 'sanity'
import { products } from './product';
import { category } from './categroy';
import { hero } from './hero';
import { prod } from './prod';
import { describe } from './describe';
import { news } from './news';
import { foot } from './foot';
import { dress } from './dress';
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products,category,hero,prod,describe,news,foot,dress]
}
