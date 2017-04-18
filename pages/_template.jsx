/* @flow */
import React from 'react';
import { Container } from 'react-responsive-grid';
import Header from '../src/components/Header';

type Props = {
  children: React.Element<any>,
};

const Template = ({ children }: Props): React.Element<any> => (
  <Container>
    <Header />
    {children}
  </Container>
);

export default Template;
