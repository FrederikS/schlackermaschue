/* @flow */
import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import styled from 'styled-components';
import './transition.global.css';

type Props = {
  children: React.Element<any>,
  path: string,
};

const ContentWrapper = styled.div`
  width: 100%;
  margin-top: ${props => `${props.scrollY}px`};
`;

const PageTransition = ({ path, children }: Props): React.Element<any> => (
  <CSSTransitionGroup
    transitionName="fade"
    transitionEnterTimeout={500}
    transitionLeaveTimeout={500}
  >
    <ContentWrapper key={path}>
      {children}
    </ContentWrapper>
  </CSSTransitionGroup>
);

export default PageTransition;
