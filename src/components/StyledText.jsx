import React from "react";
import { Text, StyleSheet } from "react-native";
import theme from '../theme.js';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal
  },
  bold: {
    fontWeight: theme.fontWeights.bold,
  },
  subheading: {
    fontSize: theme.fontSizes.subheading,
  },
  colorPrimary: {
    color: theme.colors.primary
  },
  colorSecondary: {
    color: theme.colors.textSecondary
  },
  colorWhite: {
    color: theme.colors.white
  },
  textAlignCenter: {
    textAlign: 'center',
  }
});

// Componente que se puede utilizar para estilizar componentes de texto dentro de otros componentes
export default function StyledText({ children, align, color, fontSize, fontWeight, style, ...restOfProps }) {
  const textStyles = [
    styles.text,
    align === 'center' && styles.textAlignCenter,
    color === 'primary' && styles.colorPrimary,
    color === 'secondary' && styles.colorSecondary,
    color === "white" && styles.colorWhite,
    fontSize === "subheading" && styles.subheading,
    fontWeight === "bold" && styles.bold,
    style
  ];

  return <Text style={textStyles} {...restOfProps}>{children}</Text>;
}
