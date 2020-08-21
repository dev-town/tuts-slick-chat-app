import React from 'react';

import * as SC from './CreateChannel.styled';

import { useCreateChannelMutation } from '../graphql/mutations/createChannel.generated';

import { GetChannelsDocument, IGetChannelsQuery } from '../graphql/queries/getChannels.generated';

interface IProps {
    onCreate: () => void;
}

export const CreateChannel: React.FC<IProps> = (props) => {
    const [value, setValue] = React.useState('');
    const [onCreateChannelMutation, { error }] = useCreateChannelMutation({
        update: (proxy, { data }) => {
            const cacheData = proxy.readQuery<IGetChannelsQuery>({
                query: GetChannelsDocument,
            });

            if (cacheData?.getChannels && data?.createChannel) {
                const checkDupes = cacheData.getChannels.find(
                    (item) => item.name === data?.createChannel?.name,
                );

                if (!checkDupes) {
                    const getChannels = [...cacheData.getChannels, data?.createChannel].sort((a, b) =>
                        a.name < b.name ? -1 : 1,
                    );
    
                    proxy.writeQuery({
                        query: GetChannelsDocument,
                        data: {
                            getChannels,
                        },
                    });
                }
            }
        },
    });

    const onCreate = () => {
        const oldValue = value;
        setValue('');

        onCreateChannelMutation({
            variables: { input: { name: value } },
            optimisticResponse: {
                __typename: 'Mutation',
                createChannel: {
                    id: new Date().toISOString(),
                    name: value,
                    isFavorite: false,
                    __typename: 'Channel',
                },
            },
        })
            .then(() => {
                props.onCreate();
            })
            .catch(() => {
                setValue(oldValue);
            });
    };

    const onKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.keyCode === 13) {
            onCreate();
        }
    };

    let badInput = false;
    if (error) {
        badInput = error.graphQLErrors.some((a: any) => a.extensions.code === 'BAD_USER_INPUT');
    }

    return (
        <SC.Wrapper>
            <SC.InputGroup>
                <SC.Input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.currentTarget.value)}
                    onKeyDown={onKeydown}
                />
                <SC.Button onClick={onCreate}>+</SC.Button>
            </SC.InputGroup>
            {badInput && <SC.ErrorMessage>Duplicate channel</SC.ErrorMessage>}
        </SC.Wrapper>
    );
};
