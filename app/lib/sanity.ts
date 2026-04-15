import { createClient } from '@sanity/client'

export const sanity = createClient({
  projectId: 'nforfoqj',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

export async function getBeans() {
  return await sanity.fetch(`*[_type == "product"]`)
}