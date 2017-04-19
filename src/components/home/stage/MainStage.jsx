/* @flow */
import React from 'react';
import { config } from 'config';
import { prefixLink } from 'gatsby/dist/isomorphic/gatsby-helpers';
import styled from 'styled-components';

const StageImageWrapper = styled.div`
    background-image: url(${prefixLink(config.blogImage)});
    position: relative;
    width: 100%;
    height: 60vh;
    margin-bottom: 0.5rem;
    text-align: center;
    // background: #222 no-repeat center center;
    background-size: cover;
    overflow: hidden;
`;

const Inner = styled.div`
    width: 80%;
    position: relative;
    max-width: 710px;
    margin: 2em auto;
`;

const PageTitle = styled.h1`
    margin: 10px 0 10px 0;
    letter-spacing: -1px;
    font-weight: 700;
    color: #fff;
`;

const PageDescription = styled.h2`
    margin: 0;
    line-height: 1.5em;
    font-weight: 400;
    letter-spacing: 0.01rem;
    color: rgba(255,255,255,0.8);
`;

const MainStage = (): React.Element<any> => (
  <StageImageWrapper>
    <Inner>
      <PageTitle>{config.blogTitle}</PageTitle>
      <PageDescription>{config.blogDescription}</PageDescription>
    </Inner>
  </StageImageWrapper>
);

export default MainStage;
