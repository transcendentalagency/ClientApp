import { Auth0Provider } from "@auth0/auth0-react";
// import { domain, clientId } from "../auth_config.json";

// eslint-disable-next-line react/prop-types
const Auth0ProviderWithHistory = ({ children }) => {
  return (
    <Auth0Provider
      domain={process.env.domain}
      clientId={process.env.clientId}
      authorizationParams={{
        redirect_uri: "http://localhost:5173/client/dashboard",
      }}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
