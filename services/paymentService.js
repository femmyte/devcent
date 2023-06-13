import http from "./httpService";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export function enrolInCourse(url, data) {
  return http.post(url, data, config);
}

export function processPayment(url, data) {
  return http.post(url, data, config);
}
