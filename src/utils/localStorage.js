const key = "sj";

export const setLocalStorage = value => {
  if (typeof localStorage !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const getLocalStorage = (item = key) => {
  if (typeof localStorage !== "undefined") {
    const value = localStorage.getItem(item) || "{}";
    return JSON.parse(value);
  }
  return {};
};
