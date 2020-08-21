import React from 'react';
import styled from 'styled-components';

import { useSendMessageMutation } from '../graphql/mutations/sendMessage.generated';
import { IMessageFragment } from '../graphql/fragments/message.generated';
import { GetChannelByIdDocument, IGetChannelByIdQuery } from '../graphql/queries/getChannelById.generated';

import { useAuth0 } from '../../../react-auth0-spa';

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

export const MessageInput: React.FC<IProps> = (props) => {
    const { user } = useAuth0();
    const inputRef = React.useRef<HTMLTextAreaElement>(null);
    const [value, setValue] = React.useState('');
    const [onSendMessageMutation] = useSendMessageMutation({
        update: (proxy, { data }) => {
            const cacheKey = {
                query: GetChannelByIdDocument,
                variables: {
                    id: props.channelId,
                }
            };

            const cacheData = proxy.readQuery<IGetChannelByIdQuery>(cacheKey);

            if (cacheData?.getChannelByID) {
                proxy.writeQuery({
                    ...cacheKey,
                    data: {
                        getChannelByID: {
                            ...cacheData.getChannelByID,
                            messages: [
                                data?.sendMessage,
                                ...cacheData.getChannelByID.messages,
                            ]
                        }
                    }
                })
            }
        },
    });

    React.useEffect(() => {
        focusTextArea();
    }, []);

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
            optimisticResponse: {
                __typename: 'Mutation',
                sendMessage: {
                    id: new Date().toISOString(),
                    createdAt: new Date().toISOString(),
                    message,
                    user: {
                        id: user?.sub || '',
                        nickname: user?.nickname || '',
                        avatar: user?.picture || '',
                        __typename: 'User',
                    },
                    __typename: 'TextMessage',
                },
            },
        });

        if (res.data?.sendMessage) {
            props.onAddMessage(res.data.sendMessage);
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
