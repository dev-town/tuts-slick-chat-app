import React from 'react';
import styled from 'styled-components';

import { Logo } from './Logo';
import { useAuth0 } from '../../react-auth0-spa';

const Wrapper = styled.div`
    display: flex;
    height: 100%;
    justify-content: flex-end;
    align-items: center;
    padding: 0 ${p => p.theme.spacing.getSize(2)};

    @media (max-width: ${p => p.theme.breakpoints.laptop}) {
        padding-left: ${p => p.theme.spacing.getSize(10)};
    }
`;

const LoginLogoutButton = styled.button`
    border: none;
    background: none;
    color: ${p => p.theme.colors.text};
`;

export const Header = () => {
    const { isAuthenticated, loginWithPopup, logout } = useAuth0();

    return (
        <Wrapper>
            <Logo />
            {isAuthenticated ? (
                <LoginLogoutButton onClick={logout}>Logout</LoginLogoutButton>
            ) : (
                <LoginLogoutButton onClick={loginWithPopup}>Login</LoginLogoutButton>
            )}
        </Wrapper>
    );
};