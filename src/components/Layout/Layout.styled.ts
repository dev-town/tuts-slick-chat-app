import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100vh;
    display: grid;

    grid-template-columns: 200px auto;
    grid-template-rows: 40px calc(100vh - 70px) 30px;
    grid-template-areas:
        'header header'
        'sidebar content'
        'footer footer';
    background: ${p => p.theme.colors.background};
    color: ${p => p.theme.colors.text};
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