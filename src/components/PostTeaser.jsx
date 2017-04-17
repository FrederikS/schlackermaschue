/* @flow */
import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby/dist/isomorphic/gatsby-helpers';

type Props = {
  url: string,
  post: Post,
};

const PostTeaser = ({ url, post }: Props): React.Element<any> => (
  <Link style={{ boxShadow: 'none' }} to={prefixLink(url)}>
    {post.title}
  </Link>
);

export default PostTeaser;
