import { useEffect, useState } from "react";
import { Outlet, useNavigation } from "react-router";
import { ScrollRestoration } from "react-router-dom";

const RootLayout = () => {
  const { state } = useNavigation();
  const isLoading = state === "loading";

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (window.matchMedia("prefers-color-scheme: dark").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="text-black dark:bg-black dark:text-white">
      {/* Temp button: Place in Navigation Component */}
      <button
        onClick={handleThemeSwitch}
        className="btn rounded-xl bg-green-600 py-2 px-3">
        Dark Mode
      </button>
      <ScrollRestoration />
      {isLoading && <div className="loading-spinner" />}
      <div
        className={`container bg-white text-black dark:bg-black dark:text-white w-screen ${
          isLoading ? "loading" : ""
        }`}>
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
