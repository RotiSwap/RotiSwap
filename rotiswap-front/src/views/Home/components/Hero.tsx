import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import { Flex, Heading, Button, Text } from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import ConnectWalletButton from 'components/ConnectWalletButton'
import useTheme from 'hooks/useTheme'
import { SlideSvgDark, SlideSvgLight } from './SlideSvg'
import CompositeImage, { getSrcSet, CompositeImageProps } from './CompositeImage'

const flyingAnim = () => keyframes`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(-5px, -5px);
  }
  to {
    transform: translate(0, 0px);
  }  
`

const fading = () => keyframes`
  from {
    opacity: 0.9;
  }
  50% {
    opacity: 0.1;
  }
  to {
    opacity: 0.9;
  }  
`

const BgWrapper = styled.div`
  z-index: -1;
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0px;
  left: 0px;
`

const InnerWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: -3px;
`

const BunnyWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin: auto;

  ${({ theme }) => theme.mediaQueries.xs} {
    width: 80%;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    width: 100%;
  }
`

const Background = styled.div`
  width: 100%;
  position: absolute;
  height: 80%;
  background: linear-gradient(101.12deg, #FFA500 27.35%, #CCA500 100%);
  border-radius: 25px;

  ${({ theme }) => theme.mediaQueries.xs} {
    border-radius: 10px;
    height: 110%;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    border-radius: 25px;
    height: 80%;
  }
`

const TitleWrapper = styled(Flex)`
  z-index: 1;
  margin-left: 40px;
  ${({ theme }) => theme.mediaQueries.xs} {
    text-align: center;
    margin-left: 0px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    text-align: left;
    margin-left: 40px;
  }
`

const ButtonWrapper = styled(Flex)`
  z-index: 1;
  margin-left: 40px;
  ${({ theme }) => theme.mediaQueries.xs} {
    margin: auto;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    margin-left: 40px;
  }
`

const HeroText = styled(Text)`
  font-size: 50px;

  ${({ theme }) => theme.mediaQueries.xs} {
    font-size: 30px;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 40px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    font-size: 50px;
  }
`

const Wrapper = styled(Flex)`
  align-self: center;
`

const StarsWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  & :nth-child(2) {
    animation: ${fading} 2s ease-in-out infinite;
    animation-delay: 1s;
  }

  & :nth-child(3) {
    animation: ${fading} 5s ease-in-out infinite;
    animation-delay: 0.66s;
  }

  & :nth-child(4) {
    animation: ${fading} 2.5s ease-in-out infinite;
    animation-delay: 0.33s;
  }
`

const imagePath = '/images/home/lunar-bunny/'
const imageSrc = 'bunny'

const starsImage: CompositeImageProps = {
  path: '/images/home/lunar-bunny/',
  attributes: [
    { src: 'star-l', alt: '3D Star' },
    { src: 'star-r', alt: '3D Star' },
    { src: 'star-top-r', alt: '3D Star' },
  ],
}

const Hero = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const { theme } = useTheme()

  return (
    <>
      <Flex
        position="relative"
        flexDirection={['column-reverse', null, null, 'row']}
        alignItems={['flex-end', null, null, 'center']}
        justifyContent="center"
        mt={[account ? '280px' : '50px', null, 0]}
        id="homepage-hero"
      >
        <Background />
        <Wrapper flexDirection="column">
          <TitleWrapper flex="1" flexDirection="column">
            <HeroText color="textSubtle" fontSize="50px" bold>
              {t('The Biggest DEX Protocol')}
            </HeroText>
            <HeroText color="textSubtle" mb="24px" fontSize="50px" bold>
              {t(' On The Eco Smart Chain.')}
            </HeroText>
          </TitleWrapper>
          <ButtonWrapper>
            <Button variant='subtle' as={Link} to="/farms">{t('Earn')}</Button>
          </ButtonWrapper>
        </Wrapper>
        <Flex
          height={['100%', null, null, '100%']}
          width={['100%', null, null, '100%']}
          flex={[null, null, null, '1']}
          mb={['24px', null, null, '0']}
          position="relative"
        >
          <BunnyWrapper>
            <img src="images/home/welcome.svg" alt={t('welcome')} />
          </BunnyWrapper>
        </Flex>
      </Flex>
    </>
  )
}

export default Hero
