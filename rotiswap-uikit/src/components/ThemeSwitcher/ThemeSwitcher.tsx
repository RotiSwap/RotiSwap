import React from "react";
import IconComponent from "../Svg/IconComponent";
import { Toggle } from "../Toggle";

export interface Props {
  isDark: boolean;
  toggleTheme: (isDark: boolean) => void;
}

const ThemeSwitcher: React.FC<Props> = ({ isDark, toggleTheme }) => (
  <Toggle
    checked={isDark}
    onChange={() => toggleTheme(!isDark)}
    scale="lg"
    startIcon={(isActive = false) => <div>Night</div>}
    endIcon={(isActive = false) => <div>Day</div>}
    text
  />
);

export default React.memo(ThemeSwitcher, (prev, next) => prev.isDark === next.isDark);
