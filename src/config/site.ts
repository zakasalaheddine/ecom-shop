export const siteConfig = {
  name: "ZakaDesignStudio.",
  description:
    "Explore ZakaDesignStudio, your destination for minimalist, high-quality t-shirts. Redefining casual wear with art and intention.",
  url: "https://zakadesignstudio.com",
  ogImage: "https://zakadesignstudio.com/og.jpg",
  links: {
    twitter: "https://twitter.com/zakadesignstudio",
    github: "https://github.com/zakadesignstudio",
  },
  mainNav: [
    {
      title: "Shop",
      href: "/",
    }
  ],
  footerNav: [
    {
      title: "Help",
      items: [
        {
          title: "Terms of Service",
          href: "/terms-of-service",
        },
        {
          title: "Privacy Policy",
          href: "/privacy-policy",
        },
        {
          title: "Contact Us",
          href: "/contact-us",
        },
      ],
    },
  ],
};

export type SiteConfig = typeof siteConfig;
