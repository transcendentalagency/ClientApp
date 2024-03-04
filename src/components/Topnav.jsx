import { PiSidebarLight } from "react-icons/pi";
import { IoMdNotificationsOutline, IoMdNotifications } from "react-icons/io";
import { IoShareSocialOutline } from "react-icons/io5";
import { CgDarkMode } from "react-icons/cg";

import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Topnav = ({ handleThemeSwitch }) => {
  const { notification } = useState();

  return (
    <div className="flex flex-row gap-2 justify-between align-middle py-2 px-4 mb-8">
      <div className="flex flex-row align-middle gap-2 justify-center">
        {/* TODO: this needs to be a functional sidebar */}
        <PiSidebarLight
          className="text-[2rem] text-[--d-blue-bg] m-auto dark:text-white cursor-pointer"
        />
        <span className=" text-[--d-blue-bg] dark:text-white text-[2rem] font-regular">
          Azalea
        </span>
      </div>

      <div className="flex flex-row align-middle gap-2 justify-center">
        <div className="flex flex-row align-middle gap-2 justify-start">
          <p className="m-auto hidden md:block text-[1.2rem]">Report for </p>
          <select className="active:border-[--blue-bg] border-2 border-[--blue-bg] rounded-full w-[200px] h-8 m-auto px-2 text-md font-light text-[--d-blue-bg] select-none cursor-pointer">
            {/*TODO:This will be a map of all dates available */}
            <option value="date1" key="date1">
              Date1
            </option>
            <option value="date2" key="date2">
              Date2
            </option>
            <option value="date3" key="date3">
              Date3
            </option>
            <option value="date4" key="date4">
              Date4
            </option>
          </select>
        </div>

        {notification ? (
          <IoMdNotifications className="text-[2rem] text-[--d-blue-bg] m-auto dark:text-[--l-blue-bg] cursor-pointer" />
        ) : (
          <IoMdNotificationsOutline className="text-[2rem] text-[--d-blue-bg] m-auto dark:text-[--white-bg] cursor-pointer" />
        )}

        {/* TODO: This will be an export function */}
        <IoShareSocialOutline className="text-[1.8rem] cursor-pointer text-[--d-blue-bg] m-auto rounded-full border-2 border-[--d-blue-bg] dark:border-white p-[.1rem] dark:text-white" />
        <CgDarkMode
          onClick={handleThemeSwitch}
          className="text-[1.8rem] cursor-pointer text-[--d-blue-bg] m-auto rounded-full border-2 border-[--d-blue-bg] dark:border-white p-[.1rem] dark:text-white"
        />
      </div>
    </div>
  );
};

export default Topnav;
