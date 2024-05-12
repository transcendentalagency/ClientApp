import LoginButton from "../auth/Login";
import LogoutButton from "../auth/Logout";

export const Client = () => {
  return (
    <div className="fixed gap-6 top-0 left-0 flex flex-col justify-center align-middle h-screen w-[100vw] z-50 bg-[--dd-blue-bg] text-white text-[2rem]">
      <LoginButton />
      <LogoutButton />
    </div>
  );
};
