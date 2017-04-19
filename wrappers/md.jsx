/* @flow */
import React from 'react';
import Post from '../src/components/post';

import '../css/zenburn.css';

type Props = {
  route: RouteForWrapper,
};

const MarkdownWrapper = ({ route }: Props): React.Element<any> => (
  <Post post={route.page.data} />
);

export default MarkdownWrapper;
