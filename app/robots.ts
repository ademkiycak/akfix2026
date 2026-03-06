import { SiteUrl } from '@/lib/baseurl'
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SiteUrl()}/sitemap.xml`
  }
}