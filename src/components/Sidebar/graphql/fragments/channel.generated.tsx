/* eslint-disable @typescript-eslint/no-unused-vars */
import * as Types from '../../../../graphql/generated';

import { gql } from '@apollo/client';
export type IChannelFragment = { __typename?: 'Channel', id: string, name: string, isFavorite: boolean };

export const ChannelFragmentDoc = gql`
    fragment Channel on Channel {
  id
  name
  isFavorite
}
    `;