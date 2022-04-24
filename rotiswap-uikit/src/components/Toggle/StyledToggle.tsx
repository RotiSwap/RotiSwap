import styled from "styled-components";
import { ToggleProps, HandleProps, InputProps, ScaleKeys, scales, StyleToggleProps } from "./types";

const scaleKeyValues = {
  sm: {
    handleHeight: "16px",
    handleWidth: "20px",
    handleLeft: "2px",
    handleTop: "2px",
    checkedLeft: "calc(100% - 22px)",
    toggleHeight: "20px",
    toggleWidth: "40px",
    borderRadius: "10px",
  },
  md: {
    handleHeight: "20px",
    handleWidth: "30px",
    handleLeft: "3px",
    handleTop: "3px",
    checkedLeft: "calc(100% - 33px)",
    toggleHeight: "26px",
    toggleWidth: "60px",
    borderRadius: "15px",
  },
  lg: {
    handleHeight: "24px",
    handleWidth: "38px",
    handleLeft: "4px",
    handleTop: "2px", 
    checkedLeft: "calc(100% - 42px)",
    toggleHeight: "28px",
    toggleWidth: "80px",
    borderRadius: "14px",
  },
};

const getScale =
  (property: ScaleKeys) =>
  ({ scale = scales.LG }: ToggleProps) => {
    return scaleKeyValues[scale][property];
  };

export const Handle = styled.div<HandleProps>`
  background-color: ${({ theme, text }) => text ? theme.colors.primary : theme.toggle.handleBackground};
  color: ${({ theme, text }) => text ? theme.colors.toggleBackground : theme.toggle.handleBackground};
  border-radius: ${getScale("borderRadius")};
  cursor: pointer;
  height: ${getScale("handleHeight")};
  left: ${getScale("handleLeft")};
  position: absolute;
  top: ${getScale("handleTop")};
  transition: left 200ms ease-in;
  width: ${getScale("handleWidth")};
  z-index: 1;
  font-size: 12px;
`;

export const Input = styled.input<InputProps>`
  cursor: pointer;
  opacity: 0;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 3;

  &:checked + ${Handle} {
    left: ${getScale("checkedLeft")};
  }
  font-size: 12px;
`;

const StyledToggle = styled.div<StyleToggleProps>`
  align-items: center;
  background-color: ${({ theme, $checked, $checkedColor, $defaultColor }) => theme.colors[$checked ? $checkedColor : $defaultColor]};
  border-radius: 24px;
  box-shadow: ${({ theme }) => theme.shadows.inset};
  cursor: pointer;
  display: inline-flex;
  height: ${getScale("toggleHeight")};
  position: relative;
  transition: background-color 200ms;
  width: ${getScale("toggleWidth")};
  font-size: 12px;
`;

export default StyledToggle;
