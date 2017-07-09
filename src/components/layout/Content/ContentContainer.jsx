/* @flow */
import React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.Element<any>,
};

const Container = styled.main`
  flex: 1 1 auto;
  display: flex;
  align-items: stretch;
  flex-direction: column;
`;

const ContentContainer = ({ children }: Props): React.Element<any> =>
  <Container>
    {children}
  </Container>;

export default ContentContainer;
