import React from 'react';

import { useAppContext } from '../../../store/AppContext';
import { useAuth0 } from '../../../react-auth0-spa';

import { Info } from './Info';
import { Message } from './Message';
import * as SC from './Content.styled';

import { MessageInput } from './MessageInput';
import { useGetChannelByIdQuery } from '../graphql/queries/getChannelById.generated';
import { IMessageFragment } from '../graphql/fragments/message.generated';


export const Content = () => {
    const { isAuthenticated } = useAuth0();
    const { activeChannel } = useAppContext();
    const messagesRef = React.useRef<HTMLDivElement>(null);
    const [hasLoadedData, setLoadedData] = React.useState(false);
    const [shouldScrollData, setShouldScrollData] = React.useState(true);
    const [lastSeenMessage, setLastSeenMessage] = React.useState<IMessageFragment | null>(null);

    const { loading, data, refetch } = useGetChannelByIdQuery({
        skip: !activeChannel,
        variables: { id: activeChannel! },
        pollInterval: 5000,
    });

    const scrollMessagesToBottom = () => {
        if (messagesRef.current) {
            console.log('scrollMessagesToBottom', messagesRef.current.scrollHeight);
            messagesRef.current.scrollTo({
                top: messagesRef.current.scrollHeight,
            });
        }
    };

    // When the channel id changes, set the loaded data to false to stop the scroll
    React.useEffect(() => {
        console.log('activeChannel changed set to false -> ', hasLoadedData);
        setLoadedData(false);
    }, [activeChannel]);

    React.useEffect(() => {
        if (data && shouldScrollData) {
            scrollMessagesToBottom();
        }
    }, [data, hasLoadedData, shouldScrollData]);

    const onAddMessage = async (message: IMessageFragment) => {
        await refetch();
        scrollMessagesToBottom();
    };

    if (!isAuthenticated) {
        return <SC.Notice>You must be logged in to see messages.</SC.Notice>;
    }

    if (loading) {
        return <SC.Notice>loading...</SC.Notice>;
    }

    if (!activeChannel) {
        return <SC.Notice>No Channel selected..</SC.Notice>;
    }

    if (!data?.getChannelByID) {
        return null;
    }

    const messages = data?.getChannelByID?.messages || [];

    const onMessagesScroll = (event: React.WheelEvent<HTMLDivElement>) => {
        const { currentTarget } = event;

        if (currentTarget.scrollHeight - currentTarget.scrollTop <= currentTarget.clientHeight) {
            setShouldScrollData(true);
            setLastSeenMessage(null);
            
            if (!hasLoadedData) {
                setLoadedData(true);
            }
        } else if (shouldScrollData) {
            setShouldScrollData(false);
            setLastSeenMessage(messages[0]);
        }
    };

    const hasNewMessage = lastSeenMessage ? lastSeenMessage.createdAt !== messages[0].createdAt : false;

    return (
        <SC.Wrapper>
            <SC.InfoWrapper>
                <Info channel={data?.getChannelByID} hasNewMessage={hasNewMessage} />
            </SC.InfoWrapper>
            <SC.Messages ref={messagesRef} smooth={hasLoadedData} onWheel={onMessagesScroll}>
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
