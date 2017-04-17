/* @flow */
import React from 'react';
import moment from 'moment';
import Helmet from 'react-helmet';
import { config } from 'config';
import typography from '../utils/typography';

type Props = {
  post: Post,
};

const { rhythm } = typography;

const PostComponent = ({ post }: Props): React.Element<any> => (
  <div className="markdown">
    <Helmet title={`${post.title} | ${config.blogTitle}`} />
    <h1 style={{ marginTop: 0 }}>{post.title}</h1>
    {/* eslint-disable react/no-danger */}
    <div dangerouslySetInnerHTML={{ __html: post.body }} />
    {/* eslint-enable react/no-danger */}
    <em
      style={{
        display: 'block',
        marginBottom: rhythm(2),
      }}
    >
      Posted {moment(post.date).format('MMMM D, YYYY')}
    </em>
    <hr
      style={{
        marginBottom: rhythm(2),
      }}
    />
  </div>
);

export default PostComponent;
