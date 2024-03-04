import { useEffect, useState } from "react";
import { Outlet, useNavigation } from "react-router";
import { ScrollRestoration } from "react-router-dom";
import Topnav from "../components/Topnav";
import Sidebar from "../components/Sidebar";

const RootLayout = () => {
  const { state } = useNavigation();
  const isLoading = state === "loading";

  const { sidebarState, setSidebarState } = useState(false);

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

  const toggleSidebar = () => {
    setSidebarState((current) => !current);
  };

  return (
    <div className="text-black bg-[--white-bg] dark:bg-[--dd-blue-bg] dark:text-white overflow-x-hidden">
      {/* Temp button: Place in Navigation Component */}
      <ScrollRestoration />
      {isLoading && <div className="loading-spinner" />}
      {}
      {/* <Sidebar /> */}
      <div
        className={`container bg-[--white-bg] text-black dark:bg-[--dd-blue-bg] dark:text-white w-screen m-auto ${
          isLoading ? "loading" : ""
        }`}>
        <Topnav
          handleThemeSwitch={handleThemeSwitch}
          sidebarState={toggleSidebar}
        />
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
