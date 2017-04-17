/* @flow */
import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby/dist/isomorphic/gatsby-helpers';
import { config } from 'config';

const Header = (): React.Element<any> => (
  <h3
    style={{
      fontFamily: 'Montserrat, sans-serif',
      marginTop: 0,
    }}
  >
    <Link
      style={{
        boxShadow: 'none',
        textDecoration: 'none',
        color: 'inherit',
      }}
      to={prefixLink('/')}
    >
      {config.blogTitle}
    </Link>
  </h3>
);

export default Header;
