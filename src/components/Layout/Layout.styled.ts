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
`;

export const Header = styled.div`
    grid-area: header;
    background: red;
`;

export const Sidebar = styled.div`
    grid-area: sidebar;
    background: grey;
`;

export const Content = styled.div`
    grid-area: content;
`;

export const Footer = styled.div`
    grid-area: footer;
    background: grey;
`;