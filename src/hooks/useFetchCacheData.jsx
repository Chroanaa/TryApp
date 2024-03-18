export default function useFetchCacheData(key) {
  const { vans } = JSON.parse(localStorage.getItem(key));
  return vans;
}
