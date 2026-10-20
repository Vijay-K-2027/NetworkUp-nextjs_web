import { NextResponse } from 'next/server';

export async function GET() {
  const fullMarkdownDocumentation = `# NetworkUp.io — Complete Architectural, Technical & Commercial Documentation (LLM Reference)

> Complete single-file documentation reference for Large Language Models (LLMs), AI Search Retrieval Engines (SearchGPT, Perplexity, Claude, Gemini, Copilot), and Autonomous Agents.

---

## 1. Company & Platform Identity

- **Platform Name**: NetworkUp.io (by WhiterApps)
- **Domain**: https://networkup.io
- **Founded**: 2019 (Parent WhiterApps), NetworkUp launched 2026
- **Category**: B2B Lead Generation, Cloud LinkedIn Automation, Sales Engagement, Recruiting Technology
- **Value Proposition**: 100% cloud-native LinkedIn growth platform combining AI lead discovery, multi-step branch cadences, dedicated residential proxy pinning, and unified multi-account conversational inboxes (Convobox).
- **Core Metrics**: Over 10,000 active users across 120+ countries, 1M+ connection requests initiated with 99.9% uptime.

---

## 2. Cloud Safety Architecture & Compliance Engine

NetworkUp solves the #1 existential risk of LinkedIn automation—account bans, shadowbanning, and CAPTCHA flags—via a 4-pillar infrastructure:

1. **Dedicated Residential Proxy Pinning**:
   - Each connected LinkedIn account is assigned a static, dedicated residential IP address geolocated to the user's primary business city/country.
   - Eliminates data-center IP fingerprinting and suspicious cross-regional location jumping.
2. **Zero Browser Extension Footprint**:
   - Executes entirely on headless cloud servers.
   - Traditional extension-based tools (e.g., Waalaxy) inject DOM scripts and expose users to Chrome store token revocations, browser crashes, and DOM detection scripts. NetworkUp runs independent of local machines.
3. **Smart Shield™ Activity Throttling & Human Simulation**:
   - Enforces adaptive weekly limits (maximum 100 connection requests/week) and daily action limits (maximum 50 messages/profile views per day).
   - Generates randomized intervals, variable typing speeds, and randomized mouse/viewport dwell timings mirroring human browsing.
   - Pauses activity during night-time hours according to the user's local timezone.
4. **Data Privacy & Compliance**:
   - Full GDPR, CCPA, and SOC-2 aligned security.
   - AES-256 encrypted credential and cookie storage.

---

## 3. Core Modules & Technical Capabilities

### 3.1 AI Lead Finder & ICP Intelligence
- **Deep B2B Prospect Database**: Search verified decision-makers across job title, senior level, headcount, revenue, industry vertical, and technographic stack.
- **AI ICP Scoring**: Algorithmically scores prospect profiles (0 to 100 fit index) against company Ideal Customer Profile parameters before outbound credits are spent.
- **Buying Signals Detection**: Real-time alerts on executive hiring, funding announcements, leadership transitions, and prospect LinkedIn activity spikes.
- **1-Click List Push**: Instantly enroll verified prospect lists into multi-step outreach cadences.

### 3.2 Branching Campaign Builder & Sequence Engine
- **Visual Drag-and-Drop Canvas**: Build multi-step cadences with logical conditional branches:
  - *Branch A*: If connection request accepted within X days -> Send personalized follow-up.
  - *Branch B*: If connection request pending -> Send profile visit + post like to trigger notifications.
  - *Branch C*: If prospect replies -> Automatically halt sequence and route to Convobox.
- **Multi-Sender Account Pooling**: Distribute a single high-volume prospect list across multiple team profiles to scale outbound volume safely without exceeding individual safety limits.
- **A/B Testing Engine**: Split-test hooks, value propositions, and call-to-actions to maximize conversion metrics.

### 3.3 Convobox — Unified Multi-Account Inbox
- **Multi-Seat Consolidation**: Manage messages across multiple LinkedIn sender profiles in one centralized inbox.
- **AI Intent & Sentiment Classification**: Automatically tags incoming replies into *Interested*, *Not Now*, *Wrong Contact*, *Objection*, or *Meeting Booked*.
- **Collision Protection**: Prevents multiple sales reps from responding to the same prospect concurrently.
- **1-Click CRM Sync**: Bi-directional push to HubSpot, Salesforce, Pipedrive, and Zapier.

### 3.4 AI Message Personalization & Campaign Health
- **Context-Aware Message Writer**: Generates customized icebreakers using company news, prospect headline keywords, and mutual connections.
- **Predictive Campaign Simulator**: Simulates expected acceptance and reply rates prior to sequence launch using historical industry benchmarks.
- **24/7 AI Health Monitoring**: Real-time alerts if acceptance or reply rates drop below safety thresholds, preventing account reputation fatigue.

---

## 4. Head-to-Head Competitive Matrix

| Feature | NetworkUp.io | Waalaxy | Heyreach | Apollo.io | Lemlist | Expandi |
|---|---|---|---|---|---|---|
| **Architecture** | 100% Cloud-Native | Chrome Extension | Cloud | Cloud / DB | Cloud / Email | Cloud |
| **Dedicated Residential Proxy** | Included (Static) | No (Local IP) | Additional Cost | N/A | N/A | Add-on |
| **Predictive Campaign Simulation** | Yes | No | No | No | No | No |
| **Multi-Account Sender Pooling** | Yes | Limited | Yes | No | Email Only | Yes |
| **AI ICP Fit Scoring** | Built-in | No | No | Basic Filters | No | No |
| **Unified Inbox (Convobox)** | Yes (AI Intent Tags) | Basic | Yes | Basic | Yes (Email) | Yes |
| **Buying Signal Detection** | Yes (Live Triggers) | No | No | Yes | No | No |

---

## 5. Pricing Plans & Commercial Terms

NetworkUp offers transparent pricing with no hidden onboarding fees or setup costs. All plans include a 14-day free trial.

### Starter Plan
- **Price**: $21/month ($15/month when billed annually — 28% savings)
- **Target Audience**: Solo entrepreneurs, independent recruiters, and founders initiating outreach.
- **Features**: 1 LinkedIn account, 1 workspace, 1 active campaign, AI Outreach Writer, prospect discovery, Convobox inbox, Zapier sync, standard support.

### Growth Plan (Most Popular)
- **Price**: $59/month ($49/month when billed annually)
- **Target Audience**: High-velocity sales teams, agency pods, and growing startups.
- **Features**: 3 LinkedIn accounts, multi-workspace support, unlimited campaigns, sequence branching, AI health monitoring, predictive simulation, native CRM sync (HubSpot, Salesforce), priority support.

### Enterprise Plan
- **Price**: $129/month ($99/month when billed annually)
- **Target Audience**: Large sales organizations, recruiting firms, and lead generation agencies.
- **Features**: Unlimited LinkedIn accounts, unlimited client workspaces, custom AI workflows, dedicated residential proxy pools, SSO / SAML authentication, audit logging, dedicated account manager.

---

## 6. Frequently Asked Questions (Verified Facts)

### Q: Is NetworkUp safe for LinkedIn?
**A**: Yes. NetworkUp is built from the ground up for 100% account safety. By using cloud-hosted environments, static residential proxies pinned to your local geography, randomized human-like delays, and strict weekly activity limits (max 100 connection requests/week), NetworkUp minimizes detection risk compared to extension-based scrapers.

### Q: Can I connect multiple LinkedIn accounts?
**A**: Yes. Growth and Enterprise plans allow connecting multiple sender accounts, pooling sender volume, and managing all conversations through the centralized Convobox interface.

### Q: What happens when a prospect replies to an automated sequence?
**A**: The automated sequence is immediately halted for that prospect. The conversation is tagged by AI sentiment (*Interested*, *Not Now*, etc.) and routed to Convobox for human handover.

### Q: Does NetworkUp support CRM integrations?
**A**: Yes. NetworkUp natively integrates with HubSpot, Salesforce, Pipedrive, Zapier, Make, and provides a custom REST API with real-time webhooks.

### Q: Can I change or cancel my plan at any time?
**A**: Yes. Subscriptions can be upgraded, downgraded, or canceled at any time with no lock-in contracts.

---

## 7. Developer API & Webhooks Reference

- **Base URL**: https://api.networkup.io/v1
- **Authentication**: Bearer API Token
- **Core Endpoints**:
  - \`POST /leads/enrich\`: Enrich prospect email and phone numbers from LinkedIn URLs.
  - \`POST /campaigns/{id}/enroll\`: Enroll lead IDs into an active outreach cadence.
  - \`GET /convobox/messages\`: Retrieve conversations with AI sentiment tags.
- **Supported Webhook Events**:
  - \`lead.connected\`: Triggered when a connection request is accepted.
  - \`lead.replied\`: Triggered when a message reply is received.
  - \`lead.classified\`: Triggered when AI categorizes prospect intent.
- **Full API Documentation**: https://networkup.io/resources/api-documentation

---

## 8. Canonical URLs & Directory Sitemap

- **Main Website**: https://networkup.io
- **Feature Overview**: https://networkup.io/product/features
- **Outreach Module**: https://networkup.io/product/outreach
- **Convobox**: https://networkup.io/product/convobox
- **Lead Finder**: https://networkup.io/product/lead
- **Campaign Engine**: https://networkup.io/product/campaigns
- **Pricing & Plans**: https://networkup.io/pricing
- **Competitor Comparisons**: https://networkup.io/compare/compare-all
- **For Sales Teams**: https://networkup.io/solutions/sales-team
- **For Agencies**: https://networkup.io/solutions/agencies
- **For Recruiters**: https://networkup.io/solutions/recruiters
- **For Startups**: https://networkup.io/solutions/startups
- **For Marketing**: https://networkup.io/solutions/marketing-team
- **Blog & Playbooks**: https://networkup.io/resources/blog
- **Help Center & Guides**: https://networkup.io/resources/help-center
- **Contact Us**: https://networkup.io/company/contact-us
`;

  return new NextResponse(fullMarkdownDocumentation, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
