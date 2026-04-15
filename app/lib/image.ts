import imageUrlBuilder from '@sanity/image-url'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'nforfoqj',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}