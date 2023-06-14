import http from "./httpService";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export function enrolInCourse(url, data, accessToken) {
  return http.post(url, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
}

export function processPayment(url, data, accessToken) {
  return http.post(url, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
}
