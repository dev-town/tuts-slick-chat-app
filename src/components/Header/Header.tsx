import React from 'react';
import styled from 'styled-components';

import { Logo } from './Logo';

const Wrapper = styled.div`
    display: flex;
    height: 100%;
    justify-content: flex-end;
    align-items: center;
    padding: 0 ${p => p.theme.spacing.getSize(2)};
`;

const LoginLogoutButton = styled.button`
    border: none;
    background: none;
`;

export const Header = () => {
    const login = () => {
        console.log('login');
    };

    return (
        <Wrapper>
            <Logo />
            <LoginLogoutButton onClick={() => login()}>Login</LoginLogoutButton>
        </Wrapper>
    );
};