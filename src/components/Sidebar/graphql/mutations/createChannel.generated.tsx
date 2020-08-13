/* eslint-disable @typescript-eslint/no-unused-vars */
import * as Types from '../../../../graphql/generated';

import { IChannelFragment } from '../fragments/channel.generated';
import { gql } from '@apollo/client';
import { ChannelFragmentDoc } from '../fragments/channel.generated';
import * as Apollo from '@apollo/client';
export type ICreateChannelMutationVariables = Types.Exact<{
  input: Types.ICreateChannelInput;
}>;


export type ICreateChannelMutation = { __typename?: 'Mutation', createChannel?: Types.Maybe<(
    { __typename?: 'Channel' }
    & IChannelFragment
  )> };


export const CreateChannelDocument = gql`
    mutation createChannel($input: CreateChannelInput!) {
  createChannel(input: $input) {
    ...Channel
  }
}
    ${ChannelFragmentDoc}`;
export type ICreateChannelMutationFn = Apollo.MutationFunction<ICreateChannelMutation, ICreateChannelMutationVariables>;

/**
 * __useCreateChannelMutation__
 *
 * To run a mutation, you first call `useCreateChannelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateChannelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createChannelMutation, { data, loading, error }] = useCreateChannelMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateChannelMutation(baseOptions?: Apollo.MutationHookOptions<ICreateChannelMutation, ICreateChannelMutationVariables>) {
        return Apollo.useMutation<ICreateChannelMutation, ICreateChannelMutationVariables>(CreateChannelDocument, baseOptions);
      }
export type CreateChannelMutationHookResult = ReturnType<typeof useCreateChannelMutation>;
export type CreateChannelMutationResult = Apollo.MutationResult<ICreateChannelMutation>;
export type CreateChannelMutationOptions = Apollo.BaseMutationOptions<ICreateChannelMutation, ICreateChannelMutationVariables>;