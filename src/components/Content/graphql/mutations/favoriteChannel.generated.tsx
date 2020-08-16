/* eslint-disable @typescript-eslint/no-unused-vars */
import * as Types from '../../../../graphql/generated';

import { IChannelOverviewFragment } from '../fragments/channelOverview.generated';
import { gql } from '@apollo/client';
import { ChannelOverviewFragmentDoc } from '../fragments/channelOverview.generated';
import * as Apollo from '@apollo/client';
export type IFavoriteChannelMutationVariables = Types.Exact<{
  input?: Types.Maybe<Types.IFavoriteChannelInput>;
}>;


export type IFavoriteChannelMutation = { __typename?: 'Mutation', favoriteChannel?: Types.Maybe<(
    { __typename?: 'Channel' }
    & IChannelOverviewFragment
  )> };


export const FavoriteChannelDocument = gql`
    mutation favoriteChannel($input: FavoriteChannelInput) {
  favoriteChannel(input: $input) {
    ...ChannelOverview
  }
}
    ${ChannelOverviewFragmentDoc}`;
export type IFavoriteChannelMutationFn = Apollo.MutationFunction<IFavoriteChannelMutation, IFavoriteChannelMutationVariables>;

/**
 * __useFavoriteChannelMutation__
 *
 * To run a mutation, you first call `useFavoriteChannelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFavoriteChannelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [favoriteChannelMutation, { data, loading, error }] = useFavoriteChannelMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useFavoriteChannelMutation(baseOptions?: Apollo.MutationHookOptions<IFavoriteChannelMutation, IFavoriteChannelMutationVariables>) {
        return Apollo.useMutation<IFavoriteChannelMutation, IFavoriteChannelMutationVariables>(FavoriteChannelDocument, baseOptions);
      }
export type FavoriteChannelMutationHookResult = ReturnType<typeof useFavoriteChannelMutation>;
export type FavoriteChannelMutationResult = Apollo.MutationResult<IFavoriteChannelMutation>;
export type FavoriteChannelMutationOptions = Apollo.BaseMutationOptions<IFavoriteChannelMutation, IFavoriteChannelMutationVariables>;