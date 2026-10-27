import { NextResponse } from 'next/server';

const INDEXNOW_KEY = '4a59f635c91b48b1a8d05e2634e91024';
const HOST = 'networkup.io';
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    let urls: string[] = body.urls;

    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      // Default to the 5 priority URLs
      urls = [
        `https://${HOST}/`,
        `https://${HOST}/pricing`,
        `https://${HOST}/product/outreach`,
        `https://${HOST}/compare/waalaxy`,
        `https://${HOST}/compare/expandi`,
      ];
    }

    const payload = {
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: KEY_LOCATION,
      urlList: urls,
    };

    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    return NextResponse.json({
      success: res.ok,
      status: res.status,
      statusText: res.statusText,
      submittedUrls: urls,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || 'Failed to submit to IndexNow' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: 'IndexNow endpoint configured',
    host: HOST,
    keyLocation: KEY_LOCATION,
    keyFileActive: true,
  });
}
