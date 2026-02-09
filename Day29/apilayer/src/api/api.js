const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function apiRequest(endpoint) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`);
    if (!response.ok) {
      throw new Error("Request failed");
    }
    return await response.json();
  } catch (error) {
    console.error("Api Error", error);
    throw error;
  }
}
