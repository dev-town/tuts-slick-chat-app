import React from 'react';
import styled from 'styled-components';

import { useAppContext } from '../../../store/AppContext';

import { Channel, IChannel } from './Channel';
import { CreateChannel } from './CreateChannel';

import { useGetChannelsQuery } from '../graphql/queries/getChannels.generated';

const Wrapper = styled.div`
    padding: ${(p) => p.theme.spacing.getSize(2)};
`;

export const Channels = () => {
    const { data, refetch } = useGetChannelsQuery();

    const store = useAppContext();

    const onSelect = (item: IChannel) => {
        store.setActiveChannel(item.id);
    };

    const onCreate = () => {
        refetch();
    };

    return (
        <Wrapper>
            {data?.getChannels.map((item) => (
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