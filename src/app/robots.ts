import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'PerplexityBot',
          'ClaudeBot',
          'Google-Extended',
          'Amazonbot',
          'cohere-ai',
          'Applebot-Extended',
        ],
        allow: ['/', '/aboutus', '/ai-features', '/pricing', '/solutions', '/subscription'],
        disallow: ['/login'],
      },
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/login'],
      },
    ],
    sitemap: 'https://networkup.io/sitemap.xml',
  };
}
