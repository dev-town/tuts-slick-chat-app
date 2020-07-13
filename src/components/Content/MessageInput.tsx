import React from 'react';
import styled from 'styled-components';

import { IMessage } from './Message';

const Textarea = styled.textarea`
    display: block;
    height: 100%;
    width: 100%;

    padding: ${(p) => p.theme.spacing.getSize(2)};
    border: 1px solid ${(p) => p.theme.colors.border};
    outline: none;
    background: ${(p) => p.theme.colors.background};
    color: ${(p) => p.theme.colors.text};
    box-sizing: border-box;
`;

interface IProps {
    onAddMessage: (message: IMessage) => void;
    channelId: string;
}

export const MessageInput:React.FC<IProps> = (props) => {
    const inputRef = React.useRef<HTMLTextAreaElement>(null);
    const [value, setValue] = React.useState('');

    React.useEffect(() => {
        focusTextArea();
    },[]);

    React.useEffect(() => {
        focusTextArea();
    }, [props.channelId]);


    const focusTextArea = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    const onKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.keyCode === 13 && value) {
            event.preventDefault();
            onAddMessage(value);
            setValue('');
        }
    };

    const onAddMessage = (message: string) => {
        const newMessage: IMessage = {
            id: new Date().toISOString(),
            message,
            createdAt: new Date().toISOString(),
            user: {
                id: '1',
                nickname: 'Andy',
                avatar: 'http://lorempixel.com/200/200/people/1',
            }
        };

        props.onAddMessage(newMessage);
    };

    return (
        <Textarea
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.currentTarget.value)}
            onKeyDown={onKeyDown}
        />
    );
};
