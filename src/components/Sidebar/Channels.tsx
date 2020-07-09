import React from 'react';
import styled from 'styled-components';

import { Channel, IChannel } from './Channel';
import { CreateChannel } from './CreateChannel';

const data = [
    { id: '1', name: 'channel 1'},
    { id: '2', name: 'channel 2'},
    { id: '3', name: 'channel 3'},
];

const Wrapper = styled.div`
    padding: ${p => p.theme.spacing.getSize(2)};
`;

export const Channels = () => {
    const [activeItem, setActiveItem] = React.useState<null | string>(null);
    const [channels, updateChannels] = React.useState(data);

    const onSelect = (item: IChannel) => {
        setActiveItem(item.id);
    };

    const onCreate = (channel: IChannel) => {
        updateChannels([...channels, channel]);
    };

    return (
        <Wrapper>
            {channels.map((item) => <Channel key={item.id} item={item} onSelect={onSelect} active={item.id === activeItem} />)}
            <CreateChannel onCreate={onCreate} />
        </Wrapper>
    );
};