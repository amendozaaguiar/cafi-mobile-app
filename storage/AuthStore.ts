import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Store de autenticación
const useAuthStore = create((set) => ({
  user: null,

  loadUser: async () => {
    try {
      const user = await AsyncStorage.getItem("user");
      set({ user });
    } catch (e) {
      console.log("Error loading user", e);
    }
  },

  setUser: async (user) => {
    try {
      await AsyncStorage.setItem("user", JSON.stringify(user));
      set({ user });
    } catch (e) {
      console.log("Error saving user", e);
    }
  },

  clearUser: async () => {
    try {
      await AsyncStorage.removeItem("user");
      set({ user: null });
    } catch (e) {
      console.log("Error clearing user", e);
    }
  },
}));

export default useAuthStore;
