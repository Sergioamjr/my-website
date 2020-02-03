import { useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

const checkPageLanguage = pathname => {
  const patterns = ["/en", "posts_en"];
  return patterns.filter(pattern => pathname.includes(pattern)).length > 0
    ? "EN"
    : "PT";
};

export const useGetLang = pathname => {
  const [lang, setLang] = useState(checkPageLanguage(pathname));
  useEffect(() => {
    setLang(checkPageLanguage(pathname));
  }, [pathname]);
  return lang;
};

const getThemeMode = () => {
  const { themeMode } = getLocalStorage();
  return themeMode || "light";
};

export const useThemeMode = () => {
  const [themeMode, setThemeMode] = useState(getThemeMode);

  const updateThemeMode = () => {
    setThemeMode(v => (v === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const documentRef = document.documentElement.style;
    const isDarkMode = themeMode === "dark";
    documentRef.setProperty("--background", !isDarkMode ? "#fff" : "#1d1d1d");
    documentRef.setProperty("--text", isDarkMode ? "#e0e0e0" : "#333");
    documentRef.setProperty("--title", isDarkMode ? "#fff" : "#2c3e50");
    setLocalStorage({ themeMode });
  }, [themeMode]);

  return [themeMode, updateThemeMode];
};
