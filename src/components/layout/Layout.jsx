/* @flow */
import React from 'react';
import Helmet from 'react-helmet';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import styled from 'styled-components';
import Header from './header';
import Footer from './footer';
import '../../../css/transitions.css';

type Props = {
  children: React.Element<any>,
  page: Page,
};

const ContentWrapper = styled.div`
  position: absolute;
  width: 100%;
`;
const Container = styled.div`
  position: relative;
`;

const Layout = ({ children, page }: Props): React.Element<any> => {
  const { title, description, keywords } = page.data;
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
        <ContentWrapper key={page.path}>
          <Header withHomeLink={page ? page.path !== '/' : true} />
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
