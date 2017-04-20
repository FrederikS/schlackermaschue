/* @flow */
import React from 'react';
import { config } from 'config';
import styled from 'styled-components';
import { UndecoratedLink } from '../../link';

const BlogHeadline = styled.h3`
    font-size: 1em;
    margin: 0.5em;
    color: #fff;
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
          <UndecoratedLink to="/">
            {config.blogTitle}
          </UndecoratedLink>
        </BlogHeadline>}
    </Nav>
  </header>
);

Header.defaultProps = {
  withHomeLink: true,
};

export default Header;
