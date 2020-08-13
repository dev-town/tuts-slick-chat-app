import React from 'react';
import styled from 'styled-components';

import { useAppContext } from '../../../store/AppContext';
import { useGetChannelsQuery } from '../graphql/queries/getChannels.generated';
import { IChannelFragment } from '../graphql/fragments/channel.generated';

import { Channel } from './Channel';
import { CreateChannel } from './CreateChannel';

const Wrapper = styled.div`
    padding: ${(p) => p.theme.spacing.getSize(2)};

    display: flex;
    flex-direction: column;
    height: 100%;
`;

const ChannelsWrapper = styled.div`
    @media (max-width: ${p => p.theme.breakpoints.laptop}) {
    }
    overflow: scroll;
    max-height: max-content;
`;

export const Channels = () => {
    const { data, loading, refetch } = useGetChannelsQuery();
    const store = useAppContext();

    const onSelect = (item: IChannelFragment) => {
        store.setActiveChannel(item.id);
    };

    const onCreate = () => {
        refetch();
    };

    return (
        <Wrapper>
            {loading && (<span>Loading...</span>)}
            <ChannelsWrapper>
                {data?.getChannels.map((item) => (
                    <Channel
                        key={item.id}
                        item={item}
                        onSelect={onSelect}
                        active={item.id === store.activeChannel}
                    />
                ))}
            </ChannelsWrapper>
            <CreateChannel onCreate={onCreate} />
        </Wrapper>
    );
};
