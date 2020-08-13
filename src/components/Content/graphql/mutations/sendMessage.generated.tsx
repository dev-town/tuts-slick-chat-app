/* eslint-disable @typescript-eslint/no-unused-vars */
import * as Types from '../../../../graphql/generated';

import { IMessage_TextMessage_Fragment, IMessage_SystemMessage_Fragment } from '../fragments/message.generated';
import { gql } from '@apollo/client';
import { MessageFragmentDoc } from '../fragments/message.generated';
import * as Apollo from '@apollo/client';
export type ISendMessageMutationVariables = Types.Exact<{
  input: Types.ISendMessageInput;
}>;


export type ISendMessageMutation = { __typename?: 'Mutation', sendMessage?: Types.Maybe<(
    { __typename?: 'TextMessage' }
    & IMessage_TextMessage_Fragment
  ) | (
    { __typename?: 'SystemMessage' }
    & IMessage_SystemMessage_Fragment
  )> };


export const SendMessageDocument = gql`
    mutation sendMessage($input: SendMessageInput!) {
  sendMessage(input: $input) {
    ...Message
  }
}
    ${MessageFragmentDoc}`;
export type ISendMessageMutationFn = Apollo.MutationFunction<ISendMessageMutation, ISendMessageMutationVariables>;

/**
 * __useSendMessageMutation__
 *
 * To run a mutation, you first call `useSendMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendMessageMutation, { data, loading, error }] = useSendMessageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSendMessageMutation(baseOptions?: Apollo.MutationHookOptions<ISendMessageMutation, ISendMessageMutationVariables>) {
        return Apollo.useMutation<ISendMessageMutation, ISendMessageMutationVariables>(SendMessageDocument, baseOptions);
      }
export type SendMessageMutationHookResult = ReturnType<typeof useSendMessageMutation>;
export type SendMessageMutationResult = Apollo.MutationResult<ISendMessageMutation>;
export type SendMessageMutationOptions = Apollo.BaseMutationOptions<ISendMessageMutation, ISendMessageMutationVariables>;