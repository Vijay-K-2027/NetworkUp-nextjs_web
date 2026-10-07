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
          'anthropic-ai',
          'Google-Extended',
          'GoogleOther',
          'Amazonbot',
          'cohere-ai',
          'Applebot-Extended',
          'CCBot',
          'Bytespider',
          'Meta-ExternalAgent',
          'FacebookBot',
          'Diffbot',
        ],
        allow: ['/', '/llms.txt'],
        disallow: ['/login', '/api/'],
      },
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/login', '/api/'],
      },
    ],
    sitemap: 'https://networkup.io/sitemap.xml',
    host: 'https://networkup.io',
  };
}

