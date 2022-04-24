import React from 'react'
import styled from 'styled-components'
import PageSection from 'components/PageSection'
import { useWeb3React } from '@web3-react/core'
import useTheme from 'hooks/useTheme'
import Container from 'components/Layout/Container'
import { PageMeta } from 'components/Layout/Page'
import Hero from './components/Hero'
import { searchSectionData, financeSectionData, tokenomicsSectionData, globeSectionData } from './components/SalesSection/data'
// import MetricsSection from './components/MetricsSection'
import SalesSection from './components/SalesSection'
// import WinSection from './components/WinSection'
// import FarmsPoolsRow from './components/FarmsPoolsRow'
import Footer from './components/Footer'
// import CakeDataRow from './components/CakeDataRow'
import { WedgeTopLeft, InnerWedgeWrapper, OuterWedgeWrapper, WedgeTopRight } from './components/WedgeSvgs'
import UserBanner from './components/UserBanner'

const StyledSection = styled(PageSection)`
  padding-top: 16px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 24px;
  }
`

const UserBannerWrapper = styled(Container)`
  z-index: 1;
  position: absolute;
  width: 100%;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  padding-left: 0px;
  padding-right: 0px;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 24px;
    padding-right: 24px;
  }
`

const Home: React.FC = () => {
  const { theme } = useTheme()
  const { account } = useWeb3React()

  const HomeSectionContainerStyles = { margin: '0', width: '100%', maxWidth: '1100px' }

  return (
    <>
      <PageMeta />
      <StyledSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        index={2}
        hasCurvedDivider={false}
      >
        <Hero />
      </StyledSection>
      <StyledSection
        innerProps={{ style: HomeSectionContainerStyles }}
        index={2}
        hasCurvedDivider={false}
      >
        <SalesSection {...searchSectionData} />
      </StyledSection>
      <StyledSection
        innerProps={{ style: HomeSectionContainerStyles }}
        index={2}
        hasCurvedDivider={false}
      >
        <SalesSection {...financeSectionData} />
      </StyledSection>
      <StyledSection
        innerProps={{ style: HomeSectionContainerStyles }}
        index={2}
        hasCurvedDivider={false}
      >
        <SalesSection {...tokenomicsSectionData} />
      </StyledSection>
      <StyledSection
        innerProps={{ style: HomeSectionContainerStyles }}
        index={2}
        hasCurvedDivider={false}
      >
        <SalesSection {...globeSectionData} />
      </StyledSection>
    </>
  )
}

export default Home
