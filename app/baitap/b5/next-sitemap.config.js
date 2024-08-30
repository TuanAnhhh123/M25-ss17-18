module.exports = {
    siteUrl: process.env.SITE_URL || 'http://localhost:3000',
    generateRobotsTxt: true, // (optional) Generate a `robots.txt` file
    // optional
    robotsTxtOptions: {
      policies: [{ userAgent: '*', allow: '/' }],
    },
  };
  