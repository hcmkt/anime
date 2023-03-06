import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type AnnictActivity = AnnictNode & {
  __typename?: 'Activity';
  annictId: Scalars['Int'];
  /** ID of the object. */
  id: Scalars['ID'];
  user: AnnictUser;
};

export enum AnnictActivityAction {
  Create = 'CREATE',
}

/** The connection type for Activity. */
export type AnnictActivityConnection = {
  __typename?: 'ActivityConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AnnictActivityEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<AnnictActivity>>>;
  /** Information to aid in pagination. */
  pageInfo: AnnictPageInfo;
};

/** An edge in a connection. */
export type AnnictActivityEdge = {
  __typename?: 'ActivityEdge';
  action: AnnictActivityAction;
  annictId: Scalars['Int'];
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  item?: Maybe<AnnictActivityItem>;
  /**
   * Deprecated: Use `item` instead.
   * @deprecated Use `item` instead.
   */
  node?: Maybe<AnnictActivityItem>;
  user: AnnictUser;
};

export type AnnictActivityItem =
  | AnnictMultipleRecord
  | AnnictRecord
  | AnnictReview
  | AnnictStatus;

export type AnnictActivityOrder = {
  direction: AnnictOrderDirection;
  field: AnnictActivityOrderField;
};

export enum AnnictActivityOrderField {
  CreatedAt = 'CREATED_AT',
}

export type AnnictCast = AnnictNode & {
  __typename?: 'Cast';
  annictId: Scalars['Int'];
  character: AnnictCharacter;
  id: Scalars['ID'];
  name: Scalars['String'];
  nameEn: Scalars['String'];
  person: AnnictPerson;
  sortNumber: Scalars['Int'];
  work: AnnictWork;
};

/** The connection type for Cast. */
export type AnnictCastConnection = {
  __typename?: 'CastConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AnnictCastEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<AnnictCast>>>;
  /** Information to aid in pagination. */
  pageInfo: AnnictPageInfo;
};

/** An edge in a connection. */
export type AnnictCastEdge = {
  __typename?: 'CastEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<AnnictCast>;
};

export type AnnictCastOrder = {
  direction: AnnictOrderDirection;
  field: AnnictCastOrderField;
};

export enum AnnictCastOrderField {
  CreatedAt = 'CREATED_AT',
  SortNumber = 'SORT_NUMBER',
}

export type AnnictChannel = AnnictNode & {
  __typename?: 'Channel';
  annictId: Scalars['Int'];
  channelGroup: AnnictChannelGroup;
  id: Scalars['ID'];
  name: Scalars['String'];
  programs?: Maybe<AnnictProgramConnection>;
  published: Scalars['Boolean'];
  scChid: Scalars['Int'];
};

export type AnnictChannelProgramsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The connection type for Channel. */
export type AnnictChannelConnection = {
  __typename?: 'ChannelConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AnnictChannelEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<AnnictChannel>>>;
  /** Information to aid in pagination. */
  pageInfo: AnnictPageInfo;
};

/** An edge in a connection. */
export type AnnictChannelEdge = {
  __typename?: 'ChannelEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<AnnictChannel>;
};

export type AnnictChannelGroup = AnnictNode & {
  __typename?: 'ChannelGroup';
  annictId: Scalars['Int'];
  channels?: Maybe<AnnictChannelConnection>;
  id: Scalars['ID'];
  name: Scalars['String'];
  sortNumber: Scalars['Int'];
};

export type AnnictChannelGroupChannelsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type AnnictCharacter = AnnictNode & {
  __typename?: 'Character';
  age: Scalars['String'];
  ageEn: Scalars['String'];
  annictId: Scalars['Int'];
  birthday: Scalars['String'];
  birthdayEn: Scalars['String'];
  bloodType: Scalars['String'];
  bloodTypeEn: Scalars['String'];
  description: Scalars['String'];
  descriptionEn: Scalars['String'];
  descriptionSource: Scalars['String'];
  descriptionSourceEn: Scalars['String'];
  favoriteCharactersCount: Scalars['Int'];
  height: Scalars['String'];
  heightEn: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  nameEn: Scalars['String'];
  nameKana: Scalars['String'];
  nationality: Scalars['String'];
  nationalityEn: Scalars['String'];
  nickname: Scalars['String'];
  nicknameEn: Scalars['String'];
  occupation: Scalars['String'];
  occupationEn: Scalars['String'];
  series: AnnictSeries;
  weight: Scalars['String'];
  weightEn: Scalars['String'];
};

