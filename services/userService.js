import http from "./httpService";

const apiPath = "users";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

// GET Request:

export function getUserInfo(id, accessToken) {
  return http.get(`/${apiPath}/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
}

export async function getUsers(role, accessToken) {
  const { data } = await http.get(`/${apiPath}?role=${role}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return data;
}

export async function getUserPayments(id, accessToken) {
  const { data } = await http.get(`/${apiPath}/${id}/payments`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return data;
}

// PUT Request:

export async function updateUserProfile({ url, form, accessToken }) {
  const { data } = await http.put(url, form, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return data;
}

// POST Request:

export async function uploadProfilePicture(url, form, accessToken) {
  const { data } = await http.post(url, form, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return data;
}

// export async function uploadProfilePicture(url, form, accessToken) {
//   const { data } = await http.post(url, form, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//       Authorization: `Bearer ${accessToken}`,
//     },
//   });

//   return data;
// }
