import React from 'react';

import * as SC from './CreateChannel.styled';

import { IChannel } from './Channel';

interface IProps {
    onCreate: (channel: IChannel) => void;
}

export const CreateChannel:React.FC<IProps> = (props) => {
    const [value, setValue] = React.useState('');

    const onCreate = () => {
        setValue('');
        props.onCreate({
            id: (+new Date()).toString(),
            name: value,
        })
    };

    const onKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.keyCode === 13) {
            onCreate();
        }
    };

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
        </SC.Wrapper>
    );
};
