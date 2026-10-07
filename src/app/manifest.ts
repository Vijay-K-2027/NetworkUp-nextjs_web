import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'NetworkUp.io - AI-Powered LinkedIn Growth & Outreach Automation',
    short_name: 'NetworkUp',
    description: 'Automate your LinkedIn outreach and grow your professional network with precision. Find high-intent leads, optimize campaigns with AI, and manage conversations in a unified inbox.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#71EB34',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/brand/Logo.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
