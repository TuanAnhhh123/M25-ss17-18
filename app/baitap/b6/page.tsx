// app/robots.txt.ts

export const metadata = {
    robots: {
      userAgent: '*',
      allow: '/',
      disallow: '/secret',
      sitemap: 'http://localhost:3000/sitemap.xml',
    },
  };
  
  export default function Robots() {
    return '';
  }
  