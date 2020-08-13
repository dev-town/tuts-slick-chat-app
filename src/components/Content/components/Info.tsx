import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import styled from 'styled-components';

import { useFavoriteChannelMutation } from '../graphql/mutations/favoriteChannel.generated';
import { IChannelOverviewFragment } from '../graphql/fragments/channelOverview.generated';

const FavoriteWrapper = styled.span`
    margin-right: ${p => p.theme.spacing.getSize()};
`;

const ChannelInfo = styled.span`
    margin-bottom: ${p => p.theme.spacing.getSize()};
`;

const NewMessage = styled.span`
    margin-left: ${p => p.theme.spacing.getSize()};
    color: ${p => p.theme.colors.info};
`;

interface IProps {
    channel: IChannelOverviewFragment;
    hasNewMessage: boolean;
}

export const Info:React.FC<IProps> = (props) => {
    const [onFavoriteChannelMutation] = useFavoriteChannelMutation();

    const onFavoriteChannel = (isFavorite: boolean) => {
        onFavoriteChannelMutation({
            variables: { input: { id: props.channel.id, isFavorite } },
            optimisticResponse: {
                __typename: 'Mutation',
                favoriteChannel: {
                    __typename: 'Channel',
                    id: props.channel.id,
                    name: props.channel.name,
                    isFavorite,
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
                {props.hasNewMessage && <NewMessage> - New messages</NewMessage>}
            </ChannelInfo>
        </div>
    );
};
