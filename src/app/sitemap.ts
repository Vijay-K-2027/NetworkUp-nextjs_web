import { MetadataRoute } from 'next';
import { competitors } from './(pages)/compare/competitors';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.networkup.io';
  const staticRoutes = [
    '',
    '/aboutus',
    '/ai-features',
    '/pricing',
    '/solutions',
    '/subscription',
    '/login',
    '/product/features',
  ];

  const dynamicRoutes = Object.keys(competitors).map((key) => `/compare/${key}`);
  const allRoutes = [...staticRoutes, ...dynamicRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: route === '' ? 1.0 : route.startsWith('/compare/') ? 0.6 : 0.8,
  }));
}