/** The connection type for Character. */
export type AnnictCharacterConnection = {
  __typename?: 'CharacterConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AnnictCharacterEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<AnnictCharacter>>>;
  /** Information to aid in pagination. */
  pageInfo: AnnictPageInfo;
};

/** An edge in a connection. */
export type AnnictCharacterEdge = {
  __typename?: 'CharacterEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<AnnictCharacter>;
};

export type AnnictCharacterOrder = {
  direction: AnnictOrderDirection;
  field: AnnictCharacterOrderField;
};

export enum AnnictCharacterOrderField {
  CreatedAt = 'CREATED_AT',
  FavoriteCharactersCount = 'FAVORITE_CHARACTERS_COUNT',
}

/** Autogenerated input type of CreateRecord */
export type AnnictCreateRecordInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  episodeId: Scalars['ID'];
  ratingState?: InputMaybe<AnnictRatingState>;
  shareFacebook?: InputMaybe<Scalars['Boolean']>;
  shareTwitter?: InputMaybe<Scalars['Boolean']>;
};

/** Autogenerated return type of CreateRecord */
export type AnnictCreateRecordPayload = {
  __typename?: 'CreateRecordPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  record?: Maybe<AnnictRecord>;
};

/** Autogenerated input type of CreateReview */
export type AnnictCreateReviewInput = {
  body: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  ratingAnimationState?: InputMaybe<AnnictRatingState>;
  ratingCharacterState?: InputMaybe<AnnictRatingState>;
  ratingMusicState?: InputMaybe<AnnictRatingState>;
  ratingOverallState?: InputMaybe<AnnictRatingState>;
  ratingStoryState?: InputMaybe<AnnictRatingState>;
  shareFacebook?: InputMaybe<Scalars['Boolean']>;
  shareTwitter?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  workId: Scalars['ID'];
};

/** Autogenerated return type of CreateReview */
export type AnnictCreateReviewPayload = {
  __typename?: 'CreateReviewPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  review?: Maybe<AnnictReview>;
};

/** Autogenerated input type of DeleteRecord */
export type AnnictDeleteRecordInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  recordId: Scalars['ID'];
};

/** Autogenerated return type of DeleteRecord */
export type AnnictDeleteRecordPayload = {
  __typename?: 'DeleteRecordPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  episode?: Maybe<AnnictEpisode>;
};

/** Autogenerated input type of DeleteReview */
export type AnnictDeleteReviewInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  reviewId: Scalars['ID'];
};

/** Autogenerated return type of DeleteReview */
export type AnnictDeleteReviewPayload = {
  __typename?: 'DeleteReviewPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  work?: Maybe<AnnictWork>;
};

/** An episode of a work */
export type AnnictEpisode = AnnictNode & {
  __typename?: 'Episode';
  annictId: Scalars['Int'];
  id: Scalars['ID'];
  nextEpisode?: Maybe<AnnictEpisode>;
  number?: Maybe<Scalars['Int']>;
  numberText?: Maybe<Scalars['String']>;
  prevEpisode?: Maybe<AnnictEpisode>;
  recordCommentsCount: Scalars['Int'];
  records?: Maybe<AnnictRecordConnection>;
  recordsCount: Scalars['Int'];
  satisfactionRate?: Maybe<Scalars['Float']>;
  sortNumber: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  viewerDidTrack: Scalars['Boolean'];
  viewerRecordsCount: Scalars['Int'];
  work: AnnictWork;
};

/** An episode of a work */
export type AnnictEpisodeRecordsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  hasComment?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AnnictRecordOrder>;
};

/** The connection type for Episode. */
export type AnnictEpisodeConnection = {
  __typename?: 'EpisodeConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AnnictEpisodeEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<AnnictEpisode>>>;
  /** Information to aid in pagination. */
  pageInfo: AnnictPageInfo;
};

/** An edge in a connection. */
export type AnnictEpisodeEdge = {
  __typename?: 'EpisodeEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<AnnictEpisode>;
};

export type AnnictEpisodeOrder = {
  direction: AnnictOrderDirection;
  field: AnnictEpisodeOrderField;
};

export enum AnnictEpisodeOrderField {
  CreatedAt = 'CREATED_AT',
  SortNumber = 'SORT_NUMBER',
}

