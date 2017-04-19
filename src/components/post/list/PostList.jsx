/* @flow */
import React from 'react';
import sortBy from 'lodash/sortBy';
import access from 'safe-access';
import include from 'underscore.string/include';
import typography from '../../../utils/typography';
import PostTeaser from '../teaser';

type Props = {
  posts: Page[],
};

const PostList = ({ posts }: Props): React.Element<any> => {
  const sortedPosts = sortBy(posts, page => access(page, 'data.date'))
    .reverse()
    .filter(
      page => access(page, 'file.ext') === 'md' && !include(page.path, '/404')
    );

  return (
    <ul>
      {sortedPosts.map(page => (
        <li
          key={page.path}
          style={{
            marginBottom: typography.rhythm(1 / 4),
          }}
        >
          <PostTeaser url={page.path} post={page.data} />
        </li>
      ))}
    </ul>
  );
};

export default PostList;
