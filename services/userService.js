import http from "./httpService";

const apiEndpoint = "/api";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export function createAccount(api, data) {
  return http.post(apiEndpoint + api, data, config);
}
