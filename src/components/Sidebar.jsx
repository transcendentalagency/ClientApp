import { useEffect } from "react";
import { createPortal } from "react-dom";
import LOGO from "../assets/TD_Logo.png";
import LogoutButton from "../auth/Logout.jsx";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ isOpen }) => {
  const portalRoot = document.getElementById("root");
  const modalRoot = document.createElement("div");

  const anchorStyle =
    "pl-2 pr-4 text-[1.1rem] mb-[2em] text-left text-[--d-blue-bg] font-regular hover:text-[--l-blue-bg] dark:hover:text-[--l-blue-bg] dark:text-white";

  useEffect(() => {
    portalRoot.appendChild(modalRoot);

    return () => {
      portalRoot.removeChild(modalRoot);
    };
  }, [portalRoot, modalRoot]);

  return isOpen
    ? createPortal(
        <>
          <div className="fixed top-0 p-2 pt-6 align-middle justify-center left-0 h-full bg-[--white-bg] w-[225px] shadow-lg shadow-slate-400 dark:shadow-black dark:bg-[--dd-blue-bg] z-40">
            <ul className="flex flex-col gap-4 p-4 w-full text-left max-w-[220px]">
              <img src={LOGO} alt="logo" className="mb-8" />
              <li>
                <a href="#topnav" className={anchorStyle}>
                  Home
                </a>
              </li>
              <li>
                <a href="#summary" className={anchorStyle}>
                  Summary
                </a>
              </li>
              <li>
                <a href="#performance" className={anchorStyle}>
                  Performance
                </a>
              </li>
              <li>
                <a href="#phone-conversions" className={anchorStyle}>
                  Phone Conversions
                </a>
              </li>
              <li>
                <a href="#phone-data" className={anchorStyle}>
                  Phone Data
                </a>
              </li>
              <li>
                <a href="#online-conversions" className={anchorStyle}>
                  Online Conversions
                </a>
              </li>
              <li>
                <a href="#website" className={anchorStyle}>
                  Website
                </a>
              </li>
              <li>
                <a href="#digital-ads" className={anchorStyle}>
                  Digital Ads
                </a>
              </li>
            </ul>
            <div className="fixed bottom-10 left-[2rem]">
              <LogoutButton anchor={anchorStyle} />
            </div>
          </div>
        </>,
        document.getElementById("sidebar")
      )
    : null;
};
export default Sidebar;
