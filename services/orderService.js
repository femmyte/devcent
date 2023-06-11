import http from "./httpService";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export function createOrder(url, data) {
  return http.post(url, data, config);
}
