import { SalesSectionProps } from '.'

export const searchSectionData: SalesSectionProps = {
  headingText: 'Intro to RotiSwap',
  bodyText: [`RotiSwap is an automated market-making (AMM) decentralized exchange (DEX) for the Eco smart chain.`,
             `The main difference between RotiSwap and other Dex’s is that the team behind it is invested in building a strong foundation with the ROTI token as a governance token, diverse farms, a built in bridge, built in limit orders and user-centered service.`],
  reverse: true,
  primaryButton: {
    to: '/swap',
    text: 'Trade',
    external: false,
  },
  images: '/images/home/welcome.svg'
}

export const financeSectionData: SalesSectionProps = {
  headingText: 'Intro to $ROTI',
  bodyText: [`$ROTI is the delicious token that powers the RotiSwap ecosystem.`,
             `You can earn $ROTI from farms and pools, or directly buy it on the exchange and explore its use cases:`,
             `Use it in Yield Farms to earn more $ROTI`,
             `Buy Lottery tickets in the RotiSwap Lottery`,
             `Participate in IFO Token Sales`,
             `Vote on proposals relating to the RotiSwap ecosystem`,
             `But that's not all -- there's much more on the horizon for $ROTI!`],
  reverse: false,
  primaryButton: {
    to: '/liquidity',
    text: 'Liquidity',
    external: false,
  },
  images: '/images/home/roti.svg'
}

export const tokenomicsSectionData: SalesSectionProps = {
  headingText: 'Tokenomics',
  bodyText: [`What we are trying to do is create a perpetual deflation token, the $ROTI, that allows a constant price pump with a sufficient burn mechanism.`,
             `We are trying to build the most powerful swap & exchange,  to add value into the system and create a suitable and sustainable environment for people to yield farm with high ROI.`,
             `- Token name: Roti Token`,
             `- Toekn Symbol: ROTI`,
             `- Contract address: 0xF952Fc3ca7325Cc27D15885d37117676d25BfdA6`,
             `- Chain: Eco Smart Chain (ECO-20)`,
             `- Supply: Unlimited`,
             `- Emission rate: 1 ROTI/block`],
  reverse: true,
  primaryButton: {
    to: '/farms',
    text: 'Farms',
    external: false,
  },
  images: '/images/home/tokenomics.svg'
}

export const globeSectionData: SalesSectionProps = {
  headingText: '$ROTI Moonmap',
  bodyText: [`Phase 1`,
             `- Roti Token Contract Creation`,
             `- Roti Token Website Creation & Branding`,
             `- Roti Token ads & TG marketing`,
             `- Roti Token Stealth Launch`,
             `- Yahoo Finance, Benzinga & Tech Bullion article submission`,
             `- 1K Holders at launch`,
             `- Twitter Influencer promos`,
             `- 3k Holders`,
             `- List on CG`,
             `- List on CMC`,
             `Parse 2`,
             `- 10K Holders`,
             `- List on Major exchange`,
             `- Billboard & mainstream promotion tactics`,
             `- Aggressive marketing on TG & Twitter`,
             `- Celebrities & Influencer Shoutouts`,
             `- Weekly AMA’S on appropriate platforms`,
             `Parse 3`,
             `- List on more Major exchanges, starting with gate.io`,
             `- Expand brand awareness and develop use case product`,
             `- Develop NFT Collection`,
             `Parse 4`,
             `- Roti Token will adapt accordingly to market incentives and community requirements to further fuel and develop the project in order to go mainstream`],
  reverse: false,
  primaryButton: {
    to: '/pools',
    text: 'Pools',
    external: false,
  },
  images: '/images/home/roadmap.svg'
}

export const swapSectionData: SalesSectionProps = {
  headingText: 'Intro to RotiSwap',
  bodyText: [`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`],
  reverse: true,
  primaryButton: {
    to: '',
    text: 'Read Now',
    external: false,
  },
  images: '/images/home/search.png'
}

export const earnSectionData: SalesSectionProps = {
  headingText: 'Earn passive income with crypto.',
  bodyText: ['RotiSwap makes it easy to make your crypto work for you.'],
  reverse: true,
  primaryButton: {
    to: '/farms',
    text: 'Explore',
    external: false,
  },
  images: '/images/home/earn/'
}

export const cakeSectionData: SalesSectionProps = {
  headingText: 'ROTI makes our world go round.',
  bodyText:
    ['ROTI token is at the heart of the RotiSwap ecosystem. Buy it, win it, farm it, spend it, stake it... heck, you can even vote with it!'],
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0x9b79410C6657713AE2A459bAEFB3b3909154bADd',
    text: 'Buy ROTI',
    external: false,
  },
  images: '/images/home/cake/'
}
