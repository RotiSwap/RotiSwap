import React, { useState } from "react";
import Select from "./Select";
import SelectWithIcon from "./SelectWithIcon";

export default {
  title: "Components/Select",
  component: Select,
  argTypes: {},
};

export const Default: React.FC = () => {
  return (    
    <Select
      options={[
        {
          label: 'Hot',
          value: 'hot',
        },
        {
          label: 'APR',
          value: 'apr',
        },
        {
          label: 'Multiplier',
          value: 'multiplier',
        },
        {
          label: 'Earned',
          value: 'earned',
        },
        {
          label: 'Liquidity',
          value: 'liquidity',
        },
      ]}
      onOptionChange={() => {}}
    />
  );
};

export const IconSelect: React.FC = (args) => {
  return (
    <SelectWithIcon
      options={[
        {
          icon: 'BinanceIcon',
          label: 'BSC',
          value: 'bsc',
        },
        {
          icon: 'BinanceIcon',
          label: 'Polygon',
          value: 'polygon',
        },
        {
          icon: 'BinanceIcon',
          label: 'Ethereum',
          value: 'ethereum',
        },
      ]}
      onOptionChange={() => {}}
    />
  );
};