import { Auth0ClientOptions } from '@auth0/auth0-spa-js';

// Get the url out of the environment variables
export const API = process.env.REACT_APP_API_URL;

export const config: Auth0ClientOptions = {
    domain: process.env.REACT_APP_AUTH_DOMAIN!,
    client_id: process.env.REACT_APP_AUTH_CLIENT_ID!,
    scope: process.env.REACT_APP_AUTH_SCOPE!,
    redirect_uri: process.env.REACT_APP_AUTH_CALLBACK!,
    audience: process.env.REACT_APP_API_AUTH_AUDIENCE!,
};
