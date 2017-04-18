/* @flow */
import React from 'react';
import MainPage from '../src/components/main/';

type Props = {
  route: Route,
};

const BlogIndex = ({ route }: Props): React.Element<any> => (
  <MainPage posts={route.pages} />
);

export default BlogIndex;
