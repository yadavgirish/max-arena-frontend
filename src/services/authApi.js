import { apiRequest } from "./api";

export async function registerUser(userData) {
  return apiRequest("/user/register", {
    method: "POST",
    body: userData,
  });
}

export async function loginUser(credentials) {
  return apiRequest("/user/login", {
    method: "POST",
    body: credentials,
  });
}

export async function logoutUser() {
  return apiRequest("/user/logout", {
    method: "POST",
  });
}

export async function getCurrentUser() {
  return apiRequest("/user/me");
}