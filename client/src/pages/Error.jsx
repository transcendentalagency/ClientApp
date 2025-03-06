import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <p className="flex flex-col justify-center text-center h-screen bg-black text-white">
      404 - This Is Not The Page You Are Looking For
      <Link to={"/"}>Back to Home</Link>
    </p>
  );
};
