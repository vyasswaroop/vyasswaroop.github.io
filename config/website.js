const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Vyas Swaroop - DevOps', // Navigation and Site Title
  siteTitleAlt: 'Vyas', // Alternative Site title for SEO
  siteUrl: 'https://vyasswaroop.github.io/', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
};
