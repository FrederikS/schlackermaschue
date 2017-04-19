/* @flow */
import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby/dist/isomorphic/gatsby-helpers';
import { config } from 'config';
import styled from 'styled-components';

const BlogHeadline = styled.h3`
    margin-top: 0;
    font-size: 2rem;
    color: #a0a0a0;
`;

const HomeLink = styled(Link)`
    box-shadow: none;
    text-decoration: none;
    color: inherit;
`;

const Nav = styled.nav`
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 3;
`;

const Header = (): React.Element<any> => (
  <header>
    <Nav>
      <BlogHeadline>
        <HomeLink to={prefixLink('/')}>
          {config.blogTitle}
        </HomeLink>
      </BlogHeadline>
    </Nav>
  </header>
);

export default Header;
