import { getUserInfo, updateUserProfile } from "services/userService";
import { create } from "zustand";

export const useUserStore = create((set, get) => ({
  userInfo: {},
  isLoadingFetch: false,
  isLoadingUpdate: false,
  errorFetch: null,
  errorUpdate: null,
  getUserInfo: async (id, accessToken) => {
    try {
      set({ isLoadingFetch: true, errorFetch: null });
      const { data } = await getUserInfo(id, accessToken);
      set({ isLoadingFetch: false, userInfo: data.user });
    } catch (err) {
      if (err?.response?.data?.message)
        set({ errorFetch: err.response.data.message, isLoadingFetch: false });
    }
  },
  updateUserProfile: async (id, accessToken, formData) => {
    try {
      set({ isLoading: true, errorUpdate: null });
      const { data } = await updateUserProfile(id, accessToken, formData);
      console.log(data.user);
      set({ isLoading: false, userInfo: data.user });
    } catch (err) {
      if (err?.response?.data?.message)
        set({ errorUpdate: err.response.data.message, isLoading: false });
    }
  },
  updateUserInfo: async (user) => {
    const updatedUser = { ...get().userInfo, ...user };
    set({ userInfo: updatedUser });
  },
}));
