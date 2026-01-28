import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.BASE_URL || 'https://smartcardio.ru/ekaterina'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/api/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
