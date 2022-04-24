import React from "react";
import styled from "styled-components";
import { Box } from "../Box";
import MenuItem from "../MenuItem/MenuItem";
import IconComponent from "../Svg/IconComponent";
import StyledSubMenuItems from "./styles";
import { SubMenuItemsProps } from "./types";

interface StyledMenuProps {
  isActive?: boolean;
}

const StyledBox = styled(Box)<StyledMenuProps>`
  background-color: ${({ theme, isActive }) => isActive ? theme.colors.backgroundAlt3 : theme.colors.backgroundAlt2};
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`

const SubMenuItems: React.FC<SubMenuItemsProps> = ({ items = [], activeItem, isMobileOnly = false, ...props }) => {
  return (
    <StyledSubMenuItems
      justifyContent={[isMobileOnly ? "flex-end" : "start", null, "center"]}
      {...props}
      pl={["12px", null, "0px"]}
      $isMobileOnly={isMobileOnly}
    >
      {items.map(
        ({ label, href, iconName }) =>
          label && (
            <StyledBox key={label} pr="20px" pl="20px" isActive={href === activeItem}>
              <MenuItem href={href}>
                {iconName && (
                  <IconComponent
                    iconName={iconName}
                    mr="4px"
                  />
                )}
                {label}
              </MenuItem>
            </StyledBox>
          )
      )}
    </StyledSubMenuItems>
  );
};

export default SubMenuItems;
