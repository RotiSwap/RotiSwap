import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'https://docs.rotiswap.io/contact-us',
      },
      {
        label: t('Brand'),
        href: 'https://docs.rotiswap.io/brand',
      },
      {
        label: t('Blog'),
        href: 'https://medium.com/rotiswap',
      },
      {
        label: t('Community'),
        href: 'https://docs.rotiswap.io/contact-us/telegram',
      },
      {
        label: t('ROTI token'),
        href: 'https://docs.rotiswap.io/tokenomics/cake',
      },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: 'https://docs.rotiswap.io/contact-us/customer-support',
      },
      {
        label: t('Troubleshooting'),
        href: 'https://docs.rotiswap.io/help/troubleshooting',
      },
      {
        label: t('Guides'),
        href: 'https://docs.rotiswap.io/get-started',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/rotiswap',
      },
      {
        label: t('Documentation'),
        href: 'https://docs.rotiswap.io',
      },
      {
        label: t('Bug Bounty'),
        href: 'https://app.gitbook.com/@rotiswap-1/s/rotiswap/code/bug-bounty',
      },
      {
        label: t('Audits'),
        href: 'https://docs.rotiswap.io/help/faq#is-rotiswap-safe-has-rotiswap-been-audited',
      },
      {
        label: t('Careers'),
        href: 'https://docs.rotiswap.io/hiring/become-a-chef',
      },
    ],
  },
]
