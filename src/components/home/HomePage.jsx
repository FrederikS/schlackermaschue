/* @flow */
import React from 'react';
import { config } from 'config';
import PostList from '../post/list';
import PageLayout from '../layout/page';

type Props = {
  posts: Page[],
};

const HomePage = ({ posts }: Props): React.Element<any> => (
  <PageLayout
    image={config.blogImage}
    title={config.blogTitle}
    description={config.blogDescription}
  >
    <PostList posts={posts} />
  </PageLayout>
);

export default HomePage;
