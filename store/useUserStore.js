import { getUserInfo } from "services/userService";
import { create } from "zustand";

export const useUserStore = create((set, get) => ({
  userInfo: {},
  isLoadingFetch: false,
  errorFetch: null,

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
  updateUserInfo: async (user) => {
    // const updatedUser = { ...get().userInfo, ...user };
    set({ userInfo: user });
  },
}));
