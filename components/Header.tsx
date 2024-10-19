import { StyleSheet, View } from "react-native";
import { Avatar, Icon, Text, useTheme } from "react-native-paper";

export default function Header({ user }) {
  const theme = useTheme();

  const styles = createTheme(theme.colors);

  return (
    <View style={styles.container}>
      <Avatar.Image
        size={50}
        source={require("../assets/icon.png")}
        style={{
          backgroundColor: "white",
        }}
      />
      <View style={styles.containerName}>
        <Text style={styles.text}>Bienvenido</Text>
        <Text style={styles.text}>{user?.name}</Text>
      </View>

      <View style={styles.notification}>
        <Icon source="bell" size={25} color="white" />
        <Text style={styles.notificationNumber}>9</Text>
      </View>
      <View style={styles.notification}>
        <Icon source="bell" size={25} color="white" />
        <Text style={styles.notificationNumber}>9</Text>
      </View>
    </View>
  );
}

const createTheme = (colors) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: colors.primary,
      padding: 10,
    },
    containerName: {
      marginLeft: 20,
    },
    text: {
      color: "white",
      fontWeight: "bold",
    },
    notification: {
      padding: 10,
      position: "absolute",
      right: 10,
      top: 10,
    },
    notificationNumber: {
      color: "white",
      backgroundColor: colors.secondary,
      borderRadius: 50,
      width: 20,
      height: 20,
      textAlign: "center",
      position: "absolute",
      right: 0,
      bottom: 0,
    },
  });
