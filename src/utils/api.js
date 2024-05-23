export async function getUser(credentials) {
  const response = fetch("/api/login", {
    method: "POST",
    body: JSON.stringify(credentials),
  });
  const data = response.json();
  if (!response.ok) {
    throw new Error(data.message);
  }
  return data;
}
