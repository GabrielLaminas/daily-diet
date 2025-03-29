import { TouchableOpacityProps } from "react-native";
import { 
  Fill, TextButton, ButtonsVariantsProps,
  ButtonBack, BackIcon, ButtonBackProps
} from "./styles";
import { useTheme } from "styled-components/native";
import React from "react";
import Icon from "react-native-vector-icons/Feather";

type ButtonProps = TouchableOpacityProps & {
  text: string;
  variant: ButtonsVariantsProps;
  name?: keyof ReturnType<typeof Icon.getRawGlyphMap>;
}

type ButtonBackIconProps = TouchableOpacityProps & {
  variant: ButtonBackProps;
}

function ButtonFill({ text, variant, name, ...rest }: ButtonProps) {
  const theme = useTheme();

  return (
    <Fill {...rest} variant={variant}>
      { name && (
        <Icon 
          name={String(name)} 
          color={variant === "FILL" ? theme.COLORS.WHITE : theme.COLORS.GRAY_100 }
          size={18}  
        />
      )}
      <TextButton variant={variant}>{text}</TextButton>
    </Fill>
  );
}

function ButtonBackIcon({ variant, ...rest }: ButtonBackIconProps){
  return (
    <ButtonBack { ...rest}>
      <BackIcon variant={variant} />
    </ButtonBack>
  )
}

export { ButtonFill, ButtonBackIcon }