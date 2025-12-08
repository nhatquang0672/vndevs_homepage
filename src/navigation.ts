import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    // {
    //   text: 'Services',
    //   href: getPermalink('/services'),
    // },

    // {
    //   text: 'Old Service',
    //   links: [
    //
    //     // {
    //     //   text: 'Startup',
    //     //   href: getPermalink('/homes/startup'),
    //     // },
    //     {
    //       text: 'Software Development',
    //       href: getPermalink('/solutions'),
    //     },
    //     {
    //       text: 'Consulting & Outsourcing',
    //       href: getPermalink('/saas'),
    //     },
    //     {
    //       text: 'UI UX Design & Analysis',
    //       href: getPermalink('/mobile-app'),
    //     },
    //     // {
    //     //   text: 'Personal',
    //     //   href: getPermalink('/homes/personal'),
    //     // },
    //   ]
    // },
    {
      text: 'Products',
      links: [
        {
          text: 'Blogs',
          href: getBlogPermalink(),
        },
        {
          text: 'Game Online',
          href: getPermalink('game-online', 'category'),
        },
        // {
        //   text: 'Source Code',
        //   href: getPermalink('source-code', 'category'),
        // },
      ],
    },
    {
      text: 'Demo',
      links: [
        // {
        //   text: 'Demo Ecommerce',
        //   href: getPermalink('https://ecommerce.vndevs.com'),
        // },
        {
          text: 'Demo GoCart',
          href: getPermalink('https://ecommerce.vndevs.com'),
        },
      ],
    },
    {
      text: 'Pricing',
      href: getPermalink('/pricing'),
      // links: [
      //   {
      //     text: 'Features (Anchor Link)',
      //     href: getPermalink('/#features'),
      //   },
      //   {
      //     text: 'Services',
      //     href: getPermalink('/services'),
      //   },
      //   {
      //     text: 'Pricing',
      //     href: getPermalink('/pricing'),
      //   }
      // ],
    },
    {
      text: 'About Us',
      links: [
        {
          text: 'About',
          href: getPermalink('/about'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
      ],
    },
    // {
    //   text: 'Landing',
    //   links: [
    //     {
    //       text: 'Lead Generation',
    //       href: getPermalink('/landing/lead-generation'),
    //     },
    //     {
    //       text: 'Long-form Sales',
    //       href: getPermalink('/landing/sales'),
    //     },
    //     {
    //       text: 'Click-Through',
    //       href: getPermalink('/landing/click-through'),
    //     },
    //     {
    //       text: 'Product Details (or Services)',
    //       href: getPermalink('/landing/product'),
    //     },
    //     {
    //       text: 'Coming Soon or Pre-Launch',
    //       href: getPermalink('/landing/pre-launch'),
    //     },
    //     {
    //       text: 'Subscription',
    //       href: getPermalink('/landing/subscription'),
    //     },
    //   ],
    // },
    // {
    //   text: 'Blog',
    //   links: [
    //     {
    //       text: 'Blog List',
    //       href: getBlogPermalink(),
    //     },
    //     {
    //       text: 'Article',
    //       href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
    //     },
    //     {
    //       text: 'Article (with MDX)',
    //       href: getPermalink('markdown-elements-demo-post', 'post'),
    //     },
    //     {
    //       text: 'Category Page',
    //       href: getPermalink('tutorials', 'category'),
    //     },
    //     {
    //       text: 'Tag Page',
    //       href: getPermalink('astro', 'tag'),
    //     },
    //   ],
    // },
    // {
    //   text: 'Widgets',
    //   href: '#',
    // },
  ],
  // actions: [{ text: 'Download', href: 'https://github.com/arthelokyo/astrowind', target: '_blank' }],
};

// export const footerData = {
//   links: [
//     {
//       title: 'Product',
//       links: [
//         { text: 'Features', href: '#' },
//         { text: 'Security', href: '#' },
//         { text: 'Team', href: '#' },
//         { text: 'Enterprise', href: '#' },
//         { text: 'Customer stories', href: '#' },
//         { text: 'Pricing', href: '#' },
//         { text: 'Resources', href: '#' },
//       ],
//     },
//     {
//       title: 'Platform',
//       links: [
//         { text: 'Developer API', href: '#' },
//         { text: 'Partners', href: '#' },
//         { text: 'Atom', href: '#' },
//         { text: 'Electron', href: '#' },
//         { text: 'AstroWind Desktop', href: '#' },
//       ],
//     },
//     {
//       title: 'Support',
//       links: [
//         { text: 'Docs', href: '#' },
//         { text: 'Community Forum', href: '#' },
//         { text: 'Professional Services', href: '#' },
//         { text: 'Skills', href: '#' },
//         { text: 'Status', href: '#' },
//       ],
//     },
//     {
//       title: 'Company',
//       links: [
//         { text: 'About', href: '#' },
//         { text: 'Blog', href: '#' },
//         { text: 'Careers', href: '#' },
//         { text: 'Press', href: '#' },
//         { text: 'Inclusion', href: '#' },
//         { text: 'Social Impact', href: '#' },
//         { text: 'Shop', href: '#' },
//       ],
//     },
//   ],
//   secondaryLinks: [
//     { text: 'Terms', href: getPermalink('/terms') },
//     { text: 'Privacy Policy', href: getPermalink('/privacy') },
//   ],
//   socialLinks: [
//     // { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
//     // { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
//     { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/VietNamDevs/' },
//     { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/vndevs/' },
//     { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
//     // { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/arthelokyo/astrowind' },
//   ],
//   footNote: `
//     Made by <a class="text-blue-600 underline dark:text-muted"> VNDEVS</a> · All rights reserved.
//   `,
// };

export const footerData = {
  links: [
    {
      title: 'Products & Services',
      links: [
        { text: 'Software Development', href: '/services' },
        // { text: 'Game Hosting', href: '/games' },
        { text: 'UI/UX Design & Analysis', href: '/services' },
        { text: 'Consulting & Outsourcing', href: '/services' },
        { text: 'Pricing', href: '/pricing' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'Home', href: '/' },
        { text: 'About Us', href: '/about' },
        { text: 'Contact', href: '/contact' },
        { text: 'Blog', href: '/blog' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Documentation', href: '/contact' },
        { text: 'FAQ', href: '/pricing' },
        { text: 'Technical Support', href: '/contact' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: '/terms' },
    { text: 'Privacy Policy', href: '/privacy' },
  ],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/VietNamDevs/' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/vndevs/' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: '/rss.xml' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted">VNDEVS</a> · All rights reserved.
  `,
};
