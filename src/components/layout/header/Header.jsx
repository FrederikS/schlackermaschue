/* @flow */
import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby/dist/isomorphic/gatsby-helpers';
import { config } from 'config';
import styled from 'styled-components';

const BlogHeadline = styled.h3`
    font-size: 1em;
    margin: 0.5em;
    color: #fff;
`;

const HomeLink = styled(Link)`
    box-shadow: none;
    text-decoration: none;
    color: inherit;
`;

const Nav = styled.nav`    
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 3;
`;

type Props = {
  withHomeLink?: boolean,
};

const Header = ({ withHomeLink }: Props): React.Element<any> => (
  <header>
    <Nav>
      {withHomeLink &&
        <BlogHeadline>
          <HomeLink to={prefixLink('/')}>
            {config.blogTitle}
          </HomeLink>
        </BlogHeadline>}
    </Nav>
  </header>
);

Header.defaultProps = {
  withHomeLink: true,
};

export default Header;
