import { View, StyleSheet } from "react-native";
import StyledText from "./StyledText";

// Transformamos aquellos valores superiores o iguales a 1000 y expresamos de la siguiente forma: 1k / 50k
const parseThousands = (value) => {
  return value >= 1000 ? `${Math.round(value / 100) / 10}k` : String(value);
};

function RepositoryStats ({stargazersCount, forksCount, reviewCount, ratingAverage }) {
  return (
    <View style={styles.container}>
      <View>
        <StyledText align="center" fontWeight="bold">
          {parseThousands(stargazersCount)}
        </StyledText>
        <StyledText align="center">Estrellas</StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          {parseThousands(forksCount)}
        </StyledText>
        <StyledText align="center">Forks</StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          {reviewCount}
        </StyledText>
        <StyledText align="center">Visitas</StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          {ratingAverage}
        </StyledText>
        <StyledText align="center">Valoración</StyledText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4
  },
});

export default RepositoryStats;
