import { useEffect } from "react";
import { createPortal } from "react-dom";
import LOGO from "../assets/TD_Logo.png";
import LogoutButton from "../auth/Logout.jsx";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ isOpen }) => {
  const portalRoot = document.getElementById("root");
  const modalRoot = document.createElement("div");

  useEffect(() => {
    portalRoot.appendChild(modalRoot);

    return () => {
      portalRoot.removeChild(modalRoot);
    };
  }, [portalRoot, modalRoot]);

  return isOpen
    ? createPortal(
        <>
          <div className="fixed top-0 p-2 pt-6 align-middle justify-center left-0 h-full bg-[--white-bg] w-[225px] shadow-lg shadow-slate-400 dark:shadow-black dark:bg-[--dd-blue-bg]">
            <ul className="flex flex-col gap-4 p-4 w-full text-left max-w-[220px]">
              <img src={LOGO} alt="logo" className="mb-8" />
              <li>
                <a
                  href="#topnav"
                  className="pl-2 pr-4 text-[1.1rem] mb-[2em] text-left text-[--d-blue-bg] font-regular hover:text-[--l-blue-bg] dark:hover:text-[--l-blue-bg] dark:text-white">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#summary"
                  className="pl-2 pr-4 text-[1.1rem] mb-[2em] text-left text-[--d-blue-bg] font-regular hover:text-[--l-blue-bg] dark:hover:text-[--l-blue-bg] dark:text-white">
                  Summary
                </a>
              </li>
              <li>
                <a
                  href="#performance"
                  className="pl-2 pr-4 text-[1.1rem] mb-[2em] text-left text-[--d-blue-bg] font-regular hover:text-[--l-blue-bg] dark:hover:text-[--l-blue-bg] dark:text-white">
                  Performance
                </a>
              </li>
              <li>
                <a
                  href="#phone-conversions"
                  className="pl-2 pr-4 text-[1.1rem] mb-[2em] text-left text-[--d-blue-bg] font-regular hover:text-[--l-blue-bg] dark:hover:text-[--l-blue-bg] dark:text-white">
                  Phone Conversions
                </a>
              </li>
              <li>
                <a
                  href="#phone-data"
                  className="pl-2 pr-4 text-[1.1rem] mb-[2em] text-left text-[--d-blue-bg] font-regular hover:text-[--l-blue-bg] dark:hover:text-[--l-blue-bg] dark:text-white">
                  Phone Data
                </a>
              </li>
              <li>
                <a
                  href="#online-conversions"
                  className="pl-2 pr-4 text-[1.1rem] mb-[2em] text-left text-[--d-blue-bg] font-regular hover:text-[--l-blue-bg] dark:hover:text-[--l-blue-bg] dark:text-white">
                  Online Conversions
                </a>
              </li>
              <li>
                <a
                  href="#website"
                  className="pl-2 pr-4 text-[1.1rem] mb-[2em] text-left text-[--d-blue-bg] font-regular hover:text-[--l-blue-bg] dark:hover:text-[--l-blue-bg] dark:text-white">
                  Website
                </a>
              </li>
              <li>
                <a
                  href="#digital-ads"
                  className="pl-2 pr-4 text-[1.1rem] mb-[2em] text-left text-[--d-blue-bg] font-regular hover:text-[--l-blue-bg] dark:hover:text-[--l-blue-bg] dark:text-white">
                  Digital Ads
                </a>
              </li>
            </ul>
          </div>
          <div className="text-red">
            <LogoutButton />
          </div>
        </>,
        document.getElementById("sidebar")
      )
    : null;
};
export default Sidebar;
