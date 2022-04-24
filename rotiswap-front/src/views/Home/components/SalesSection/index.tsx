import React from 'react'
import { Flex, Text, Button, Link } from '@pancakeswap/uikit'
import { Link as RouterLink } from 'react-router-dom'
import { useTranslation } from 'contexts/Localization'
import ColoredWordHeading from '../ColoredWordHeading'

interface SalesSectionButton {
  to: string
  text: string
  external: boolean
}

export interface SalesSectionProps {
  headingText: string
  bodyText: string[]
  reverse: boolean
  primaryButton: SalesSectionButton
  images: string
}

const SalesSection: React.FC<SalesSectionProps> = (props) => {
  const { t } = useTranslation()

  const { headingText, bodyText, reverse, primaryButton, images } = props

  const headingTranslatedText = t(headingText)
  // const bodyTranslatedText = t(bodyText)

  return (
    <Flex flexDirection="column">
      <Flex
        flexDirection={['column-reverse', null, null, reverse ? 'row-reverse' : 'row']}
        alignItems={['flex-end', null, null, 'center']}
        justifyContent="center"
      >
        <Flex
          flexDirection="column"
          flex="1"
          ml={[null, null, null, reverse && '64px']}
          mr={[null, null, null, !reverse && '64px']}
          alignSelf={['flex-start', null, null, 'center']}
        >
          <ColoredWordHeading text={headingTranslatedText} />
          <Text color="textSubtle" mb="24px">
            {bodyText.map((content => {
                const bodyTranslatedText = t(content)
                return (
                    <p>{bodyTranslatedText}</p>
                )
            }))}
            {/* bodyTranslatedText */}
          </Text>
          <Flex>
            <Button mr="16px">
              {primaryButton.external ? (
                <Link external href={primaryButton.to}>
                  <Text color="card" bold fontSize="16px">
                    {t(primaryButton.text)}
                  </Text>
                </Link>
              ) : (
                <RouterLink to={primaryButton.to}>
                  <Text color="card" bold fontSize="16px">
                    {t(primaryButton.text)}
                  </Text>
                </RouterLink>
              )}
            </Button>
          </Flex>
        </Flex>
        <Flex
          height={['100%', null, null, '100%']}
          width={['100%', null, null, '100%']}
          flex={[null, null, null, '1']}
          mb={['24px', null, null, '0']}
        >
          <img src={images} alt={images} />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default SalesSection
