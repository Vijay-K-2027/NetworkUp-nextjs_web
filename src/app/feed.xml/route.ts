import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://networkup.io';
  const buildDate = new Date().toUTCString();

  const posts = [
    {
      title: 'How AI is Changing LinkedIn Outreach in 2027',
      slug: 'linkedin-outreach',
      description:
        'Explore how AI is transforming prospecting, personalization and outreach, and what it means for modern sales teams.',
      pubDate: new Date('2026-09-15T09:00:00Z').toUTCString(),
      author: 'Ananya Sharma',
      category: 'AI & Automation',
    },
    {
      title: '15 LinkedIn Connection Message Templates That Actually Work',
      slug: 'linkedin-connection-message',
      description: 'Copy, personalize and start more conversations that convert.',
      pubDate: new Date('2026-09-10T10:00:00Z').toUTCString(),
      author: 'Rohit Verma',
      category: 'LinkedIn Outreach',
    },
    {
      title: 'How to Build an Ideal Customer Profile (ICP) That Converts',
      slug: 'ideal-customer-profile',
      description: 'A practical framework to define and target the right prospects.',
      pubDate: new Date('2026-09-05T08:30:00Z').toUTCString(),
      author: 'Rashi Gupta',
      category: 'Lead Generation',
    },
    {
      title: 'How AI Personalization Can 3x Your Reply Rates',
      slug: 'ai-personalization',
      description: 'Use AI to write personalized messages that feel human and drive replies.',
      pubDate: new Date('2026-08-28T11:00:00Z').toUTCString(),
      author: 'Vanshi Singh',
      category: 'AI & Automation',
    },
    {
      title: 'The SaaS LinkedIn Outreach Playbook',
      slug: 'outreach-playbook',
      description: 'A step-by-step playbook to build, launch and scale winning campaigns.',
      pubDate: new Date('2026-08-20T09:15:00Z').toUTCString(),
      author: 'Aarav Tiwari',
      category: 'Campaigns & Playbooks',
    },
  ];

  const rssItemsXml = posts
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${baseUrl}/resources/blog/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/resources/blog/${post.slug}</guid>
      <description><![CDATA[${post.description}]]></description>
      <pubDate>${post.pubDate}</pubDate>
      <author><![CDATA[${post.author}]]></author>
      <category><![CDATA[${post.category}]]></category>
    </item>`
    )
    .join('');

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>NetworkUp.io Blog - LinkedIn Outreach &amp; B2B Growth Insights</title>
    <link>${baseUrl}/resources/blog</link>
    <description>Actionable strategies, AI outreach frameworks, and playbooks to accelerate your LinkedIn sales pipeline.</description>
    <language>en-US</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${rssItemsXml}
  </channel>
</rss>`;

  return new NextResponse(rssFeed, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
