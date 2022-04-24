import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "Quick Links",
    items: [
      {
        label: "Trade",
        href: "https://docs.rotiswap.io/contact-us",
      },
      {
        label: "Earn",
        href: "https://rotiswap.medium.com/",
      },
      {
        label: "BodyHAM Token",
        href: "https://docs.rotiswap.io/contact-us/telegram",
      },
    ],
  },
  {
    label: "Support",
    items: [
      {
        label: "Contact Us",
        href: "https://docs.rotiswap.io/contact-us/customer-support",
      },
      {
        label: "Developers",
        href: "https://docs.rotiswap.io/help/troubleshooting",
      },
      {
        label: "Privacy policy",
        href: "https://docs.rotiswap.io/get-started",
      },
    ],
  },
];

export const socials = [
  {
    label: "Instagram",
    icon: "Instagram",
    href: "https://instagram.com/rotiswap_official",
  },
  {
    label: "Twitter",
    icon: "Twitter",
    href: "https://twitter.com/rotiswap",
  },
  {
    label: "Telegram",
    icon: "Telegram",
    items: [
      {
        label: "English",
        href: "https://t.me/rotiswap",
      },
      {
        label: "Bahasa Indonesia",
        href: "https://t.me/rotiswapIndonesia",
      },
      {
        label: "中文",
        href: "https://t.me/rotiswap_CN",
      },
      {
        label: "Tiếng Việt",
        href: "https://t.me/rotiswapVN",
      },
      {
        label: "Italiano",
        href: "https://t.me/rotiswap_ita",
      },
      {
        label: "русский",
        href: "https://t.me/rotiswap_ru",
      },
      {
        label: "Türkiye",
        href: "https://t.me/rotiswapturkiye",
      },
      {
        label: "Português",
        href: "https://t.me/rotiswapPortuguese",
      },
      {
        label: "Español",
        href: "https://t.me/rotiswapEs",
      },
      {
        label: "日本語",
        href: "https://t.me/rotiswapjp",
      },
      {
        label: "Français",
        href: "https://t.me/rotiswapfr",
      },
      {
        label: "Announcements",
        href: "https://t.me/rotiswapAnn",
      },
      {
        label: "Whale Alert",
        href: "https://t.me/rotiswapWhales",
      },
    ],
  },
  {
    label: "Reddit",
    icon: "Reddit",
    href: "https://reddit.com/r/rotiswap",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
