/* @flow */
import React from 'react';
import styled from 'styled-components';
import Hero from './Hero';

const Inner = styled.div`
  width: 80%;
  position: relative;
  max-width: 710px;
  margin: 3em auto;
`;

const PageTitle = styled.h1`
  margin: 10px 0;
  letter-spacing: -1px;
  font-weight: 700;
  color: #fff;
`;

type Props = {
  hero: string,
  title: string,
};

const Stage = (props: Props): React.Element<any> => (
  <Hero image={props.hero}>
    <Inner>
      <PageTitle>{props.title}</PageTitle>
    </Inner>
  </Hero>
);

export default Stage;
