export async function getUser(credentials) {
  const response = await fetch("/api/login", {
    method: "POST",
    body: JSON.stringify(credentials),
  });
  const data = await response.json();
  if (!response.ok) {
    return {
      body: data,
      status: response.status,
      statusText: response.statusText,
    };
  }
  return data;
}
