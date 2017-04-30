/* @flow */
import React from 'react';
import styled from 'styled-components';
import { UndecoratedLink } from '../../Link';

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
  title: string,
};

const Header = ({ withHomeLink, title }: Props): React.Element<any> => (
  <header>
    <Nav>
      {withHomeLink &&
        <BlogHeadline>
          <UndecoratedLink to="/">
            {title}
          </UndecoratedLink>
        </BlogHeadline>}
    </Nav>
  </header>
);

Header.defaultProps = {
  withHomeLink: true,
};

Header.contextTypes = {};

export default Header;
