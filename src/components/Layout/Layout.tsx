import React from 'react';

import * as SC from './Layout.styled';

export interface IProps {
    header: React.ReactElement;
    sidebar: React.ReactElement;
    content: React.ReactElement;
    footer: React.ReactElement;
}

export const Layout:React.FC<IProps> = (props) => (
    <SC.Wrapper>
        <SC.Header>{props.header}</SC.Header>
        <SC.Sidebar>{props.sidebar}</SC.Sidebar>
        <SC.Content>{props.content}</SC.Content>
        <SC.Footer>{props.footer}</SC.Footer>
    </SC.Wrapper>
);