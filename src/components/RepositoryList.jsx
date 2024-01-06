import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import repositories from "../data/repositories.js";
import RepositoryItem from "./RepositoryItem.jsx";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

function RepositoryList() {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item: repo }) => (
        <RepositoryItem repo={repo}/>
      )}
    />
  );
}

export default RepositoryList;
