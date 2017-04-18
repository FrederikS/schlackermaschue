/* @flow */
import React from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import PostList from '../PostList';
import MainStage from './stage/';

type Props = {
  posts: Page[],
};

const HomePage = ({ posts }: Props): React.Element<any> => (
  <main>
    <Helmet
      title={config.blogTitle}
      meta={[
        { name: 'description', content: 'Sample blog' },
        { name: 'keywords', content: 'blog, articles' },
      ]}
    />
    <MainStage />
    <PostList posts={posts} />
  </main>
);

export default HomePage;