export type AnnictLibraryEntry = AnnictNode & {
  __typename?: 'LibraryEntry';
  id: Scalars['ID'];
  nextEpisode?: Maybe<AnnictEpisode>;
  nextProgram?: Maybe<AnnictProgram>;
  note: Scalars['String'];
  status?: Maybe<AnnictStatus>;
  user: AnnictUser;
  work: AnnictWork;
};

/** The connection type for LibraryEntry. */
export type AnnictLibraryEntryConnection = {
  __typename?: 'LibraryEntryConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AnnictLibraryEntryEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<AnnictLibraryEntry>>>;
  /** Information to aid in pagination. */
  pageInfo: AnnictPageInfo;
};

/** An edge in a connection. */
export type AnnictLibraryEntryEdge = {
  __typename?: 'LibraryEntryEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<AnnictLibraryEntry>;
};

export type AnnictLibraryEntryOrder = {
  direction: AnnictOrderDirection;
  field: AnnictLibraryEntryOrderField;
};

export enum AnnictLibraryEntryOrderField {
  /** 最後に記録またはスキップした日時 */
  LastTrackedAt = 'LAST_TRACKED_AT',
}

/** Media of anime */
export enum AnnictMedia {
  Movie = 'MOVIE',
  Other = 'OTHER',
  Ova = 'OVA',
  Tv = 'TV',
  Web = 'WEB',
}

export type AnnictMultipleRecord = AnnictNode & {
  __typename?: 'MultipleRecord';
  annictId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  records?: Maybe<AnnictRecordConnection>;
  user: AnnictUser;
  work: AnnictWork;
};

export type AnnictMultipleRecordRecordsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type AnnictMutation = {
  __typename?: 'Mutation';
  createRecord?: Maybe<AnnictCreateRecordPayload>;
  createReview?: Maybe<AnnictCreateReviewPayload>;
  deleteRecord?: Maybe<AnnictDeleteRecordPayload>;
  deleteReview?: Maybe<AnnictDeleteReviewPayload>;
  updateRecord?: Maybe<AnnictUpdateRecordPayload>;
  updateReview?: Maybe<AnnictUpdateReviewPayload>;
  updateStatus?: Maybe<AnnictUpdateStatusPayload>;
};

export type AnnictMutationCreateRecordArgs = {
  input: AnnictCreateRecordInput;
};

export type AnnictMutationCreateReviewArgs = {
  input: AnnictCreateReviewInput;
};

export type AnnictMutationDeleteRecordArgs = {
  input: AnnictDeleteRecordInput;
};

export type AnnictMutationDeleteReviewArgs = {
  input: AnnictDeleteReviewInput;
};

export type AnnictMutationUpdateRecordArgs = {
  input: AnnictUpdateRecordInput;
};

export type AnnictMutationUpdateReviewArgs = {
  input: AnnictUpdateReviewInput;
};

export type AnnictMutationUpdateStatusArgs = {
  input: AnnictUpdateStatusInput;
};

/** An object with an ID. */
export type AnnictNode = {
  /** ID of the object. */
  id: Scalars['ID'];
};

