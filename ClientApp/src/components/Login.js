// src/components/Login.js

import { GoogleProvider, GoogleLoginButton } from "@react-oauth/google"

function Login() {
  const handleGoogleLogin = () => {
    GoogleProvider.login()
      .then((response) => {
        // Handle successful login
        console.log("Logged in successfully", response)
      })
      .catch((error) => {
        // Handle login error
        console.error("Login error", error)
      })
  }

  return (
    <div>
      <h2>Login with Google</h2>
      <GoogleLoginButton onClick={handleGoogleLogin} />
    </div>
  )
}

export default Login
