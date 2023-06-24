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
