import { Outlet, useNavigation } from "react-router";
import { ScrollRestoration } from "react-router-dom";

const RootLayout = () => {
  const { state } = useNavigation();

  return (
    <div className="text-black bg-[--white-bg] dark:bg-[--dd-blue-bg] dark:text-white">
      <ScrollRestoration />

      <div
        className={`container bg-[--white-bg] text-black dark:bg-[--dd-blue-bg] dark:text-white w-full m-auto`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
