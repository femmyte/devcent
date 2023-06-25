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

export async function updateUserProfile({ url, form, accessToken }) {
  const { data } = await http.put(url, form, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return data;
}

export async function uploadProfilePicture(url, form, accessToken) {
  const { data } = await http.post(url, form, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return data;
}
