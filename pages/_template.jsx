/* @flow */
import React from 'react';
import Layout from '../src/components/layout/';

type Props = {
  children: React.Element<any>,
};

const Template = ({ children }: Props): React.Element<any> => (
  <Layout>
    {children}
  </Layout>
);

export default Template;
