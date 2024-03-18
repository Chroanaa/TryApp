export default function useCacheData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
