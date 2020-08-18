/* eslint-disable @typescript-eslint/no-unused-vars */
import * as Types from '../../../../graphql/generated';

import { gql } from '@apollo/client';
export type IMessage_TextMessage_Fragment = { __typename?: 'TextMessage', message: string, id: string, createdAt: string, user: { __typename?: 'User', id: string, nickname: string, avatar: string } };

export type IMessage_SystemMessage_Fragment = { __typename?: 'SystemMessage', title: string, message: string, id: string, createdAt: string };

export type IMessageFragment = IMessage_TextMessage_Fragment | IMessage_SystemMessage_Fragment;

export const MessageFragmentDoc = gql`
    fragment Message on Message {
  id
  createdAt
  ... on TextMessage {
    message
    user {
      id
      nickname
      avatar
    }
  }
  ... on SystemMessage {
    title
    message
  }
}
    `;