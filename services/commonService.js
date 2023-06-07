import http from "./httpService";

const endPoint = "/api";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export function createAccount(api, data) {
  return http.post(endPoint + api, data, config);
}

export function activateAccount(api, data) {
  return http.post(endPoint + api, data, config);
}
