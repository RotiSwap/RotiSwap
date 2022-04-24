import React from "react";
import styled from "styled-components"
import { Flex, Box, FlexProps } from "../Box";
import { SwapVertIcon } from "../Svg";
import Text from "../Text/Text";
import { StyledBalanceInput, StyledInput, UnitContainer, SwitchUnitsButton } from "./styles";
import { BalanceInputProps } from "./types";

const StyledInputArea = styled(Flex)`
  padding-right: 10px;
`

const BalanceInput: React.FC<BalanceInputProps> = ({
  value,
  placeholder = "0.0",
  onUserInput,
  currencyValue,
  inputProps,
  innerRef,
  isWarning = false,
  decimals = 18,
  unit,
  switchEditingUnits,
  ...props
}) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.validity.valid) {
      onUserInput(e.currentTarget.value.replace(/,/g, "."));
    }
  };

  return (
    <StyledBalanceInput isWarning={isWarning} {...props}>
      <Flex justifyContent="flex-end">
        <Box>
          <StyledInputArea alignItems="center">
            <StyledInput
              pattern={`^[0-9]*[.,]?[0-9]{0,${decimals}}$`}
              inputMode="decimal"
              min="0"
              value={value}
              onChange={handleOnChange}
              placeholder={placeholder}
              ref={innerRef}
              {...inputProps}
            />
            {unit && <UnitContainer>{unit}</UnitContainer>}
          </StyledInputArea>
          {currencyValue && (
            <Text fontSize="12px" textAlign="right" color="textSubtle" mt="10px" pb="10px" pr="10px">
              {currencyValue}
            </Text>
          )}
        </Box>
        {switchEditingUnits && (
          <Flex alignItems="center" pl="12px">
            <SwitchUnitsButton scale="sm" variant="text" onClick={switchEditingUnits}>
              <SwapVertIcon color="textSubtle" />
            </SwitchUnitsButton>
          </Flex>
        )}
      </Flex>
    </StyledBalanceInput>
  );
};

export default BalanceInput;
