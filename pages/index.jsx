/* @flow */
import React from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import { prefixLink } from 'gatsby/dist/isomorphic/gatsby-helpers';
import { Link } from 'react-router';
import PostList from '../src/components/PostList';
import typography from '../src/utils/typography';

type Props = {
  route: Route,
};

const { scale, rhythm } = typography;

const BlogIndex = ({ route }: Props): React.Element<any> => (
  <div>
    <Helmet
      title={config.blogTitle}
      meta={[
        { name: 'description', content: 'Sample blog' },
        { name: 'keywords', content: 'blog, articles' },
      ]}
    />
    <h1
      style={{
        ...scale(1.5),
        marginBottom: rhythm(1.5),
        marginTop: 0,
      }}
    >
      <Link
        style={{
          boxShadow: 'none',
          textDecoration: 'none',
          color: 'inherit',
        }}
        to={prefixLink('/')}
      >
        {config.blogTitle}
      </Link>
    </h1>
    <PostList posts={route.pages} />
  </div>
);

export default BlogIndex;
