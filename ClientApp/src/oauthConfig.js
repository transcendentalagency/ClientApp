// src/oauthConfig.js

import { GoogleProvider } from '@react-oauth/google';

const config = {
  clientId: 'YOUR_CLIENT_ID',
  redirectUri: 'YOUR_REDIRECT_URI',
};

export default function configureOAuth() {
  GoogleProvider.configure(config);
}
