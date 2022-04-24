import { BoxProps } from '../Box';
export interface SelectProps extends BoxProps {
    options: OptionProps[];
    onOptionChange?: (option: OptionProps) => void;
}
export interface OptionProps {
    label: string;
    value: any;
}
export interface SelectWithIconProps extends BoxProps {
    options: OptionWithIconProps[];
    onOptionChange?: (option: OptionProps) => void;
}
export interface OptionWithIconProps {
    icon: string;
    label: string;
    value: any;
}
