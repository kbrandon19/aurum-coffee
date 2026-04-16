import {defineField, defineType} from 'sanity'

export const heroType = defineType({
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    defineField({ name: 'text', type: 'string' }) ,
    defineField({ name: 'tag', type: 'string' }) ,
                     
  ],
})