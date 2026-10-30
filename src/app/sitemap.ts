import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://networkup.io';

  const routes: {
    url: string;
    lastModified?: Date;
    changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
    priority?: number;
  }[] = [
    // Core Homepage & Navigation
    { url: `${baseUrl}`, changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/aboutus`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/ai-features`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/pricing`, changeFrequency: 'weekly', priority: 0.9 },

    // Product Modules
    { url: `${baseUrl}/product/features`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/product/outreach`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/product/convobox`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/product/lead`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/product/campaigns`, changeFrequency: 'weekly', priority: 0.9 },

    // Solutions by Persona & Industry
    { url: `${baseUrl}/solutions`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/solutions/sales-team`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/solutions/agencies`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/solutions/recruiters`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/solutions/startups`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/solutions/marketing-team`, changeFrequency: 'weekly', priority: 0.8 },

    // Competitor Comparisons
    { url: `${baseUrl}/compare/compare-all`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/compare/waalaxy`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/compare/heyreach`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/compare/apollo`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/compare/lemlist`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/compare/dripify`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/compare/expandi`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/compare/reachy`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/compare/sendpilot`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/compare/sales-navigator`, changeFrequency: 'monthly', priority: 0.8 },

    // Resources & Blog
    { url: `${baseUrl}/resources/blog`, changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/resources/blog/ideal-customer-profile`, lastModified: new Date('2026-09-05T08:30:00Z'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/resources/blog/linkedin-connection-message`, lastModified: new Date('2026-09-10T10:00:00Z'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/resources/blog/linkedin-outreach`, lastModified: new Date('2026-09-15T09:00:00Z'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/resources/blog/ai-personalization`, lastModified: new Date('2026-08-28T11:00:00Z'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/resources/blog/outreach-playbook`, lastModified: new Date('2026-08-20T09:15:00Z'), changeFrequency: 'monthly', priority: 0.7 },

    // Guides, Help Center & Developer Documentation
    { url: `${baseUrl}/resources/guides`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/resources/api-documentation`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/resources/help-center`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/resources/help-center/getting-started`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/resources/help-center/lead-management`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/resources/help-center/campaigns`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/resources/help-center/api-integrations`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/resources/help-center/account-billing`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/resources/help-center/faqs`, changeFrequency: 'monthly', priority: 0.6 },

    // Company & Legal
    { url: `${baseUrl}/company/contact-us`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/company/privacy-policy`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/company/terms-and-conditions`, changeFrequency: 'monthly', priority: 0.5 },
  ];

  return routes;
}

