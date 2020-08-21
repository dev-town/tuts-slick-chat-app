import React from 'react';
import styled, { css } from 'styled-components';
import { MdMenu, MdClose } from 'react-icons/md';


import { Channels } from './Channels';
import { useAuth0 } from '../../../react-auth0-spa';

const Wrapper = styled.div<{ visible: boolean }>`
    height: 100%;
    padding: ${p => p.theme.spacing.getSize(2)};
    box-sizing: border-box;

    @media (max-width: ${p => p.theme.breakpoints.laptop}) {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        background: ${p => p.theme.colors.background};
        border-right: 1px solid ${p => p.theme.colors.border};
        transition: transform .3s ease;

        ${p => !p.visible && css`
            transform: translateX(-100%);
        `}
    }
`;

const Handle = styled.div`
    display: none;

    @media (max-width: ${p => p.theme.breakpoints.laptop}) {
        position: absolute;
        top: 0;
        right: -30px;
        width: 30px;
        height: ${p => p.theme.interface.layout.header}px;
        background: ${p => p.theme.colors.border};
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const Sidebar = () => {
    const { isAuthenticated } = useAuth0();
    const [isOpen, setIsOpen] = React.useState(false);

    if (!isAuthenticated) {
        return null;
    }
    
    return (
        <Wrapper visible={isOpen}>
            <Channels />
            <Handle onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                    <MdClose />
                ) : (
                    <MdMenu />
                )}
            </Handle>
        </Wrapper>
    );
};