import { Image, StyleSheet, View } from "react-native";
import {
  Button,
  Checkbox,
  Text,
  TextInput,
  useTheme,
} from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  const theme = useTheme();
  const styles = createStyles(theme.colors);

  return (
    <SafeAreaView>
      <Image source={require("../assets/icon.png")} style={styles.image} />
      <Text variant="headlineLarge" style={styles.title}>
        Iniciar sesión
      </Text>
      <Text variant="titleLarge" style={styles.subtitle}>
        Bienvenido a la aplicación
      </Text>

      <View style={styles.form}>
        <View style={styles.formInputEmail}>
          <TextInput
            mode="outlined"
            label="Correo electrónico"
            left={<TextInput.Icon icon="email" />}
          />
          <Text variant="labelSmall">Error</Text>
        </View>
        <View style={styles.formInputPassword}>
          <TextInput
            mode="outlined"
            label="Contraseña"
            secureTextEntry
            left={<TextInput.Icon icon="eye" />}
          />
        </View>

        <Checkbox.Item label="¿Recordarme?" status="checked" />

        <Button
          mode="contained"
          onPress={() => console.log("Pressed")}
          style={styles.loginButton}
        >
          INGRESAR
        </Button>
      </View>
    </SafeAreaView>
  );
}

const createStyles = (colors) =>
  StyleSheet.create({
    image: {
      width: 150,
      height: 150,
      alignSelf: "center",
      marginTop: 100,
    },
    title: {
      fontWeight: "bold",
      alignSelf: "center",
      marginTop: 20,
      margin: 10,
    },
    subtitle: {
      color: colors.secondary,
      alignSelf: "center",
    },
    form: {
      margin: 20,
    },
    formInputEmail: {
      marginBottom: 10,
    },
    formInputPassword: {
      marginBottom: 10,
    },
    remenber: {
      //   flexDirection: "row-reverse",
      //   alignItems: "center",
    },
    loginButton: {
      marginTop: 10,
      width: "50%",
      alignSelf: "center",
    },
  });
