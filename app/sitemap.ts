import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // Use the APP_URL environment variable if available, otherwise fallback to a default domain
  const baseUrl = process.env.APP_URL || 'https://www.moonproperty.com';

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    // Future dynamic routes (like property detail pages) would be mapped here
  ];
}
