import { useEffect, useState } from "react";
import { useNavigation } from "react-router";
import { ScrollRestoration } from "react-router-dom";
import Topnav from "../components/Topnav";
import Dashboard from "../pages/Dashboard";

const DashboardLayout = () => {
  const { state } = useNavigation();
  const isScreenLoading = state === "loading";

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
    <div className="text-black bg-[--white-bg] dark:bg-[--dd-blue-bg] dark:text-white">
      <ScrollRestoration />
      {/* {isScreenLoading || (isLoading && <div className="loading-spinner" />)} */}
      <div
        className={`container bg-[--white-bg] text-black dark:bg-[--dd-blue-bg] dark:text-white w-full m-auto
          
        `}
      >
        <Topnav handleThemeSwitch={handleThemeSwitch} />
        <Dashboard />
      </div>
    </div>
  );
};

export default DashboardLayout;
