import React from 'react';
import styled from 'styled-components';

import { IChannelFragment } from '../graphql/fragments/channel.generated';

const Button = styled.button<{ active?: boolean }>`
    display: block;
    width: 100%;
    border: none;
    background: ${(p) => (p.active ? p.theme.colors.primary : 'none')};
    height: ${(p) => p.theme.spacing.getSize(7)};
    color: ${(p) => p.theme.colors.text};
    text-align: left;
    padding: ${(p) => p.theme.spacing.getSize()};

    :focus {
        outline: none;
    }
`;

export interface IProps {
    item: IChannelFragment;
    active?: boolean;
    onSelect: (item: IChannelFragment) => void;
}

export const Channel: React.FC<IProps> = (props) => (
    <Button active={props.active} onClick={() => props.onSelect(props.item)}>
        {props.item.name}
    </Button>
);
