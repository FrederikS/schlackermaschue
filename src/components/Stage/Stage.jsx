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

const PageDescription = styled.h2`
  margin: 0;
  line-height: 1.5em;
  font-weight: 400;
  letter-spacing: 0.01rem;
  font-size: 1.2em;
  color: rgba(255, 255, 255, 0.8);
`;

type Props = {
  hero: string,
  title: string,
  description?: string,
};

const Stage = (props: Props): React.Element<any> => (
  <Hero image={props.hero}>
    <Inner>
      <PageTitle>{props.title}</PageTitle>
      {props.description &&
        <PageDescription>{props.description}</PageDescription>}
    </Inner>
  </Hero>
);

export default Stage;
