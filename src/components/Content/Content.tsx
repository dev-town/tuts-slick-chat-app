import React from 'react';

import { useAppContext } from '../../store/AppContext';

import { Info } from './Info';
import { Message, IMessage, IUser } from './Message';
import * as SC from './Content.styled';

import { MessageInput } from './MessageInput';

const users: IUser[] = [
    {
        id: '1',
        nickname: 'Andy',
        avatar: 'http://lorempixel.com/200/200/people/1',
    },
    {
        id: '2',
        nickname: 'Lisa',
        avatar: 'http://lorempixel.com/200/200/people/2',
    }
];

const mockMessages: IMessage[] = [
    {
        id: '1',
        message: 'Hi There. How are you?',
        createdAt: new Date().toISOString(),
        user: users[0],
    },
    {
        id: '2',
        message: 'I am awesome!',
        createdAt: new Date().toISOString(),
        user: users[1],
    },
];

export const Content = () => {
    const { activeChannel } = useAppContext();
    const messagesRef = React.useRef<HTMLDivElement>(null);
    const [messages, setMessages] = React.useState(mockMessages);

    React.useEffect(() => {
        scrollMessagesToBottom();
    }, [messages]);

    const onAddMessage = (message: IMessage) => {
        setMessages([...messages, message]);
    }

    const scrollMessagesToBottom = () => {
        if (messagesRef.current) {
            messagesRef.current.scrollTo({
                top: messagesRef.current.scrollHeight,
            })
        }
    };


    if (!activeChannel) {
        return (
            <SC.NoChannelMessage>No Channel selected..</SC.NoChannelMessage>
        );
    }

    return (
        <SC.Wrapper>
            <SC.InfoWrapper>
                <Info activeChannel={activeChannel} />
            </SC.InfoWrapper>
            <SC.Messages ref={messagesRef}>
                {messages.map(item => <Message key={item.id} message={item} />)}
            </SC.Messages>
            <SC.Create>
                <MessageInput channelId={activeChannel} onAddMessage={onAddMessage} />
            </SC.Create>
        </SC.Wrapper>
    );
};