export enum AnnictOrderDirection {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type AnnictOrganization = AnnictNode & {
  __typename?: 'Organization';
  annictId: Scalars['Int'];
  favoriteOrganizationsCount: Scalars['Int'];
  id: Scalars['ID'];
  name: Scalars['String'];
  nameEn: Scalars['String'];
  nameKana: Scalars['String'];
  staffsCount: Scalars['Int'];
  twitterUsername: Scalars['String'];
  twitterUsernameEn: Scalars['String'];
  url: Scalars['String'];
  urlEn: Scalars['String'];
  wikipediaUrl: Scalars['String'];
  wikipediaUrlEn: Scalars['String'];
};

/** The connection type for Organization. */
export type AnnictOrganizationConnection = {
  __typename?: 'OrganizationConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AnnictOrganizationEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<AnnictOrganization>>>;
  /** Information to aid in pagination. */
  pageInfo: AnnictPageInfo;
};

/** An edge in a connection. */
export type AnnictOrganizationEdge = {
  __typename?: 'OrganizationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<AnnictOrganization>;
};

export type AnnictOrganizationOrder = {
  direction: AnnictOrderDirection;
  field: AnnictOrganizationOrderField;
};

export enum AnnictOrganizationOrderField {
  CreatedAt = 'CREATED_AT',
  FavoriteOrganizationsCount = 'FAVORITE_ORGANIZATIONS_COUNT',
}

/** Information about pagination in a connection. */
export type AnnictPageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type AnnictPerson = AnnictNode & {
  __typename?: 'Person';
  annictId: Scalars['Int'];
  birthday: Scalars['String'];
  bloodType: Scalars['String'];
  castsCount: Scalars['Int'];
  favoritePeopleCount: Scalars['Int'];
  genderText: Scalars['String'];
  height: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  nameEn: Scalars['String'];
  nameKana: Scalars['String'];
  nickname: Scalars['String'];
  nicknameEn: Scalars['String'];
  prefecture: AnnictPrefecture;
  staffsCount: Scalars['Int'];
  twitterUsername: Scalars['String'];
  twitterUsernameEn: Scalars['String'];
  url: Scalars['String'];
  urlEn: Scalars['String'];
  wikipediaUrl: Scalars['String'];
  wikipediaUrlEn: Scalars['String'];
};

/** The connection type for Person. */
export type AnnictPersonConnection = {
  __typename?: 'PersonConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AnnictPersonEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<AnnictPerson>>>;
  /** Information to aid in pagination. */
  pageInfo: AnnictPageInfo;
};

/** An edge in a connection. */
export type AnnictPersonEdge = {
  __typename?: 'PersonEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<AnnictPerson>;
};

export type AnnictPersonOrder = {
  direction: AnnictOrderDirection;
  field: AnnictPersonOrderField;
};

export enum AnnictPersonOrderField {
  CreatedAt = 'CREATED_AT',
  FavoritePeopleCount = 'FAVORITE_PEOPLE_COUNT',
}

export type AnnictPrefecture = AnnictNode & {
  __typename?: 'Prefecture';
  annictId: Scalars['Int'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type AnnictProgram = AnnictNode & {
  __typename?: 'Program';
  annictId: Scalars['Int'];
  channel: AnnictChannel;
  episode: AnnictEpisode;
  id: Scalars['ID'];
  rebroadcast: Scalars['Boolean'];
  scPid?: Maybe<Scalars['Int']>;
  startedAt: Scalars['DateTime'];
  state: AnnictProgramState;
  work: AnnictWork;
};

/** The connection type for Program. */
export type AnnictProgramConnection = {
  __typename?: 'ProgramConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AnnictProgramEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<AnnictProgram>>>;
  /** Information to aid in pagination. */
  pageInfo: AnnictPageInfo;
};

/** An edge in a connection. */
export type AnnictProgramEdge = {
  __typename?: 'ProgramEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<AnnictProgram>;
};

export type AnnictProgramOrder = {
  direction: AnnictOrderDirection;
  field: AnnictProgramOrderField;
};

export enum AnnictProgramOrderField {
  StartedAt = 'STARTED_AT',
}

export enum AnnictProgramState {
  Hidden = 'HIDDEN',
  Published = 'PUBLISHED',
}

export type AnnictQuery = {
  __typename?: 'Query';
  /** Fetches an object given its ID. */
  node?: Maybe<AnnictNode>;
  /** Fetches a list of objects given a list of IDs. */
  nodes: Array<Maybe<AnnictNode>>;
  searchCharacters?: Maybe<AnnictCharacterConnection>;
  searchEpisodes?: Maybe<AnnictEpisodeConnection>;
  searchOrganizations?: Maybe<AnnictOrganizationConnection>;
  searchPeople?: Maybe<AnnictPersonConnection>;
  searchWorks?: Maybe<AnnictWorkConnection>;
  user?: Maybe<AnnictUser>;
  viewer?: Maybe<AnnictUser>;
};

export type AnnictQueryNodeArgs = {
  id: Scalars['ID'];
};

export type AnnictQueryNodesArgs = {
  ids: Array<Scalars['ID']>;
};

export type AnnictQuerySearchCharactersArgs = {
  after?: InputMaybe<Scalars['String']>;
  annictIds?: InputMaybe<Array<Scalars['Int']>>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  names?: InputMaybe<Array<Scalars['String']>>;
  orderBy?: InputMaybe<AnnictCharacterOrder>;
};

export type AnnictQuerySearchEpisodesArgs = {
  after?: InputMaybe<Scalars['String']>;
  annictIds?: InputMaybe<Array<Scalars['Int']>>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AnnictEpisodeOrder>;
};

export type AnnictQuerySearchOrganizationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  annictIds?: InputMaybe<Array<Scalars['Int']>>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  names?: InputMaybe<Array<Scalars['String']>>;
  orderBy?: InputMaybe<AnnictOrganizationOrder>;
};

export type AnnictQuerySearchPeopleArgs = {
  after?: InputMaybe<Scalars['String']>;
  annictIds?: InputMaybe<Array<Scalars['Int']>>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  names?: InputMaybe<Array<Scalars['String']>>;
  orderBy?: InputMaybe<AnnictPersonOrder>;
};

export type AnnictQuerySearchWorksArgs = {
  after?: InputMaybe<Scalars['String']>;
  annictIds?: InputMaybe<Array<Scalars['Int']>>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AnnictWorkOrder>;
  seasons?: InputMaybe<Array<Scalars['String']>>;
  titles?: InputMaybe<Array<Scalars['String']>>;
};

export type AnnictQueryUserArgs = {
  username: Scalars['String'];
};

export enum AnnictRatingState {
  Average = 'AVERAGE',
  Bad = 'BAD',
  Good = 'GOOD',
  Great = 'GREAT',
}

export type AnnictRecord = AnnictNode & {
  __typename?: 'Record';
  annictId: Scalars['Int'];
  comment?: Maybe<Scalars['String']>;
  commentsCount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  episode: AnnictEpisode;
  facebookClickCount: Scalars['Int'];
  id: Scalars['ID'];
  likesCount: Scalars['Int'];
  modified: Scalars['Boolean'];
  rating?: Maybe<Scalars['Float']>;
  ratingState?: Maybe<AnnictRatingState>;
  twitterClickCount: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  user: AnnictUser;
  work: AnnictWork;
};

/** The connection type for Record. */
export type AnnictRecordConnection = {
  __typename?: 'RecordConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AnnictRecordEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<AnnictRecord>>>;
  /** Information to aid in pagination. */
  pageInfo: AnnictPageInfo;
};

/** An edge in a connection. */
export type AnnictRecordEdge = {
  __typename?: 'RecordEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<AnnictRecord>;
};

export type AnnictRecordOrder = {
  direction: AnnictOrderDirection;
  field: AnnictRecordOrderField;
};

export enum AnnictRecordOrderField {
  CreatedAt = 'CREATED_AT',
  LikesCount = 'LIKES_COUNT',
}

export type AnnictReview = AnnictNode & {
  __typename?: 'Review';
  annictId: Scalars['Int'];
  body: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  impressionsCount: Scalars['Int'];
  likesCount: Scalars['Int'];
  modifiedAt?: Maybe<Scalars['DateTime']>;
  ratingAnimationState?: Maybe<AnnictRatingState>;
  ratingCharacterState?: Maybe<AnnictRatingState>;
  ratingMusicState?: Maybe<AnnictRatingState>;
  ratingOverallState?: Maybe<AnnictRatingState>;
  ratingStoryState?: Maybe<AnnictRatingState>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  user: AnnictUser;
  work: AnnictWork;
};

/** The connection type for Review. */
export type AnnictReviewConnection = {
  __typename?: 'ReviewConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AnnictReviewEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<AnnictReview>>>;
  /** Information to aid in pagination. */
  pageInfo: AnnictPageInfo;
};

/** An edge in a connection. */
export type AnnictReviewEdge = {
  __typename?: 'ReviewEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<AnnictReview>;
};

export type AnnictReviewOrder = {
  direction: AnnictOrderDirection;
  field: AnnictReviewOrderField;
};

export enum AnnictReviewOrderField {
  CreatedAt = 'CREATED_AT',
  LikesCount = 'LIKES_COUNT',
}

/** Season name */
export enum AnnictSeasonName {
  Autumn = 'AUTUMN',
  Spring = 'SPRING',
  Summer = 'SUMMER',
  Winter = 'WINTER',
}

export type AnnictSeries = AnnictNode & {
  __typename?: 'Series';
  annictId: Scalars['Int'];
  id: Scalars['ID'];
  name: Scalars['String'];
  nameEn: Scalars['String'];
  nameRo: Scalars['String'];
  works?: Maybe<AnnictSeriesWorkConnection>;
};

export type AnnictSeriesWorksArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AnnictSeriesWorkOrder>;
};

/** The connection type for Series. */
export type AnnictSeriesConnection = {
  __typename?: 'SeriesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AnnictSeriesEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<AnnictSeries>>>;
  /** Information to aid in pagination. */
  pageInfo: AnnictPageInfo;
};

/** An edge in a connection. */
export type AnnictSeriesEdge = {
  __typename?: 'SeriesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<AnnictSeries>;
};

/** The connection type for Work. */
export type AnnictSeriesWorkConnection = {
  __typename?: 'SeriesWorkConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AnnictSeriesWorkEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<AnnictWork>>>;
  /** Information to aid in pagination. */
  pageInfo: AnnictPageInfo;
};

/** An edge in a connection. */
export type AnnictSeriesWorkEdge = {
  __typename?: 'SeriesWorkEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  item: AnnictWork;
  /**
   * Deprecated: Use `item` instead.
   * @deprecated Use `item` instead.
   */
  node: AnnictWork;
  summary?: Maybe<Scalars['String']>;
  summaryEn?: Maybe<Scalars['String']>;
};

export type AnnictSeriesWorkOrder = {
  direction: AnnictOrderDirection;
  field: AnnictSeriesWorkOrderField;
};

export enum AnnictSeriesWorkOrderField {
  Season = 'SEASON',
}

export type AnnictStaff = AnnictNode & {
  __typename?: 'Staff';
  annictId: Scalars['Int'];
  id: Scalars['ID'];
  name: Scalars['String'];
  nameEn: Scalars['String'];
  resource: AnnictStaffResourceItem;
  roleOther: Scalars['String'];
  roleOtherEn: Scalars['String'];
  roleText: Scalars['String'];
  sortNumber: Scalars['Int'];
  work: AnnictWork;
};

/** The connection type for Staff. */
export type AnnictStaffConnection = {
  __typename?: 'StaffConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AnnictStaffEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<AnnictStaff>>>;
  /** Information to aid in pagination. */
  pageInfo: AnnictPageInfo;
};

/** An edge in a connection. */
export type AnnictStaffEdge = {
  __typename?: 'StaffEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<AnnictStaff>;
};

export type AnnictStaffOrder = {
  direction: AnnictOrderDirection;
  field: AnnictStaffOrderField;
};

export enum AnnictStaffOrderField {
  CreatedAt = 'CREATED_AT',
  SortNumber = 'SORT_NUMBER',
}

export type AnnictStaffResourceItem = AnnictOrganization | AnnictPerson;

export type AnnictStatus = AnnictNode & {
  __typename?: 'Status';
  annictId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  likesCount: Scalars['Int'];
  state: AnnictStatusState;
  user: AnnictUser;
  work: AnnictWork;
};

export enum AnnictStatusState {
  NoState = 'NO_STATE',
  OnHold = 'ON_HOLD',
  StopWatching = 'STOP_WATCHING',
  WannaWatch = 'WANNA_WATCH',
  Watched = 'WATCHED',
  Watching = 'WATCHING',
}

/** Autogenerated input type of UpdateRecord */
export type AnnictUpdateRecordInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  ratingState?: InputMaybe<AnnictRatingState>;
  recordId: Scalars['ID'];
  shareFacebook?: InputMaybe<Scalars['Boolean']>;
  shareTwitter?: InputMaybe<Scalars['Boolean']>;
};

