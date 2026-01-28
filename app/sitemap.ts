import { MetadataRoute } from 'next'

const BASE_URL = process.env.BASE_URL || 'https://smartcardio.ru/ekaterina'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
      alternates: {
        languages: {
          ru: `${BASE_URL}`,
          en: `${BASE_URL}/en`,
        },
      },
    },
    {
      url: `${BASE_URL}/en`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
      alternates: {
        languages: {
          ru: `${BASE_URL}`,
          en: `${BASE_URL}/en`,
        },
      },
    },
  ]
}