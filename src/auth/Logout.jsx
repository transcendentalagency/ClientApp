import { useAuth0 } from "@auth0/auth0-react";
import { IoIosLogOut } from "react-icons/io";

const LogoutButton = ({ anchor }) => {
  const { logout } = useAuth0();

  return (
    <button
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
      className={`flex flex-row gap-1 items-center text-[inherit] ${anchor} text-[--d-blue-bg]`}
    >
      Log Out <IoIosLogOut />
    </button>
  );
};

export default LogoutButton;
