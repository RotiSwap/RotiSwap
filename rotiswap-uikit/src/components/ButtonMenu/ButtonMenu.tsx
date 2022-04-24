import React, { cloneElement, Children, ReactElement } from "react";
import styled, { DefaultTheme } from "styled-components";
import { space } from "styled-system";
import { scales, variants } from "../Button/types";
import { ButtonMenuProps } from "./types";

interface StyledButtonMenuProps extends ButtonMenuProps {
  theme: DefaultTheme;
}

const getBackgroundColor = ({ theme, variant }: StyledButtonMenuProps) => {
  if (variant === variants.SUBTLE) {
    return theme.colors.input
  } else if (variant === variants.BUTTON) {
    return 'transparent'
  }

  return theme.colors.text
};

const getBorderColor = ({ theme, variant }: StyledButtonMenuProps) => {
  let color = ''
  if (variant === variants.SUBTLE) {
    return theme.colors.inputSecondary
  } else if (variant === variants.BUTTON) {
    return 'transparent'
  } 

  return theme.colors.disabled
};

const getBorderSize = ({ theme, variant }: StyledButtonMenuProps) => {
  return variant === variants.BUTTON ? "0px" : "1px";
};

const StyledButtonMenu = styled.div<StyledButtonMenuProps>`
  background-color: ${getBackgroundColor};
  border-radius: 10px;
  padding: 2px;
  display: ${({ fullWidth }) => (fullWidth ? "flex" : "inline-flex")};
  border: ${getBorderSize} solid ${getBorderColor};
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};

  & > button,
  & > a {
    flex: ${({ fullWidth }) => (fullWidth ? 1 : "auto")};
  }

  & > button + button,
  & > a + a {
    margin-left: 2px; // To avoid focus shadow overlap
  }

  & > button,
  & a {
    box-shadow: none;
  }

  ${({ disabled, theme, variant }) => {
    if (disabled) {
      return `
        opacity: 0.5;

        & > button:disabled {
          background-color: transparent;
          color: ${variant === variants.PRIMARY ? theme.colors.primary : theme.colors.textSubtle};
        }
    `;
    }
    return "";
  }}
  ${space}
`;

const ButtonMenu: React.FC<ButtonMenuProps> = ({
  activeIndex = 0,
  scale = scales.MD,
  variant = variants.PRIMARY,
  onItemClick,
  disabled,
  children,
  fullWidth = false,
  ...props
}) => {
  return (
    <StyledButtonMenu disabled={disabled} variant={variant} fullWidth={fullWidth} {...props}>
      {Children.map(children, (child: ReactElement, index) => {
        return cloneElement(child, {
          isActive: activeIndex === index,
          onClick: onItemClick ? () => onItemClick(index) : undefined,
          scale,
          variant,
          disabled,
        });
      })}
    </StyledButtonMenu>
  );
};

export default ButtonMenu;
