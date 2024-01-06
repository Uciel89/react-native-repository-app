import React from "react";
import { View, StyleSheet } from "react-native";
import StyledText from "./StyledText.jsx";
import Constanst from "expo-constants";
import theme from "../theme.js";

function AppBar() {
  return (
    <View style={styles.container}>
      <StyledText fontWeight="bold" color='white'>
        Repositorios
      </StyledText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    paddingTop: Constanst.statusBarHeight + 10,
    paddingBottom: 10,
    paddingLeft: 10,
    marginBottom: 8
  },
});

export default AppBar;
