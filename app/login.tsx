import { Formik } from "formik";
import { Image, StyleSheet, View } from "react-native";
import {
  Button,
  Checkbox,
  Text,
  TextInput,
  useTheme,
} from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Yup from "yup";
import ErrorInput from "../components/ErrorInput";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../api/Api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import Toast from "react-native-toast-message";
import useAuthStore from "../storage/AuthStore";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Correo electrónico inválido")
    .required("El correo electrónico es obligatorio"),
  password: Yup.string().required("La contraseña es obligatoria"),
});

export default function LoginScreen() {
  const theme = useTheme();
  const router = useRouter();
  const { setUser } = useAuthStore();
  const styles = createStyles(theme.colors);

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: async (data) => {
      // Guarda el token y los datos de usuario en AsyncStorage
      try {
        await setUser(data);

        router.navigate("/(auth)/home");
      } catch (e) {
        Toast.show({
          type: "error",
          text1: "Error",
          text2: "No se pudo guardar el token en el dispositivo",
        });
      }
    },
    onError: (error) => {
      console.error("Error en el login", error);
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Usuario o contraseña incorrectos",
      });
    },
  });

  const handleLogin = (values) => {
    loginMutation.mutate({
      email: values.email,
      password: values.password,
      remember: values.remember,
    });
  };

  return (
    <SafeAreaView>
      <Image source={require("../assets/icon.png")} style={styles.image} />
      <Text variant="headlineLarge" style={styles.title}>
        Iniciar sesión
      </Text>
      <Text variant="titleLarge" style={styles.subtitle}>
        Bienvenido a la aplicación
      </Text>

      <Formik
        initialValues={{
          email: "test@cafi.com",
          password: "12345678",
          remember: true,
        }}
        validationSchema={LoginSchema}
        onSubmit={(values) => handleLogin(values)}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          setFieldValue,
        }) => (
          <View style={styles.form}>
            <TextInput
              mode="outlined"
              label="Correo electrónico"
              left={<TextInput.Icon icon="email" />}
              value={values.email}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
            />
            {touched.email && errors.email && (
              <ErrorInput error={errors.email} />
            )}
            <TextInput
              mode="outlined"
              label="Contraseña"
              secureTextEntry
              left={<TextInput.Icon icon="eye" />}
              value={values.password}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
            />
            {touched.password && errors.password && (
              <ErrorInput error={errors.password} />
            )}

            <Checkbox.Item
              label="¿Recordarme?"
              status={values.remember ? "checked" : "unchecked"}
              onPress={() => setFieldValue("remember", !values.remember)}
            />

            <Button
              mode="contained"
              style={styles.loginButton}
              onPress={() => handleSubmit()}
              loading={loginMutation.isPending}
            >
              INGRESAR
            </Button>
          </View>
        )}
      </Formik>
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
    remember: {
      //   flexDirection: "row-reverse",
      //   alignItems: "center",
    },
    loginButton: {
      marginTop: 10,
      width: "50%",
      alignSelf: "center",
    },
  });
