import { useEffect, useState } from "react";
import { Outlet, useNavigation } from "react-router";
import { ScrollRestoration } from "react-router-dom";
import Topnav from "../components/Topnav";
// import { useAuth0 } from "@auth0/auth0-react";
// import LoginButton from "../auth/Login";

const RootLayout = () => {
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
  //TODO AuthO - Start ====== This is creating a LOOP to the login page after login... Need to correct.
  // const { isAuthenticated, isLoading, loginWithRedirect, user } = useAuth0();

  // useEffect(() => {
  //   // Check if the user is authenticated and the authentication process is complete
  //   if (!isAuthenticated && !isLoading) {
  //     // If not authenticated, redirect to the login page
  //     loginWithRedirect();
  //   }
  // }, [isAuthenticated, isLoading, loginWithRedirect]);

  // Render loading state while authentication status is being determined
  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }
  //TODO AuthO - End

  return (
    <div className="text-black bg-[--white-bg] dark:bg-[--dd-blue-bg] dark:text-white">
      <ScrollRestoration />
      {isScreenLoading && <div className="loading-spinner" />}
      <div
        className={`container bg-[--white-bg] text-black dark:bg-[--dd-blue-bg] dark:text-white w-full m-auto ${
          isScreenLoading ? "loading" : ""
        }`}>
        <Topnav handleThemeSwitch={handleThemeSwitch} />
        {/* {user} */}
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
