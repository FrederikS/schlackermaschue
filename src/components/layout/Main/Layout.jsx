/* @flow */
import React, { PropTypes } from 'react';
import styled from 'styled-components';
import DefaultHeadMeta from './Meta';
import Header from '../Header';
import Content from '../Content';
import Footer from '../Footer';

import './index.global.css';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

type Props = {
  location: RouteLocation,
  children: React.Element<any>,
};

const Layout = (
  { location, children }: Props,
  { metadata: { pkg } }: Context
) => (
  <Container>
    <DefaultHeadMeta />
    <Header title={pkg.name} />
    <Content>
      {children}
    </Content>
    <Footer {...pkg} />
  </Container>
);

Layout.contextTypes = {
  metadata: PropTypes.object.isRequired,
};

export default Layout;
