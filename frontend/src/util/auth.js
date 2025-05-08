import { redirect } from "react-router-dom";

export function getTokenDuration() {
  const storedExpirationDate = localStorage.getItem("expiration");
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
}

export function getAuthToken() {
  const token = localStorage.getItem("token");

  if (!token) {
    return null;
  }

  const tokenDuration = getTokenDuration();
  if (tokenDuration < 0) {
    return "EXPIRED";
  }

  return token;
}

export function tokenLoader() {
  return localStorage.getItem("token");
}

// to protect a route (client-side) when the user is not authenticated
export function checkAuthLoader() {
  const token = getAuthToken();

  console.log("checkAuthLoader: " + token)
  if (!token) {
    return redirect("/auth");
  }

  return null;
}
