/* @flow */
import React from 'react';
import sortBy from 'lodash/sortBy';
import access from 'safe-access';
import include from 'underscore.string/include';
import styled from 'styled-components';
import typography from '../../../utils/typography';
import PostTeaser from '../teaser';

type Props = {
  posts: Page[],
};

const PostItemList = styled.ol`
    list-style-type: none;
    margin-right: 1.3rem;
    margin-bottom: 0;
`;

const PostItem = styled.li`
    margin-bottom: ${typography.rhythm(1 / 4)};
    padding: 20px 0;
    border-bottom: ${props => (props.lastChild ? '0px' : '1px solid #f2f2f0')};
`;

const PostList = ({ posts }: Props): React.Element<any> => {
  const sortedPosts = sortBy(posts, page => access(page, 'data.date'))
    .reverse()
    .filter(
      page => access(page, 'file.ext') === 'md' && !include(page.path, '/404')
    );

  return (
    <PostItemList>
      {sortedPosts.map((page, index) => (
        <PostItem key={page.path} lastChild={index === sortedPosts.length - 1}>
          <PostTeaser url={page.path} post={page.data} />
        </PostItem>
      ))}
    </PostItemList>
  );
};

export default PostList;
