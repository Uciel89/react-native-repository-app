import React from "react";
import { View, StyleSheet } from "react-native";
import RepositoryItemHeader from "./RepositoryItemHeader.jsx";
import RepositoryStats from "./RepositoryStats.jsx";

/**
 * En ocasiones, al momentos de aplicar un border-radius a un texto, vemos que no se aplica, una solución es
 * agregar un overflow: 'hidden'.
 */

function RepositoryItem({ repo }) {
  return (
    <View key={repo.id} style={styles.container} source>
      <RepositoryItemHeader {...repo}/> 
      <RepositoryStats {...repo}></RepositoryStats>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },
});

export default RepositoryItem;
