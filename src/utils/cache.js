const cache = new Map();

export const getCachedData = (key) => {
  if (cache.has(key)) {
    return cache.get(key);
  }
  return null;
};

export const setCachedData = (key, data) => {
  cache.set(key, data);
};
