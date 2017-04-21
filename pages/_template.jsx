/* @flow */
import React from 'react';
import Layout from '../src/components/layout/';

type Props = {
  children: React.Element<any>,
  route: Route,
  location: RouteLocation,
};

const Template = ({ children, route, location }: Props): React.Element<any> => {
  const currentPage = route.pages.find(page => page.path === location.pathname);
  return (
    <Layout page={currentPage}>
      {children}
    </Layout>
  );
};

export default Template;
