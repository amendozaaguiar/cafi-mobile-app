const login = async ({ email, password, remember }) => {
  try {
    if (email !== "amendoza@inmov.com" || password !== "12345678") {
      throw new Error("Usuario o contraseña incorrectos");
    }

    // await new Promise((resolve) => setTimeout(resolve, 5000));

    const fakeUser = {
      photo: "https://randomuser.me/api/portraits/women/70.jpg",
      name: "Administrador del sistema",
      email: "admin@inmov.com",
      token: "fakeToken",
    };

    return fakeUser;
  } catch (e) {
    throw e;
  }
};

const logout = async () => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return {
    success: true,
  };
};

export { login, logout };
