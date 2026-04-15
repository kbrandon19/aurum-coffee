import {defineField, defineType} from 'sanity'

export const productType = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
      defineField({ name: 'name', type: 'string' }) ,
    defineField({ name: 'slug', type: 'slug', options: { source: 'name' }}),
    defineField({ name: 'origin', type: 'string' }) ,
    defineField({ name: 'flavorNotes', type: 'string' }) ,
    defineField({ name: 'roastLevel', type: 'string' }) ,
    defineField({ name: 'price', type: 'number' }),
    defineField({ name: 'description', type: 'text' }),
    defineField({ name: 'image', type: 'image' }),                        
  ],
})