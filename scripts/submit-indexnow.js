/**
 * IndexNow Submission Utility for NetworkUp.io
 * 
 * Usage:
 *   node scripts/submit-indexnow.js
 * 
 * Pings participating search engines (Bing, Yandex, Seznam, Naver) via the IndexNow API
 * with all core URLs from the sitemap.
 */

const https = require('https');

const HOST = 'networkup.io';
const KEY = '4a59f635c91b48b1a8d05e2634e91024';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

// Priority URLs for Phase 1 Immediate Discovery
const URL_LIST = [
  `https://${HOST}/`,
  `https://${HOST}/pricing`,
  `https://${HOST}/product/outreach`,
  `https://${HOST}/compare/waalaxy`,
  `https://${HOST}/compare/expandi`,
  `https://${HOST}/product/features`,
  `https://${HOST}/product/convobox`,
  `https://${HOST}/product/lead`,
  `https://${HOST}/product/campaigns`,
  `https://${HOST}/solutions`,
  `https://${HOST}/solutions/sales-team`,
  `https://${HOST}/solutions/recruiters`,
  `https://${HOST}/solutions/agencies`,
];

const payload = JSON.stringify({
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: URL_LIST,
});

const options = {
  hostname: 'api.indexnow.org',
  port: 443,
  path: '/indexnow',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(payload),
  },
};

console.log(`Submitting ${URL_LIST.length} URLs to IndexNow (api.indexnow.org)...`);

const req = https.request(options, (res) => {
  console.log(`IndexNow Response Status: ${res.statusCode} ${res.statusMessage}`);

  let responseData = '';
  res.on('data', (chunk) => { responseData += chunk; });
  res.on('end', () => {
    if (res.statusCode === 200 || res.statusCode === 202) {
      console.log('✅ URLs successfully submitted to IndexNow for immediate indexing!');
    } else {
      console.log('Response body:', responseData || '(empty)');
      console.log('ℹ️ Note: IndexNow validates the key file on https://networkup.io. Ensure the site is deployed to production before final submission.');
    }
  });
});

req.on('error', (e) => {
  console.error(`IndexNow Request Error: ${e.message}`);
});

req.write(payload);
req.end();
