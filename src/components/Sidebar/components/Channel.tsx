import React from 'react';
import styled from 'styled-components';

const Button = styled.button<{ active?: boolean }>`
    display: block;
    width: 100%;
    border: none;
    background: ${(p) => (p.active ? p.theme.colors.primary : 'none')};
    height: ${(p) => p.theme.spacing.getSize(7)};
    color: ${(p) => p.theme.colors.text};
    text-align: left;
    padding: ${(p) => p.theme.spacing.getSize()};
    outline: none;
`;

export interface IChannel {
    id: string;
    name: string;
}

export interface IProps {
    item: IChannel;
    active?: boolean;
    onSelect: (item: IChannel) => void;
}

export const Channel: React.FC<IProps> = (props) => (
    <Button active={props.active} onClick={() => props.onSelect(props.item)}>
        {props.item.name}
    </Button>
);
