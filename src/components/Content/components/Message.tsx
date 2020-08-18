import React from 'react';
import * as SC from './Message.styled';
import moment from 'moment';

import { IMessageFragment } from '../graphql/fragments/message.generated';

interface IProps {
    message: IMessageFragment;
}

export const Message:React.FC<IProps> = (props) => {
    
    if (props.message.__typename === 'TextMessage') {
        return (
            <SC.Wrapper>
                <SC.Avatar src={props.message.user.avatar} />
                <SC.Data>
                    <SC.Meta>
                        <SC.Name>{props.message.user.nickname}</SC.Name>
                        <SC.Time>{moment(props.message.createdAt).format('h:mm a')}</SC.Time>
                    </SC.Meta>
                    <SC.Content>
                        {props.message.message}
                    </SC.Content>
                </SC.Data>
            </SC.Wrapper>
        );
    }

    return null;
}