/** Autogenerated return type of UpdateRecord */
export type AnnictUpdateRecordPayload = {
  __typename?: 'UpdateRecordPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  record?: Maybe<AnnictRecord>;
};

/** Autogenerated input type of UpdateReview */
export type AnnictUpdateReviewInput = {
  body: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  ratingAnimationState: AnnictRatingState;
  ratingCharacterState: AnnictRatingState;
  ratingMusicState: AnnictRatingState;
  ratingOverallState: AnnictRatingState;
  ratingStoryState: AnnictRatingState;
  reviewId: Scalars['ID'];
  shareFacebook?: InputMaybe<Scalars['Boolean']>;
  shareTwitter?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateReview */
export type AnnictUpdateReviewPayload = {
  __typename?: 'UpdateReviewPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  review?: Maybe<AnnictReview>;
};

/** Autogenerated input type of UpdateStatus */
export type AnnictUpdateStatusInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  state: AnnictStatusState;
  workId: Scalars['ID'];
};

/** Autogenerated return type of UpdateStatus */
export type AnnictUpdateStatusPayload = {
  __typename?: 'UpdateStatusPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  work?: Maybe<AnnictWork>;
};

export type AnnictUser = AnnictNode & {
  __typename?: 'User';
  activities?: Maybe<AnnictActivityConnection>;
  annictId: Scalars['Int'];
  avatarUrl?: Maybe<Scalars['String']>;
  backgroundImageUrl?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  followers?: Maybe<AnnictUserConnection>;
  followersCount: Scalars['Int'];
  following?: Maybe<AnnictUserConnection>;
  followingActivities?: Maybe<AnnictActivityConnection>;
  followingsCount: Scalars['Int'];
  id: Scalars['ID'];
  libraryEntries?: Maybe<AnnictLibraryEntryConnection>;
  name: Scalars['String'];
  notificationsCount?: Maybe<Scalars['Int']>;
  onHoldCount: Scalars['Int'];
  programs?: Maybe<AnnictProgramConnection>;
  records?: Maybe<AnnictRecordConnection>;
  recordsCount: Scalars['Int'];
  stopWatchingCount: Scalars['Int'];
  url?: Maybe<Scalars['String']>;
  username: Scalars['String'];
  viewerCanFollow: Scalars['Boolean'];
  viewerIsFollowing: Scalars['Boolean'];
  wannaWatchCount: Scalars['Int'];
  watchedCount: Scalars['Int'];
  watchingCount: Scalars['Int'];
  works?: Maybe<AnnictWorkConnection>;
};

