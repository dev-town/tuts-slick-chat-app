import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100vh;
    display: grid;

    grid-template-columns: ${p => p.theme.interface.layout.sidebar}px auto;
    grid-template-rows: ${p => p.theme.interface.layout.header}px calc(100vh - ${p => p.theme.interface.layout.header + p.theme.interface.layout.footer}px) ${p => p.theme.interface.layout.footer}px;
    grid-template-areas:
        'header header'
        'sidebar content'
        'footer footer';
    background: ${p => p.theme.colors.background};
    color: ${p => p.theme.colors.text};

    @media (max-width: ${p => p.theme.breakpoints.laptop}) {
        grid-template-columns: 100%;
        grid-template-areas: 
            'header'
            'content'
            'footer';
    }
`;

export const Header = styled.div`
    grid-area: header;
    border-bottom: 1px solid ${p => p.theme.colors.border};
`;

export const Sidebar = styled.div`
    grid-area: sidebar;
    border-right: 1px solid ${p => p.theme.colors.border};
`;

export const Content = styled.div`
    grid-area: content;
`;

export const Footer = styled.div`
    grid-area: footer;
    border-top: 1px solid ${p => p.theme.colors.border};
`;