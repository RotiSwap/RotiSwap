import React from "react";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import MoreHorizontal from "../../components/Svg/Icons/MoreHorizontal";
import { ButtonProps } from "../../components/Button";
import { connectorLocalStorageKey, walletLocalStorageKey } from "./config";
import { Login, Config, ConnectorNames } from "./types";

interface Props {
  walletConfig: Config;
  login: Login;
  onDismiss: () => void;
}

const WalletButton = styled(Button).attrs({ width: "100%", variant: "text", py: "16px" })`
  background-color: ${({ theme }) => theme.colors.backgroundAlt3};
  align-items: center;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
  width: 100%;
  max-width: 160px;
`;

const StyleMoreButton = styled(Button)`
  margin-top: 10px;
  width: 100%;
  background: none;
  border: none;
  box-shadow: none;
  text-decoration: underline;
`

interface MoreWalletCardProps extends ButtonProps {
  t: (key: string) => string;
}

export const MoreWalletCard: React.FC<MoreWalletCardProps> = ({ t, ...props }) => {
  return (
    <StyleMoreButton>
      <Text fontSize="14px">{t("Load More...")}</Text>
    </StyleMoreButton>
  );
};

const WalletCard: React.FC<Props> = ({ login, walletConfig, onDismiss }) => {
  const { title, icon: Icon } = walletConfig;

  return (
    <WalletButton
      variant="tertiary"
      onClick={() => {
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

        // Since iOS does not support Trust Wallet we fall back to WalletConnect
        if (walletConfig.title === "Trust Wallet" && isIOS) {
          login(ConnectorNames.WalletConnect);
        } else {
          login(walletConfig.connectorId);
        }

        localStorage.setItem(walletLocalStorageKey, walletConfig.title);
        localStorage.setItem(connectorLocalStorageKey, walletConfig.connectorId);
        onDismiss();
      }}
      id={`wallet-connect-${title.toLocaleLowerCase()}`}
    >
      <Icon width="40px" mb="8px" />
      <Text fontSize="14px">{title}</Text>
    </WalletButton>
  );
};

export default WalletCard;
