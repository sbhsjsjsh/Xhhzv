import { MetadataRoute } from 'next';

const SERVICES_SLUGS = [
  'residential-sales',
  'residential-rentals',
  'commercial',
  'property-management',
  'legal-documentation',
  'home-loans',
];

export default function sitemap(): MetadataRoute.Sitemap {
  // Use the APP_URL environment variable if available, otherwise fallback to a default domain
  const baseUrl = process.env.APP_URL || 'https://www.moonproperty.com';

  const serviceRoutes: MetadataRoute.Sitemap = SERVICES_SLUGS.map((slug) => ({
    url: `${baseUrl}/service/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/service`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...serviceRoutes,
  ];
}
