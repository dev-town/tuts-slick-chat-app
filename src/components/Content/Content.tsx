import React from 'react';

import { useAppContext } from '../../store/AppContext';

import { Info } from './Info';
import { Message, IMessage, IUser } from './Message';

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

const messages: IMessage[] = [
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

    if (!activeChannel) {
        return (
            <div>No Channel selected..</div>
        );
    }

    return (
        <div>
            <Info activeChannel={activeChannel} />
            {messages.map(item => <Message key={item.id} message={item} />)}
        </div>
    );
};