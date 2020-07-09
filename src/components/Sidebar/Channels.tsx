import React from 'react';
import styled from 'styled-components';

import { useAppContext } from '../../store/AppContext';

import { Channel, IChannel } from './Channel';
import { CreateChannel } from './CreateChannel';

const data = [
    { id: '1', name: 'channel 1' },
    { id: '2', name: 'channel 2' },
    { id: '3', name: 'channel 3' },
];

const Wrapper = styled.div`
    padding: ${(p) => p.theme.spacing.getSize(2)};
`;

export const Channels = () => {
    const [channels, updateChannels] = React.useState(data);
    const store = useAppContext();

    const onSelect = (item: IChannel) => {
        store.setActiveChannel(item.id);
    };

    const onCreate = (channel: IChannel) => {
        updateChannels([...channels, channel]);
    };

    return (
        <Wrapper>
            {channels.map((item) => (
                <Channel
                    key={item.id}
                    item={item}
                    onSelect={onSelect}
                    active={item.id === store.activeChannel}
                />
            ))}
            <CreateChannel onCreate={onCreate} />
        </Wrapper>
    );
};
