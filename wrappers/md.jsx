import React from 'react';
import moment from 'moment';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import ReadNext from '../components/ReadNext';
import { rhythm } from '../utils/typography';
import { config } from '../config.toml';
import Bio from '../components/Bio';

import '../css/zenburn.css';

const MarkdownWrapper = ({ route }) => {
  const post = route.page.data;

  return (
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
      <ReadNext post={post} pages={route.pages} />
      <Bio />
    </div>
  );
};

MarkdownWrapper.propTypes = {
  route: PropTypes.object.isRequired,
};

export default MarkdownWrapper;
