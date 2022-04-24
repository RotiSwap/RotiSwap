import React from "react";
import { baseColors, darkColors, lightColors } from "../../theme/colors";
import { Flex, Box } from "../Box";
import { Text } from "../Text";
import { Link } from "../Link";
import {
  StyledFooter,
  StyledIconMobileContainer,
  StyledList,
  StyledListItem,
  StyledText,
  StyledSocialLinks,
  StyledToolsContainer,
  SyltedLinkArea,
} from "./styles";
import { FooterProps } from "./types";
import { ThemeSwitcher } from "../ThemeSwitcher";
import LangSelector from "../LangSelector/LangSelector";
import CakePrice from "../CakePrice/CakePrice";
import { LogoWithTextIcon, ArrowForwardIcon } from "../Svg";
import { Button } from "../Button";
import { Colors } from "../..";

const MenuItem: React.FC<FooterProps> = ({
  items,
  isDark,
  toggleTheme,
  currentLang,
  langs,
  setLang,
  cakePriceUsd,
  buyCakeLabel,
  ...props
}) => {
  return (
    <StyledFooter p={["40px 16px", null, "56px 40px 32px 40px"]} {...props} justifyContent="center">
      <Flex flexDirection="column" width={["100%", null, "1200px"]}>
        <StyledIconMobileContainer display={["block", null, "none"]}>
          <LogoWithTextIcon isDark width="130px" />
        </StyledIconMobileContainer>
        <SyltedLinkArea
          order={[2, null, 1]}
          flexDirection={["column", null, "row"]}
          justifyContent="space-around"
          alignItems="flex-start"
          mb={["42px", null, "36px"]}
        >        
          <Box display={["none", null, "block"]}>
            <Flex>
              <Text color="#fefad7" fontSize="32px" bold>
                Roti
              </Text>
              <Text color="primary" fontSize="32px" bold>
                Swap
              </Text>
            </Flex>
          </Box>
          {items?.map((item) => (
            <StyledList key={item.label}>
              <StyledListItem>{item.label}</StyledListItem>
              {item.items?.map(({ label, href, isHighlighted = false }) => (
                <StyledListItem key={label}>
                  {href ? (
                    <Link
                      href={href}
                      target="_blank"
                      rel="noreferrer noopener"
                      color={isHighlighted ? baseColors.warning : darkColors.text}
                      bold={false}
                      fontSize="14px"
                    >
                      {label}
                    </Link>
                  ) : (
                    <StyledText>{label}</StyledText>
                  )}
                </StyledListItem>
              ))}
            </StyledList>
          ))}
        </SyltedLinkArea>
        
        <StyledToolsContainer
          order={[1, null, 3]}
          flexDirection={["column", null, "row"]}
          justifyContent="space-between"
        >
          <Text>RotiSwap 2022. All Rights Reserved</Text>
          <StyledSocialLinks order={[2]} pb={["42px", null, "32px"]} mb={["0", null, "32px"]} />
        </StyledToolsContainer>
      </Flex>
    </StyledFooter>
  );
};

export default MenuItem;
