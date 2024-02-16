import { Outlet, useNavigation } from "react-router";
import { ScrollRestoration } from "react-router-dom";
import { CgShapeHalfCircle } from "react-icons/cg";

const RootLayout = () => {
  const { state } = useNavigation();
  const isLoading = state === "loading";

  return (
    <>
      <ScrollRestoration />
      {isLoading && <div className="loading-spinner" />}
      <div className={`container ${isLoading ? "loading" : ""}`}>
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
