import { StyleSheet } from "react-native";
import { Text, useTheme } from "react-native-paper";

export default function ErrorInput({ error }) {
  const theme = useTheme();
  const styles = createStyles(theme.colors);

  return (
    <Text variant="labelSmall" style={styles.error}>
      {error}
    </Text>
  );
}

const createStyles = (colors) =>
  StyleSheet.create({
    error: {
      color: colors.error,
    },
  });
