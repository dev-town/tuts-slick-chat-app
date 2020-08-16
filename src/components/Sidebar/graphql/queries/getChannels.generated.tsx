/* eslint-disable @typescript-eslint/no-unused-vars */
import * as Types from '../../../../graphql/generated';

import { IChannelFragment } from '../fragments/channel.generated';
import { gql } from '@apollo/client';
import { ChannelFragmentDoc } from '../fragments/channel.generated';
import * as Apollo from '@apollo/client';
export type IGetChannelsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type IGetChannelsQuery = { __typename?: 'Query', getChannels: Array<(
    { __typename?: 'Channel' }
    & IChannelFragment
  )> };


export const GetChannelsDocument = gql`
    query getChannels {
  getChannels {
    ...Channel
  }
}
    ${ChannelFragmentDoc}`;

/**
 * __useGetChannelsQuery__
 *
 * To run a query within a React component, call `useGetChannelsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChannelsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChannelsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetChannelsQuery(baseOptions?: Apollo.QueryHookOptions<IGetChannelsQuery, IGetChannelsQueryVariables>) {
        return Apollo.useQuery<IGetChannelsQuery, IGetChannelsQueryVariables>(GetChannelsDocument, baseOptions);
      }
export function useGetChannelsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IGetChannelsQuery, IGetChannelsQueryVariables>) {
          return Apollo.useLazyQuery<IGetChannelsQuery, IGetChannelsQueryVariables>(GetChannelsDocument, baseOptions);
        }
export type GetChannelsQueryHookResult = ReturnType<typeof useGetChannelsQuery>;
export type GetChannelsLazyQueryHookResult = ReturnType<typeof useGetChannelsLazyQuery>;
export type GetChannelsQueryResult = Apollo.QueryResult<IGetChannelsQuery, IGetChannelsQueryVariables>;