import http from "./httpService";

const apiPath = "admins";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

// GET Request:

export async function getAdminOverview(accessToken) {
  const { data } = await http.get(`/${apiPath}/overview`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return data;
}
