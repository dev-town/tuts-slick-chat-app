import React from 'react';

import * as SC from './CreateChannel.styled';

import { useCreateChannelMutation } from '../graphql/mutations/createChannel.generated';

interface IProps {
    onCreate: () => void;
}

export const CreateChannel:React.FC<IProps> = (props) => {
    const [value, setValue] = React.useState('');
    const [onCreateChannelMutation, { error }] = useCreateChannelMutation();

    const onCreate = () => {
        onCreateChannelMutation({
            variables: { input: { name: value } },
        }).then(() => {
            setValue('');
            props.onCreate();
        }).catch(() => {});
    };

    const onKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.keyCode === 13) {
            onCreate();
        }
    };

    let badInput = false;
    if (error) {
        badInput = error.graphQLErrors.some((a: any) => a.extensions.code === 'BAD_USER_INPUT')
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
