import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import styled from 'styled-components';

const FavoriteWrapper = styled.span`
    margin-right: ${p => p.theme.spacing.getSize()};
`;

const ChannelInfo = styled.span`
    margin-bottom: ${p => p.theme.spacing.getSize()};
`;

interface IProps {
    activeChannel: string;
    hasNewMessage: boolean;
}

export const Info:React.FC<IProps> = (props) => {
    const [isFavorite, setFavorite] = React.useState(false);

    return (
        <div>
            <FavoriteWrapper>
                {isFavorite ? (
                    <FaStar onClick={() => setFavorite(!isFavorite)} />
                ) : (
                    <FaRegStar onClick={() => setFavorite(!isFavorite)} />
                )}
            </FavoriteWrapper>
            <ChannelInfo>
                ChannelId: {props.activeChannel}
                {props.hasNewMessage && <span>New messages</span>}
            </ChannelInfo>
        </div>
    );
};