/* @flow */
import React from 'react';
import Post from '../src/components/Post';

import '../css/zenburn.css';

type Props = {
  route: Route,
};

const MarkdownWrapper = ({ route }: Props): React.Element<any> => (
  <Post post={route.page.data} />
);

export default MarkdownWrapper;
