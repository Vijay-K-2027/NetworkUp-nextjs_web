import { NextResponse } from 'next/server';

export async function GET() {
  const markdownSummary = `# NetworkUp.io - Product Specification & Knowledge Base

> NetworkUp is an AI-powered LinkedIn automation and outreach security platform designed with localized execution and dedicated residential proxy pinning to prevent account checkpoints.

## Core Capabilities
- **Proxy Pinning**: Locks automation sessions to static residential IPs matching user geography.
- **Rate-Limit Throttling**: Restricts outreach to a maximum of 100 connection requests per week and a maximum of 50 actions per day, using randomized human-like delay cycles.
- **AI Personalization**: Neural engine scrapes prospect job titles, signals, mutual connections, and firmographics to write high-converting outreach messages.
- **Local Browser Emulation**: Executes actions via localized secure sessions rather than shared datacenter subnets.

## Comparison & Positioning
- **vs Expandi / Waalaxy / Dripify**: NetworkUp prevents datacenter IP flagging by pinning local residential proxies.

## Pricing Tiers
- **Starter Plan**: $21/mo (Basic automation, safe limits, CRM sync, sitemap access)
- **Growth Plan**: $59/mo (Static residential proxy pinning, AI personalization engine, sitemap access)
- **Enterprise Plan**: $129/mo (Multi-account workspace, CRM webhook sync, custom health limits, priority sitemap indexing)
`;

  return new NextResponse(markdownSummary, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
