import { auth, googleProvider } from "../firebase.js";
import { onAuthStateChanged, signInWithRedirect } from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate(`/client/${user.uid}/dashboard`);
      }
    });
  }, [navigate]);

  const signIn = async () => {
    try {
      await signInWithRedirect(auth, googleProvider);
      navigate(`/client/${user.uid}/dashboard`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center pl-0 bg-[var(--dd-blue-bg)]">
      <div className="flex flex-col gap-4 justify-center items-center h-[400px] w-[400px] bg-[var(--white-bg)]">
        <h1 className="text-[3rem] font-bold">Evident</h1>
        <button
          onClick={signIn}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
