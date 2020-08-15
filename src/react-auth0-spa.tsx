import React from 'react';
import { Auth0Client } from '@auth0/auth0-spa-js';

const DEFAULT_REDIRECT_CALLBACK = (value: any) =>
    window.history.replaceState({}, document.title, window.location.pathname);

interface IUser {
    email: string;
    email_verified: boolean;
    name: string;
    nickname: string;
    picture: string;
    sub: string;
    updated_at: string;
}
interface IAuthContext {
    user: IUser | null;
    loading: boolean;
    isAuthenticated: boolean;
    popupOpen: boolean;
    loginWithRedirect: (data?: any) => void;
    loginWithPopup: () => void;
    handleRedirectCallback: () => void;
    getIdTokenClaims: (data?: any) => void;
    getTokenSilently: () => void;
    getTokenWithPopup: () => void;
    logout: () => void;
}

const defaultContext = {
    user: null,
    loading: false,
    isAuthenticated: false,
    popupOpen: false,
    loginWithPopup: () => {},
    loginWithRedirect: () => {},
    handleRedirectCallback: () => {},
    getIdTokenClaims: () => {},
    getTokenSilently: () => {},
    getTokenWithPopup: () => {},
    logout: () => {},
};

export const Auth0Context = React.createContext<IAuthContext>(defaultContext);
export const useAuth0 = () => React.useContext(Auth0Context);

export interface IProps {
    onRedirectCallback?: (value: any) => void;
    auth0Client: Auth0Client;
}

export const Auth0Provider: React.FC<IProps> = ({
    children,
    onRedirectCallback = DEFAULT_REDIRECT_CALLBACK,
    auth0Client,
}) => {
    const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(
        false,
    );
    const [user, setUser] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [popupOpen, setPopupOpen] = React.useState(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    React.useEffect(() => {
        const initAuth0 = async () => {
            if (
                window.location.search.includes('code=') &&
                window.location.search.includes('state=')
            ) {
                const { appState } = await auth0Client.handleRedirectCallback();
                onRedirectCallback(appState);
            }

            const checkIsAuthenticated = await auth0Client.isAuthenticated();

            setIsAuthenticated(checkIsAuthenticated);

            if (checkIsAuthenticated) {
                const user = await auth0Client.getUser();
                setUser(user);
            }

            setLoading(false);
        };

        initAuth0();
    }, [onRedirectCallback, auth0Client]);

    const loginWithPopup = async (params = {}) => {
        setPopupOpen(true);
        try {
            if (auth0Client) {
                await auth0Client.loginWithPopup(params);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setPopupOpen(false);
        }
        if (auth0Client) {
            const user = await auth0Client.getUser();
            setUser(user);
            setIsAuthenticated(true);
        }
    };

    const handleRedirectCallback = async () => {
        setLoading(true);
        if (auth0Client) {
            await auth0Client.handleRedirectCallback();
            const user = await auth0Client.getUser();
            setLoading(false);
            setIsAuthenticated(true);
            setUser(user);
        }
    };

    return (
        <Auth0Context.Provider
            value={{
                isAuthenticated,
                user,
                loading,
                popupOpen,
                loginWithPopup,
                handleRedirectCallback,
                getIdTokenClaims: (...p: any) =>
                    auth0Client && auth0Client.getIdTokenClaims(...p),
                loginWithRedirect: (...p: any) =>
                    auth0Client && auth0Client.loginWithRedirect(...p),
                getTokenSilently: (...p: any) =>
                    auth0Client && auth0Client.getTokenSilently(...p),
                getTokenWithPopup: (...p: any) =>
                    auth0Client && auth0Client.getTokenWithPopup(...p),
                logout: (...p: any) => auth0Client && auth0Client.logout(...p),
            }}
        >
            {children}
        </Auth0Context.Provider>
    );
};