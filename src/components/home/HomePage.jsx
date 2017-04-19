/* @flow */
import React from 'react';
import PostList from '../post/list';
import MainStage from './stage/';
import ContentContainer from '../layout/content';

type Props = {
  posts: Page[],
};

const HomePage = ({ posts }: Props): React.Element<any> => (
  <div>
    <MainStage />
    <ContentContainer>
      <PostList posts={posts} />
    </ContentContainer>
  </div>
);

export default HomePage;
