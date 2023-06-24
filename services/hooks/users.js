import { useMutation } from "@tanstack/react-query";
import { updateUserProfile } from "services/userService";

export function useProfileUpdate() {
  return useMutation(updateUserProfile, {
    mutationKey: "profile-update",
  });
}
