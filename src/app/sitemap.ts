import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://networkup.io';
  const currentDate = new Date();

  const routes: {
    url: string;
    lastModified?: Date;
    changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
    priority?: number;
  }[] = [
    // Core Homepage & Navigation
    { url: `${baseUrl}`, lastModified: currentDate, changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/aboutus`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/ai-features`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/pricing`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/subscription`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },

    // Product Modules
    { url: `${baseUrl}/product/features`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/product/outreach`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/product/convobox`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/product/lead`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/product/campaigns`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },

    // Solutions by Persona & Industry
    { url: `${baseUrl}/solutions`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/solutions/sales-team`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/solutions/agencies`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/solutions/recruiters`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/solutions/startups`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/solutions/marketing-team`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },

    // Competitor Comparisons
    { url: `${baseUrl}/compare/compare-all`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/compare/waalaxy`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/compare/heyreach`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/compare/apollo`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/compare/lemlist`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/compare/dripify`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/compare/expandi`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/compare/reachy`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/compare/sendpilot`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/compare/sales-navigator`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },

    // Resources & Blog
    { url: `${baseUrl}/resources/blog`, lastModified: currentDate, changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/resources/blog/ideal-customer-profile`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/resources/blog/linkedin-connection-message`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/resources/blog/linkedin-outreach`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/resources/blog/ai-personalization`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/resources/blog/outreach-playbook`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.7 },

    // Guides, Help Center & Developer Documentation
    { url: `${baseUrl}/resources/guides`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/resources/api-documentation`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/resources/help-center`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/resources/help-center/getting-started`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/resources/help-center/lead-management`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/resources/help-center/campaigns`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/resources/help-center/api-integrations`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/resources/help-center/account-billing`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/resources/help-center/faqs`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.6 },

    // Company & Legal
    { url: `${baseUrl}/company/contact-us`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/company/privacy-policy`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/company/terms-and-conditions`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.5 },
  ];

  return routes;
}

