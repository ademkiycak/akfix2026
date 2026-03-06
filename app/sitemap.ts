import { SiteUrl } from '@/lib/baseurl'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SiteUrl(),
      lastModified: new Date(),
    },
 
  ]
}