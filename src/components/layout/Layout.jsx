/* @flow */
import React from 'react';
import Helmet from 'react-helmet';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import styled from 'styled-components';
import { prefixLink } from 'gatsby/dist/isomorphic/gatsby-helpers';
import { config } from 'config';
import Header from './header';
import Footer from './footer';
import '../../../css/transitions.css';

type Props = {
  children: React.Element<any>,
  page: ?Page,
  location: RouteLocation,
};

const ContentWrapper = styled.div`
  position: absolute;
  width: 100%;
`;

const Layout = ({ children, page, location }: Props): React.Element<any> => {
  const defaultMetaData = {
    title: config.blogTitle,
    description: config.blogDescription,
    keywords: 'blog',
  };
  const { title, description, keywords } = page ? page.data : defaultMetaData;
  return (
    <div>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: description },
          { name: 'keywords', content: keywords },
        ]}
      />
      <CSSTransitionGroup
        transitionName="move"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
      >
        <ContentWrapper key={location.pathname}>
          <Header withHomeLink={page ? page.path !== prefixLink('/') : true} />
          <main role="main">
            {children}
          </main>
          <Footer />
        </ContentWrapper>
      </CSSTransitionGroup>
    </div>
  );
};

export default Layout;
