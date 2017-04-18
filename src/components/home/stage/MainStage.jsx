/* @flow */
import React from 'react';
import { config } from 'config';
import { prefixLink } from 'gatsby/dist/isomorphic/gatsby-helpers';
import styled from 'styled-components';

const StageImageWrapper = styled.div`
    backgroundImage: url(${prefixLink(config.blogImage)});
    position: relative;
    display: table;
    width: 100%;
    height: 60vh;
    margin-bottom: 5rem;
    text-align: center;
    // background: #222 no-repeat center center;
    background-size: cover;
    overflow: hidden;
`;

const Vertical = styled.div`
    display: table-cell;
    vertical-align: middle;
`;

const Inner = styled.div`
    width: 80%;
    position: relative;
    width: 80%;
    max-width: 710px;
    margin: 0 auto;
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
    <Vertical>
      <Inner>
        <PageTitle>Finding The Way Home</PageTitle>
        <PageDescription>
          A beautiful narrative written with the worlds most elegant publishing platform. The story begins here.
        </PageDescription>
      </Inner>
    </Vertical>
  </StageImageWrapper>
);

export default MainStage;
