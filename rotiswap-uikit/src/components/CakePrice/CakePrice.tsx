import React from "react";
import styled from "styled-components";
import { PancakeRoundIcon } from "../Svg";
import Text from "../Text/Text";
import Skeleton from "../Skeleton/Skeleton";
import { Colors } from "../../theme";

export interface Props {
  color?: keyof Colors;
  cakePriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  background: linear-gradient(101.12deg,#a96a0f 27.35%,#ffd72f 99.99%,#edd42a 100%,#edd42a 100%);
  border-radius: 10px;
  padding: 7px 15px;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const CakePrice: React.FC<Props> = ({ cakePriceUsd, color = "textSubtle" }) => {
  return cakePriceUsd ? (
    <PriceLink
      href="https://rotiswap.io/swap?outputCurrency=0x501aC27278540E889E3DbD4795fB332a2947d403"
      target="_blank"
    >
      <Text color={color} bold>{`$${cakePriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(CakePrice);
