import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.networkup.io';
  const routes = [
    '',
    '/aboutus',
    '/ai-features',
    '/pricing',
    '/solutions',
    '/subscription',
    '/login',
    '/product/features',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
