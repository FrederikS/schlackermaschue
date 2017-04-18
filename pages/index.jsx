/* @flow */
import React from 'react';
import HomePage from '../src/components/home/';

type Props = {
  route: Route,
};

const BlogIndex = ({ route }: Props): React.Element<any> => (
  <HomePage posts={route.pages} />
);

export default BlogIndex;
