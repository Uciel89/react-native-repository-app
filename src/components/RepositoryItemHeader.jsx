import { View, Image, StyleSheet } from "react-native";
import StyledText from "./StyledText";
import IconForLanguage from "./IconForLanguage";
import theme from "../theme.js";

function RepositoryItemHeader({
  ownerAvatarUrl,
  description,
  fullName,
  language,
}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
      <View style={styles.content}>
        <StyledText fontSize="subheading" fontWeight="bold">
          {fullName}
        </StyledText>
        <StyledText color='text-secondary'>{description}</StyledText>
        <View style={styles.language}>
          <IconForLanguage name={language} />
          <StyledText text> {language}</StyledText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  content: {
    paddingStart: 12,
    flex: 1
  },
  language: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginVertical: 4,
    alignSelf: "flex-start",
    overflow: "hidden",
    flexDirection: "row",
    backgroundColor: theme.colors.light_grey,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: theme.colors.black

  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4,
  },
});

export default RepositoryItemHeader;
