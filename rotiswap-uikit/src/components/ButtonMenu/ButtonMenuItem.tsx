import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { BaseButtonProps, PolymorphicComponent, variants } from "../Button/types";
import { ButtonMenuItemProps } from "./types";

interface InactiveButtonProps extends BaseButtonProps {
  forwardedAs: BaseButtonProps["as"];
}

const InactiveButton: PolymorphicComponent<InactiveButtonProps, "button"> = styled(Button)<InactiveButtonProps>`
  background-color: transparent;
  color: ${({ theme, variant }) => (variant === variants.PRIMARY ? theme.colors.primary : theme.colors.textSubtle)};
  &:hover:not(:disabled):not(:active) {
    background-color: transparent;
  }
`;

const ButtonMenuItem: PolymorphicComponent<ButtonMenuItemProps, "button"> = ({
  isActive = false,
  variant = variants.PRIMARY,
  as,
  ...props
}: ButtonMenuItemProps) => {
  if (!isActive) {
    if (variant == variants.BUTTON) {
      return <InactiveButton forwardedAs={as} variant="white" {...props} mr="10px"/>;
    }
    return <InactiveButton forwardedAs={as} variant={variant} {...props} />;
  }

  if (variant == variants.BUTTON) {
    return <Button as={as} variant="primary" {...props} mr="10px" isGradient/>;
  }

  return <Button as={as} variant={variant} {...props} />;
};

export default ButtonMenuItem;
