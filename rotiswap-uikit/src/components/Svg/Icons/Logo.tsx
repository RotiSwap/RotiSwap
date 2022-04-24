import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 60 50" {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 50" width="60" height="50">
        <defs>
          <image  width="60" height="50" id="img1" href="data:image/png;base64,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"/>
        </defs>
        <use  href="#img1" x="0" y="0" />
      </svg>
    </Svg>
  );
};

export default Icon;