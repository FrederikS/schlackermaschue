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
  children: React.Element<any>,
  location: RouteLocation,
};

const Layout = ({ children, location }: Props, { metadata: { pkg } }: Context) =>
  <Container>
    <DefaultHeadMeta />
    <Header withHomeLink={location.pathname !== '/'} title={pkg.name} />
    <Content>
      {children}
    </Content>
    <Footer {...pkg} />
  </Container>;

Layout.contextTypes = {
  metadata: PropTypes.object.isRequired,
};

export default Layout;
