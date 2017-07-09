/* @flow */
import React from 'react';
import PostList from '../../components/post/List';
import PageLayout from '../Page';

const HomePage = (props: PageProps): React.Element<any> =>
  <PageLayout {...props}>
    <PostList />
  </PageLayout>;

export default HomePage;
