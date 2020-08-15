export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type FieldWrapper<T> = T;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type IQuery = {
  __typename?: 'Query';
  placeholder?: Maybe<FieldWrapper<Scalars['Int']>>;
  me?: Maybe<FieldWrapper<IUser>>;
  getChannels: Array<FieldWrapper<IChannel>>;
  getChannelByID?: Maybe<FieldWrapper<IChannel>>;
};


export type IQueryGetChannelByIdArgs = {
  id: Scalars['String'];
};

export type ISubscription = {
  __typename?: 'Subscription';
  placeholder?: Maybe<FieldWrapper<Scalars['Int']>>;
};

export type IMutation = {
  __typename?: 'Mutation';
  placeholder?: Maybe<FieldWrapper<Scalars['Int']>>;
  createChannel?: Maybe<FieldWrapper<IChannel>>;
  favoriteChannel?: Maybe<FieldWrapper<IChannel>>;
  sendMessage?: Maybe<FieldWrapper<IMessage>>;
};


export type IMutationCreateChannelArgs = {
  input?: Maybe<ICreateChannelInput>;
};


export type IMutationFavoriteChannelArgs = {
  input?: Maybe<IFavoriteChannelInput>;
};


export type IMutationSendMessageArgs = {
  input?: Maybe<ISendMessageInput>;
};

export type IUser = {
  __typename?: 'User';
  id: FieldWrapper<Scalars['ID']>;
  nickname: FieldWrapper<Scalars['String']>;
  avatar: FieldWrapper<Scalars['String']>;
};

export type IChannel = {
  __typename?: 'Channel';
  id: FieldWrapper<Scalars['ID']>;
  name: FieldWrapper<Scalars['String']>;
  isFavorite: FieldWrapper<Scalars['Boolean']>;
  messages?: Maybe<Array<FieldWrapper<IMessage>>>;
};

export type ICreateChannelInput = {
  name: Scalars['String'];
};

export type IFavoriteChannelInput = {
  id: Scalars['ID'];
  isFavorite: Scalars['Boolean'];
};

export type IMessage = {
  id: FieldWrapper<Scalars['ID']>;
  type: FieldWrapper<Scalars['String']>;
  createdAt: FieldWrapper<Scalars['String']>;
};

export type ITextMessage = IMessage & {
  __typename?: 'TextMessage';
  id: FieldWrapper<Scalars['ID']>;
  type: FieldWrapper<Scalars['String']>;
  createdAt: FieldWrapper<Scalars['String']>;
  user: FieldWrapper<IUser>;
  message: FieldWrapper<Scalars['String']>;
};

export type ISystemMessage = IMessage & {
  __typename?: 'SystemMessage';
  id: FieldWrapper<Scalars['ID']>;
  type: FieldWrapper<Scalars['String']>;
  createdAt: FieldWrapper<Scalars['String']>;
  title: FieldWrapper<Scalars['String']>;
  message: FieldWrapper<Scalars['String']>;
};

export type ISendMessageInput = {
  channelId: Scalars['ID'];
  message: Scalars['String'];
};

export enum ICacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