export type AnnictUserActivitiesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AnnictActivityOrder>;
};

export type AnnictUserFollowersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type AnnictUserFollowingArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type AnnictUserFollowingActivitiesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AnnictActivityOrder>;
};

export type AnnictUserLibraryEntriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AnnictLibraryEntryOrder>;
  seasonFrom?: InputMaybe<Scalars['String']>;
  seasonUntil?: InputMaybe<Scalars['String']>;
  seasons?: InputMaybe<Array<Scalars['String']>>;
  states?: InputMaybe<Array<AnnictStatusState>>;
};

export type AnnictUserProgramsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AnnictProgramOrder>;
  unwatched?: InputMaybe<Scalars['Boolean']>;
};

export type AnnictUserRecordsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  hasComment?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AnnictRecordOrder>;
};

export type AnnictUserWorksArgs = {
  after?: InputMaybe<Scalars['String']>;
  annictIds?: InputMaybe<Array<Scalars['Int']>>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AnnictWorkOrder>;
  seasons?: InputMaybe<Array<Scalars['String']>>;
  state?: InputMaybe<AnnictStatusState>;
  titles?: InputMaybe<Array<Scalars['String']>>;
};

/** The connection type for User. */
export type AnnictUserConnection = {
  __typename?: 'UserConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AnnictUserEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<AnnictUser>>>;
  /** Information to aid in pagination. */
  pageInfo: AnnictPageInfo;
};

