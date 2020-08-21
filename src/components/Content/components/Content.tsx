import React from 'react';

import { useAppContext } from '../../../store/AppContext';

import { Info } from './Info';
import { Message } from './Message';
import * as SC from './Content.styled';

import { MessageInput } from './MessageInput';

import { useGetChannelByIdQuery } from '../graphql/queries/getChannelById.generated';
import { IMessageFragment } from '../graphql/fragments/message.generated';

export const Content = () => {
    const { activeChannel } = useAppContext();
    const messagesRef = React.useRef<HTMLDivElement>(null);
    const [shouldScrollData, setShouldScrollData] = React.useState(true);
    const [lastSeenMessage, setLastSeenMessage] = React.useState<IMessageFragment | null>(null);

    const { data, refetch } = useGetChannelByIdQuery({
        skip: !activeChannel,
        variables: { id: activeChannel! },
        fetchPolicy: 'cache-and-network',
        // pollInterval: 3000,
    });

    React.useEffect(() => {
        if (data && shouldScrollData) {
            scrollMessagesToBottom();
        }
    }, [data, shouldScrollData]);

    const onAddMessage = async (message: IMessageFragment) => {
        await refetch();
        scrollMessagesToBottom();
    };

    const scrollMessagesToBottom = () => {
        if (messagesRef.current) {
            messagesRef.current.scrollTo({
                top: messagesRef.current.scrollHeight,
            });
        }
    };

    const messages = data?.getChannelByID?.messages || [];

    const onMessagesScroll = (event: React.WheelEvent<HTMLDivElement>) => {
        const { currentTarget } = event;

        if (currentTarget.scrollHeight - currentTarget.scrollTop <= currentTarget.clientHeight) {
            setShouldScrollData(true);
            setLastSeenMessage(null);
        } else if (shouldScrollData) {
            setShouldScrollData(false);
            setLastSeenMessage(messages[0]);
        }
    };
    
    const hasNewMessage = lastSeenMessage
        ? lastSeenMessage.createdAt !== messages[0].createdAt
        : false;

    if (!activeChannel) {
        return <SC.NoChannelMessage>No Channel selected..</SC.NoChannelMessage>;
    }

    if (!data?.getChannelByID) {
        return null;
    }

    return (
        <SC.Wrapper>
            <SC.InfoWrapper>
                <Info channel={data?.getChannelByID} hasNewMessage={hasNewMessage} />
            </SC.InfoWrapper>
            <SC.Messages ref={messagesRef} onWheel={onMessagesScroll}>
                {messages.map((item) => (
                    <Message key={item.id} message={item} />
                )).reverse()}
            </SC.Messages>
            <SC.Create>
                <MessageInput channelId={activeChannel} onAddMessage={onAddMessage} />
            </SC.Create>
        </SC.Wrapper>
    );
};
