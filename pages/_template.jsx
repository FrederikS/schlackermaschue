import React from 'react';
import { Link } from 'react-router';
import { Container } from 'react-responsive-grid';
import { prefixLink } from 'gatsby/dist/isomorphic/gatsby-helpers';
import PropTypes from 'prop-types';
import { rhythm, scale } from '../utils/typography';
import { config } from '../config.toml';

const Template = ({ location, children }) => {
  let header;
  if (location.pathname === prefixLink('/')) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
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
      </h1>
    );
  } else {
    header = (
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
  }
  return (
    <Container
      style={{
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      {header}
      {children}
    </Container>
  );
};

Template.propTypes = {
  children: PropTypes.any.isRequired,
  location: PropTypes.object.isRequired,
};

export default Template;
