/* eslint-disable @typescript-eslint/no-unused-vars */
import * as Types from '../../../../graphql/generated';

import { IChannelOverviewFragment } from '../fragments/channelOverview.generated';
import { IMessage_TextMessage_Fragment, IMessage_SystemMessage_Fragment } from '../fragments/message.generated';
import { gql } from '@apollo/client';
import { ChannelOverviewFragmentDoc } from '../fragments/channelOverview.generated';
import { MessageFragmentDoc } from '../fragments/message.generated';
import * as Apollo from '@apollo/client';
export type IGetChannelByIdQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
}>;


export type IGetChannelByIdQuery = { __typename?: 'Query', getChannelByID?: Types.Maybe<(
    { __typename?: 'Channel', messages?: Types.Maybe<Array<(
      { __typename?: 'TextMessage' }
      & IMessage_TextMessage_Fragment
    ) | (
      { __typename?: 'SystemMessage' }
      & IMessage_SystemMessage_Fragment
    )>> }
    & IChannelOverviewFragment
  )> };


export const GetChannelByIdDocument = gql`
    query getChannelByID($id: String!) {
  getChannelByID(id: $id) {
    ...ChannelOverview
    messages {
      ...Message
    }
  }
}
    ${ChannelOverviewFragmentDoc}
${MessageFragmentDoc}`;

/**
 * __useGetChannelByIdQuery__
 *
 * To run a query within a React component, call `useGetChannelByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChannelByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChannelByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetChannelByIdQuery(baseOptions?: Apollo.QueryHookOptions<IGetChannelByIdQuery, IGetChannelByIdQueryVariables>) {
        return Apollo.useQuery<IGetChannelByIdQuery, IGetChannelByIdQueryVariables>(GetChannelByIdDocument, baseOptions);
      }
export function useGetChannelByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IGetChannelByIdQuery, IGetChannelByIdQueryVariables>) {
          return Apollo.useLazyQuery<IGetChannelByIdQuery, IGetChannelByIdQueryVariables>(GetChannelByIdDocument, baseOptions);
        }
export type GetChannelByIdQueryHookResult = ReturnType<typeof useGetChannelByIdQuery>;
export type GetChannelByIdLazyQueryHookResult = ReturnType<typeof useGetChannelByIdLazyQuery>;
export type GetChannelByIdQueryResult = Apollo.QueryResult<IGetChannelByIdQuery, IGetChannelByIdQueryVariables>;