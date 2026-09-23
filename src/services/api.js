const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

async function apiRequest(endpoint, options = {}) {
  const {
    method = "GET",
    body,
    headers = {},
  } = options;

  const requestHeaders = {
    ...headers,
  };

  if (body !== undefined) {
    requestHeaders["Content-Type"] = "application/json";
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    method,
    credentials: "include",
    headers: requestHeaders,
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });

  let data = null;

  try {
    data = await response.json();
  } catch {
    data = null;
  }

  if (!response.ok) {
    const error = new Error(
      data?.message || "Something went wrong with the request."
    );

    error.status = response.status;
    error.data = data;

    throw error;
  }

  return data;
}

export { API_URL, apiRequest };