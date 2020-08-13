import React from 'react';
import styled from 'styled-components';

import { useSendMessageMutation } from '../graphql/mutations/sendMessage.generated';
import { IMessageFragment } from '../graphql/fragments/message.generated';

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
    onAddMessage: (message: IMessageFragment) => void;
    channelId: string;
}

export const MessageInput:React.FC<IProps> = (props) => {
    const [onSendMessageMutation] = useSendMessageMutation();

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

    const onAddMessage = async (message: string) => {
        const res = await onSendMessageMutation({
            variables: {
                input: {
                    channelId: props.channelId,
                    message,
                },
            },
        });

        if (res.data?.sendMessage) {
            props.onAddMessage(res.data?.sendMessage);
        }
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
