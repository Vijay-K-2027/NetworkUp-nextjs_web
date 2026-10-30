import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://networkup.io';

  return {
    rules: [
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'OAI-SearchBot',
          'PerplexityBot',
          'ClaudeBot',
          'Claude-Web',
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
        allow: '/',
        disallow: ['/private/', '/login', '/api/'],
      },
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/login', '/api/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

