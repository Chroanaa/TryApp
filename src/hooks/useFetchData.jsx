export default async function useFetchData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw {
      message: "Faild to fetch data",
      status: response.status,
      statusText: response.statusText,
    };
  }
  const data = await response.json();
  return data;
}
