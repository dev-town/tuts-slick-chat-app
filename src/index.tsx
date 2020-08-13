import React from 'react';
import ReactDOM from 'react-dom';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    ApolloLink,
    HttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import createAuth0Client, { IdToken } from '@auth0/auth0-spa-js';

import { Auth0Provider } from './react-auth0-spa';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { config, API } from './config';
import introspectionResult from './graphql/introspection-result.json';

/* Make sure auth0 client is available before AuthProvider gets assigned */
// Lots of info in this post
// https://community.auth0.com/t/how-to-use-react-auth0-spa-with-graphql/30516/8
createAuth0Client(config).then((auth0) => {
    const auth0Client = auth0;

    /* Set URI for all Apollo GraphQL requests (backend api) */
    const httpLink = new HttpLink({ uri: API });

    /* Set in-memory token to reduce async requests */
    let token: IdToken;

    /* Create Apollo Link to supply token with either
     * in-memory ref or auth0 req'ed token or redirect (built into
     * getTokenSilently
     */
    const withTokenLink = setContext(async () => {
        // return token if there
        if (token) return { auth0Token: token };

        // else check if valid token exists with client already and set if so
        const newToken = await auth0Client.getTokenSilently();
        token = newToken;

        return { auth0Token: newToken };
    });

    /* Create Apollo Link to supply token in auth header with every gql request */
    const authLink = setContext((_, { headers, auth0Token }) => {
        return {
            headers: {
                ...headers,
                ...(auth0Token
                    ? { Authorization: `Bearer ${auth0Token}` }
                    : {}),
            },
        };
    });

    /* Error handling */
    const errorLink = onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors)
            graphQLErrors.forEach(({ message, locations, path }) =>
                console.log(
                    `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
                )
            );
        if (networkError) console.log(`[Network error]: ${networkError}`);
    });

    /* Create Apollo Link array to pass to Apollo Client */
    const link = ApolloLink.from([
        withTokenLink,
        authLink,
        errorLink,
        httpLink,
    ]);

    /* Set up local cache */
    const cache = new InMemoryCache({
        ...introspectionResult,
    });

    /* Create Apollo Client */
    const client = new ApolloClient({
        link,
        cache,
    });

    /* Create root render function */
    const renderApp = () => {
        ReactDOM.render(
            <React.StrictMode>
                <ApolloProvider client={client}>
                    <Auth0Provider auth0Client={auth0Client}>
                        <App />
                    </Auth0Provider>
                </ApolloProvider>
            </React.StrictMode>,
            document.getElementById('root')
        );
    };

    /* Render React App after hydrating from local storage */
    renderApp();
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