/** An edge in a connection. */
export type AnnictUserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<AnnictUser>;
};

/** An anime title */
export type AnnictWork = AnnictNode & {
  __typename?: 'Work';
  annictId: Scalars['Int'];
  casts?: Maybe<AnnictCastConnection>;
  episodes?: Maybe<AnnictEpisodeConnection>;
  episodesCount: Scalars['Int'];
  id: Scalars['ID'];
  image?: Maybe<AnnictWorkImage>;
  malAnimeId?: Maybe<Scalars['String']>;
  media: AnnictMedia;
  noEpisodes: Scalars['Boolean'];
  officialSiteUrl?: Maybe<Scalars['String']>;
  officialSiteUrlEn?: Maybe<Scalars['String']>;
  programs?: Maybe<AnnictProgramConnection>;
  reviews?: Maybe<AnnictReviewConnection>;
  reviewsCount: Scalars['Int'];
  satisfactionRate?: Maybe<Scalars['Float']>;
  seasonName?: Maybe<AnnictSeasonName>;
  seasonYear?: Maybe<Scalars['Int']>;
  seriesList?: Maybe<AnnictSeriesConnection>;
  staffs?: Maybe<AnnictStaffConnection>;
  syobocalTid?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
  titleEn?: Maybe<Scalars['String']>;
  titleKana?: Maybe<Scalars['String']>;
  titleRo?: Maybe<Scalars['String']>;
  twitterHashtag?: Maybe<Scalars['String']>;
  twitterUsername?: Maybe<Scalars['String']>;
  viewerStatusState?: Maybe<AnnictStatusState>;
  watchersCount: Scalars['Int'];
  wikipediaUrl?: Maybe<Scalars['String']>;
  wikipediaUrlEn?: Maybe<Scalars['String']>;
};

/** An anime title */
export type AnnictWorkCastsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AnnictCastOrder>;
};

/** An anime title */
export type AnnictWorkEpisodesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AnnictEpisodeOrder>;
};

/** An anime title */
export type AnnictWorkProgramsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AnnictProgramOrder>;
};

