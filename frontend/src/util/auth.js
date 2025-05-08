import { redirect } from "react-router-dom";

export function getAuthToken() {
  const token = localStorage.getItem("token");
  return token;
}

export function tokenLoader() {
  return localStorage.getItem("token");
}

// to protect a route (client-side) when the user is not authenticated
export function checkAuthLoader() {
  const token = getAuthToken();

  if (!token) {
    return redirect("/auth")
  }

  return null;
}
