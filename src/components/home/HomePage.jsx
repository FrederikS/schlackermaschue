/* @flow */
import React from 'react';
import { config } from 'config';
import { prefixLink } from 'gatsby/dist/isomorphic/gatsby-helpers';
import PostList from '../post/list';
import PageLayout from '../layout/page';

type Props = {
  posts: Page[],
};

const HomePage = ({ posts }: Props): React.Element<any> => (
  <PageLayout
    image={prefixLink(config.blogImage)}
    title={config.blogTitle}
    description={config.blogDescription}
  >
    <PostList posts={posts} />
  </PageLayout>
);

export default HomePage;