/** An anime title */
export type AnnictWorkReviewsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  hasBody?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AnnictReviewOrder>;
};

/** An anime title */
export type AnnictWorkSeriesListArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** An anime title */
export type AnnictWorkStaffsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AnnictStaffOrder>;
};

/** The connection type for Work. */
export type AnnictWorkConnection = {
  __typename?: 'WorkConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AnnictWorkEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<AnnictWork>>>;
  /** Information to aid in pagination. */
  pageInfo: AnnictPageInfo;
};

/** An edge in a connection. */
export type AnnictWorkEdge = {
  __typename?: 'WorkEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<AnnictWork>;
};

export type AnnictWorkImage = AnnictNode & {
  __typename?: 'WorkImage';
  annictId?: Maybe<Scalars['Int']>;
  copyright?: Maybe<Scalars['String']>;
  facebookOgImageUrl?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internalUrl?: Maybe<Scalars['String']>;
  recommendedImageUrl?: Maybe<Scalars['String']>;
  twitterAvatarUrl?: Maybe<Scalars['String']>;
  twitterBiggerAvatarUrl?: Maybe<Scalars['String']>;
  twitterMiniAvatarUrl?: Maybe<Scalars['String']>;
  twitterNormalAvatarUrl?: Maybe<Scalars['String']>;
  work?: Maybe<AnnictWork>;
};

export type AnnictWorkImageInternalUrlArgs = {
  size: Scalars['String'];
};

export type AnnictWorkOrder = {
  direction: AnnictOrderDirection;
  field: AnnictWorkOrderField;
};

export enum AnnictWorkOrderField {
  CreatedAt = 'CREATED_AT',
  Season = 'SEASON',
  WatchersCount = 'WATCHERS_COUNT',
}

export type AnnictSearchWorksByIdsQueryVariables = Exact<{
  ids?: InputMaybe<Array<Scalars['Int']> | Scalars['Int']>;
}>;

export type AnnictSearchWorksByIdsQuery = {
  __typename?: 'Query';
  searchWorks?: {
    __typename?: 'WorkConnection';
    nodes?: Array<{
      __typename?: 'Work';
      annictId: number;
      officialSiteUrl?: string | null;
      title: string;
      twitterUsername?: string | null;
      image?: {
        __typename?: 'WorkImage';
        facebookOgImageUrl?: string | null;
        recommendedImageUrl?: string | null;
      } | null;
    } | null> | null;
  } | null;
};

export type AnnictSearchWorksBySeasonsQueryVariables = Exact<{
  seasons?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
}>;

export type AnnictSearchWorksBySeasonsQuery = {
  __typename?: 'Query';
  searchWorks?: {
    __typename?: 'WorkConnection';
    nodes?: Array<{
      __typename?: 'Work';
      annictId: number;
      officialSiteUrl?: string | null;
      title: string;
      twitterUsername?: string | null;
      image?: {
        __typename?: 'WorkImage';
        facebookOgImageUrl?: string | null;
        recommendedImageUrl?: string | null;
      } | null;
    } | null> | null;
  } | null;
};

export const SearchWorksByIdsDocument = gql`
  query searchWorksByIds($ids: [Int!]) {
    searchWorks(annictIds: $ids) {
      nodes {
        annictId
        image {
          facebookOgImageUrl
          recommendedImageUrl
        }
        officialSiteUrl
        title
        twitterUsername
      }
    }
  }
`;
export const SearchWorksBySeasonsDocument = gql`
  query searchWorksBySeasons($seasons: [String!]) {
    searchWorks(
      seasons: $seasons
      orderBy: { field: WATCHERS_COUNT, direction: DESC }
    ) {
      nodes {
        annictId
        image {
          facebookOgImageUrl
          recommendedImageUrl
        }
        officialSiteUrl
        title
        twitterUsername
      }
    }
  }
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (
  action,
  _operationName,
  _operationType
) => action();

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper
) {
  return {
    searchWorksByIds(
      variables?: AnnictSearchWorksByIdsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<AnnictSearchWorksByIdsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<AnnictSearchWorksByIdsQuery>(
            SearchWorksByIdsDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'searchWorksByIds',
        'query'
      );
    },
    searchWorksBySeasons(
      variables?: AnnictSearchWorksBySeasonsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<AnnictSearchWorksBySeasonsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<AnnictSearchWorksBySeasonsQuery>(
            SearchWorksBySeasonsDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'searchWorksBySeasons',
        'query'
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
