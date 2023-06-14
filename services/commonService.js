import http from "./httpService";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export function createAccount(url, data) {
  return http.post(url, data, config);
}

export function activateAccount(url, data) {
  return http.post(url, data, config);
}
