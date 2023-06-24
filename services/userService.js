import http from "./httpService";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export function getUserInfo(id, accessToken) {
  return http.get(`/users/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
}

export function updateUserProfile(id, accessToken, data) {
  return http.put(`/users/${id}/update-profile`, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
}