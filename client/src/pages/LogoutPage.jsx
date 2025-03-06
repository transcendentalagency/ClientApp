// Logout.js
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const Logout = () => {
  return (
    <button
      onClick={() => signOut(auth)}
      className="bg-red-500 px-4 py-2 text-white"
    >
      Logout
    </button>
  );
};

export default Logout;
