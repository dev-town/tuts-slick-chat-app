/* eslint-disable @typescript-eslint/no-unused-vars */
import * as Types from '../../../../graphql/generated';

import { gql } from '@apollo/client';
export type IChannelOverviewFragment = { __typename?: 'Channel', id: string, name: string, isFavorite: boolean };

export const ChannelOverviewFragmentDoc = gql`
    fragment ChannelOverview on Channel {
  id
  name
  isFavorite
}
    `;