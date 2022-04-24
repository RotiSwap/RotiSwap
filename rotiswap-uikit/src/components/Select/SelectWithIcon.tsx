import React, { useState, useRef, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { Flex } from '../Box'
import { Text } from '../Text'
import { Box } from '../Box'
import { SelectWithIconProps, OptionWithIconProps } from "./types";
import * as IconModule from "../Svg";
import { SvgProps } from "../Svg/types";

const DropDownHeader = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0px 16px;
  box-shadow: ${({ theme }) => theme.shadows.inset};
  border: 1px solid ${({ theme }) => theme.colors.inputSecondary};
  border-radius: 10px;
  transition: border-radius 0.15s;

  svg {
    position: relative !important;
    right: unset !important;
    top: unset !important;
    transform: unset !important;
    border-radius: 6px !important;
  }
`

const DropDownListContainer = styled.div`
  min-width: 136px;
  height: 0;
  position: absolute;
  overflow: hidden;
  z-index: ${({ theme }) => theme.zIndices.dropdown};
  transition: transform 0.15s, opacity 0.15s;
  transform: scaleY(0);
  transform-origin: top;
  opacity: 0;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.sm} {
    min-width: 168px;
  }
`

const DropDownContainer = styled(Box)<{ isOpen: boolean }>`
  cursor: pointer;
  width: 100%;
  position: relative;
  background: ${({ theme, isOpen }) => (isOpen ? theme.colors.input : theme.colors.backgroundAlt)};
  border-radius: 16px;
  border-bottom-left-radius: ${({ isOpen }) => (isOpen ? "0px" : "16px")};
  border-bottom-right-radius: ${({ isOpen }) => (isOpen ? "0px" : "16px")};
  height: 40px;
  min-width: 136px;
  user-select: none;
  z-index: 20;

  ${({ theme }) => theme.mediaQueries.sm} {
    min-width: 168px;
  }

  ${(props) =>
    props.isOpen &&
    css`
      ${DropDownHeader} {
        border-bottom: none;
        border-radius: 16px 16px 0 0;

        svg {
          position: relative; 
          right: unset; 
          top: unset; 
          transform: unset;
          border-radius: 6px;
        }
      }

      ${DropDownListContainer} {
        height: auto;
        transform: scaleY(1);
        opacity: 1;
        border: 1px solid ${({ theme }) => theme.colors.inputSecondary};
        border-top: none;
        border-top-width: 0;
        border-radius: 0 0 16px 16px;
        background: ${({ theme }) => theme.colors.input};

        svg {
          position: relative; 
          right: unset; 
          top: unset; 
          transform: unset;
          border-radius: 6px;
        }
      }
    `}

  svg {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 6px;
  }
`

const DropDownList = styled.ul`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  z-index: ${({ theme }) => theme.zIndices.dropdown};
`

const ListItem = styled.li`
  list-style: none;
  padding: 8px 16px;
  &:hover {
    background: ${({ theme }) => theme.colors.inputSecondary};
  }
`
const Icons = IconModule as unknown as { [key: string]: React.FC<SvgProps> };

const SelectWithIcon: React.FunctionComponent<SelectWithIconProps> = ({ options, onOptionChange, ...props }) => {
  const dropdownRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0)

  const toggling = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsOpen(!isOpen)
    event.stopPropagation()
  }

  const onOptionClicked = (selectedIndex: number) => () => {
    setSelectedOptionIndex(selectedIndex)
    setIsOpen(false)

    if (onOptionChange) {
      onOptionChange(options[selectedIndex])
    }
  }

  useEffect(() => {
    const handleClickOutside = () => {
      setIsOpen(false)
    }

    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  const SelectIcon = Icons[options[selectedOptionIndex].icon];
  const selectIconElement = <SelectIcon width="30px" mr="8px" />;

  return (
    <DropDownContainer isOpen={isOpen} {...props}>
      <DropDownHeader onClick={toggling}>
        {selectIconElement}
        <Text>{options[selectedOptionIndex].label}</Text>
      </DropDownHeader>
      { !isOpen && <IconModule.ChevronDownIcon color="text" onClick={toggling} />}
      <DropDownListContainer>
        <DropDownList ref={dropdownRef}>
          {options.map((option, index) => {
            const OtherIcon = Icons[option.icon];
            const otherIconElement = <OtherIcon width="30px" mr="8px" />;
            if (index !== selectedOptionIndex) {
              return (
                <ListItem onClick={onOptionClicked(index)} key={option.label}>
                  <Flex>
                    {otherIconElement}
                    <Text>{option.label}</Text>
                  </Flex>
                </ListItem>
              )
            }
            return null
          })}
        </DropDownList>
      </DropDownListContainer>
    </DropDownContainer>
  )
}

export default SelectWithIcon
