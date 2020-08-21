import React from 'react';
import styled from 'styled-components';

import { useAppContext } from '../../../store/AppContext';

import { Channel, IChannel } from './Channel';
import { CreateChannel } from './CreateChannel';

import { useGetChannelsQuery } from '../graphql/queries/getChannels.generated';

const Wrapper = styled.div`
    padding: ${(p) => p.theme.spacing.getSize(2)};

    display: flex;
    flex-direction: column;
    height: 100%;
`;

const ChannelWrapper = styled.div`
    overflow: scroll;
    max-height: max-content;
`;

const Notice = styled.div`
    text-align: center;
    color: ${p => p.theme.colors.info};
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
            <ChannelWrapper>
                {!data?.getChannels.length && (
                    <Notice>No channels available.</Notice>
                )}
                {data?.getChannels.map((item) => (
                    <Channel
                        key={item.id}
                        item={item}
                        onSelect={onSelect}
                        active={item.id === store.activeChannel}
                    />
                ))}
            </ChannelWrapper>
            <CreateChannel onCreate={onCreate} />
        </Wrapper>
    );
};
