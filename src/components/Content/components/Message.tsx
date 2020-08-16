import React from 'react';
import * as SC from './Message.styled';
import moment from 'moment';

export interface IUser {
    id: string;
    nickname: string;
    avatar: string;
}

export interface IMessage {
    id: string;
    message: string;
    createdAt: string;
    user: IUser;
}

interface IProps {
    message: IMessage;
}

export const Message:React.FC<IProps> = (props) => (
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