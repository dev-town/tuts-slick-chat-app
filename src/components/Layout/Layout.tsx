import React from 'react';


export interface IProps {
    header: React.ReactElement;
    sidebar: React.ReactElement;
    content: React.ReactElement;
    footer: React.ReactElement;
}

export const Layout:React.FC<IProps> = (props) => (
    <div>
        <div>{props.header}</div>
        <div>{props.sidebar}</div>
        <div>{props.content}</div>
        <div>{props.footer}</div>
    </div>
);