import React from 'react';
import { prefixLink } from 'gatsby/dist/isomorphic/gatsby-helpers';
import { config } from '../config.toml';
import { rhythm } from '../utils/typography';

const Bio = () => (
  <p
    style={{
      marginBottom: rhythm(2.5),
    }}
  >
    <img
      src={prefixLink('/static/img/profile-pic.jpg')}
      alt={`author ${config.authorName}`}
      width="46"
      height="46"
      style={{
        float: 'left',
        marginRight: rhythm(1 / 4),
        marginBottom: 0,
        width: rhythm(2),
        height: rhythm(2),
      }}
    />
    Written by
    {' '}
    <strong>{config.authorName}</strong>
    {' '}
    who lives and works in San Francisco building useful things.
    {' '}
    <a href="https://twitter.com/kylemathews">
      You should follow him on Twitter
    </a>
  </p>
);

export default Bio;
