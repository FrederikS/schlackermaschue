/* @flow */
import React from 'react';
import enhanceCollection from 'phenomic/lib/enhance-collection';
import styled from 'styled-components';
import PostTeaser from '../Teaser';

type Props = {
  numberOfPosts?: number,
};

type Context = {
  collection: Post[],
};

const PostItemList = styled.ol`
  list-style-type: none;
  margin-right: 1.3rem;
  margin-bottom: 0;
`;

const PostItem = styled.li`
  margin-bottom: 0.5em;
  padding: 20px 0;
  border-bottom: ${props => (props.lastChild ? '0px' : '1px solid #f2f2f0')};
`;

const PostList = (
  { numberOfPosts = 5 }: Props,
  { collection }: Context
): React.Element<any> => {
  const latestPosts: Post[] = enhanceCollection(collection, {
    filter: { layout: 'Post' },
    sort: 'date',
    reverse: true,
  }).slice(0, numberOfPosts);

  return (
    <PostItemList>
      {/* eslint-disable no-underscore-dangle */}
      {latestPosts.map((post, index) => (
        <PostItem key={post.__url} lastChild={index === latestPosts.length - 1}>
          <PostTeaser post={post} />
        </PostItem>
      ))}
      {/* eslint-enable no-underscore-dangle */}
    </PostItemList>
  );
};

PostList.contextTypes = {
  collection: React.PropTypes.array.isRequired,
};

export default PostList;
