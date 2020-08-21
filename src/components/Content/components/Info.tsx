import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import styled from 'styled-components';

import { IChannelOverviewFragment } from '../graphql/fragments/channelOverview.generated';
import { useFavoriteChannelMutation } from '../graphql/mutations/favoriteChannel.generated';

const FavoriteWrapper = styled.span`
    margin-right: ${(p) => p.theme.spacing.getSize()};
`;

const ChannelInfo = styled.span`
    margin-bottom: ${(p) => p.theme.spacing.getSize()};
`;

interface IProps {
    channel: IChannelOverviewFragment;
    hasNewMessage: boolean;
}

export const Info: React.FC<IProps> = (props) => {
    const [onFavoriteChannelMutation] = useFavoriteChannelMutation();

    const onFavoriteChannel = (isFavorite: boolean) => {
        onFavoriteChannelMutation({
            variables: { input: { id: props.channel.id, isFavorite } },
            optimisticResponse: {
                __typename: 'Mutation',
                favoriteChannel: {
                    id: props.channel.id,
                    name: props.channel.name,
                    isFavorite,
                    __typename: 'Channel',
                },
            },
        });
    };

    return (
        <div>
            <FavoriteWrapper>
                {props.channel.isFavorite ? (
                    <FaStar onClick={() => onFavoriteChannel(!props.channel.isFavorite)} />
                ) : (
                    <FaRegStar onClick={() => onFavoriteChannel(!props.channel.isFavorite)} />
                )}
            </FavoriteWrapper>
            <ChannelInfo>
                {props.channel.name}
                {props.hasNewMessage && <span>New messages</span>}
            </ChannelInfo>
        </div>
    );
};
