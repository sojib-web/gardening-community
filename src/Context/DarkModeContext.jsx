/* eslint-disable react-refresh/only-export-components */
// @ts-nocheck
import React, { createContext, useState, useEffect } from "react";

export const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    // লোকাল স্টোরেজ থেকে ডার্ক মোড স্টেট লোড করো, না থাকলে false (লাইট মোড)
    const saved = localStorage.getItem("darkMode");
    return saved === "true" || false;
  });

  // ডার্ক মোড পরিবর্তন হলে <html> এর class আপডেট করো
  useEffect(() => {
    const html = window.document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
