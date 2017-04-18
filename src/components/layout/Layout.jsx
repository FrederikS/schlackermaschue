/* @flow */
import React from 'react';
import { Container } from 'react-responsive-grid';
import typography from '../../utils/typography';
import Header from '../Header';

type Props = {
  children: React.Element<any>,
};

const { rhythm } = typography;

const Layout = ({ children }: Props): React.Element<any> => (
  <Container
    style={{
      maxWidth: rhythm(24),
      padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
    }}
  >
    <Header />
    {children}
  </Container>
);

export default Layout;
