import React from 'react';
import styled, { css } from 'styled-components';
import { MdMenu, MdClose } from 'react-icons/md';

import { useAuth0 } from '../../../react-auth0-spa';
import { Channels } from './Channels';


const Wrapper = styled.div<{visible?: boolean}>`
    height: 100%;
    padding: ${(p) => p.theme.spacing.getSize(2)};
    box-sizing: content-box;
    
    display: flex;
    flex-direction: column;
    height: calc(100vh - ${p => p.theme.interface.content.info + p.theme.interface.content.create + (p.theme.spacing.base * 2)}px);

    @media (max-width: ${p => p.theme.breakpoints.laptop}) {
        /* Mobile styles */
        position: fixed;
        top: 0;
        left: 0;
        
        height: calc(100vh - ${p => p.theme.interface.layout.footer}px);

        background: ${(p) => p.theme.colors.backgroundSecondary};
        border-right: 1px solid ${(p) => p.theme.colors.border};
        transition: transform 0.3s ease;
        box-sizing: border-box;

        ${p => !p.visible && css`
            transform: translateX(-100%);
        `}
    }
`;

const Handle = styled.div`
    display: none;
    
    @media (max-width: ${p => p.theme.breakpoints.laptop}) {
        display: block;
        position: absolute;
        right: -30px;
        height: 40px;
        width: 30px;
        top: 0;

        display: flex;
        align-items: center;
        justify-content: center;
        border-right: 1px solid ${(p) => p.theme.colors.border};
        box-sizing: border-box;
        background: ${(p) => p.theme.colors.border};
    }
`;


export const Sidebar = () => {
    const [isOpen, setOpen] = React.useState(false);
    const { isAuthenticated } = useAuth0();

    if (!isAuthenticated) {
        return null;
    }

    return (
        <Wrapper visible={isOpen}>
            <Channels />
            <Handle onClick={() => setOpen(!isOpen)}>
                {isOpen ? <MdClose /> : <MdMenu />}
            </Handle>
        </Wrapper>
    );
};
